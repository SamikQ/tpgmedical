// src/index.ts

import express from "express";
import multer from "multer";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { parse } from "csv-parse";
import fs from "fs";
import path from "path";

const app = express();

// Папка, куди Multer тимчасово зберігає завантажені файли
const UPLOAD_DIR = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
const upload = multer({ dest: UPLOAD_DIR });

/**
 * Рекурсивно збирає всі URL із переданого XML.
 * Якщо це <urlset>, збирає <loc>.
 * Якщо це <sitemapindex>, заходить у кожен під-sitemap (HTTP або локальний) теж.
 */
async function collectUrlsFromXml(
  xmlText: string,
  uploadDir: string
): Promise<string[]> {
  const urls: string[] = [];
  const doc: any = await parseStringPromise(xmlText);

  if (doc.urlset) {
    // Простий sitemap
    urls.push(...doc.urlset.url.map((u: any) => u.loc[0] as string));
  } else if (doc.sitemapindex) {
    // Індекс під-sitemap-ів
    for (const sm of doc.sitemapindex.sitemap) {
      const loc: string = sm.loc[0];
      let subXml: string;

      if (loc.startsWith("http")) {
        // Завантажуємо віддалений sitemap
        const resp = await axios.get<string>(loc);
        subXml = resp.data;
      } else {
        // Читаємо локальний файл у uploads
        const fileName = path.basename(loc);
        subXml = fs.readFileSync(path.join(uploadDir, fileName), "utf-8");
      }

      // Рекурсивно парсимо під-sitemap
      const childUrls = await collectUrlsFromXml(subXml, uploadDir);
      urls.push(...childUrls);
    }
  } else {
    // Невідомий формат
    throw new Error("Невідомий формат XML у collectUrlsFromXml");
  }

  return urls;
}

app.post(
  "/compare",
  upload.fields([
    { name: "sitemap", maxCount: 1 },
    { name: "crawl", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // —————————————
      // 1) Оброблюємо sitemap файл
      // —————————————
      const sitemapFile = req.files!["sitemap"][0];
      const xml = fs.readFileSync(sitemapFile.path, "utf-8");

      // Збираємо всі URL (включно з під-sitemap-ами)
      const sitemapUrls = await collectUrlsFromXml(xml, UPLOAD_DIR);

      // —————————————
      // 2) Оброблюємо CSV із crawl
      // —————————————
      const crawlFile = req.files!["crawl"][0];
      const crawlContent = fs.readFileSync(crawlFile.path, "utf-8");
      const crawlUrls: string[] = [];

      await new Promise<void>((resolve, reject) => {
        parse(
          crawlContent,
          { from_line: 1, trim: true },
          (err, records: string[][]) => {
            if (err) return reject(err);
            for (const row of records) {
              if (row[0]) crawlUrls.push(row[0]);
            }
            resolve();
          }
        );
      });

      // —————————————
      // 3) Порівняння
      // —————————————
      const setSm = new Set(sitemapUrls);
      const setCr = new Set(crawlUrls);

      const onlyInSitemap = sitemapUrls.filter((u) => !setCr.has(u));
      const onlyInCrawl = crawlUrls.filter((u) => !setSm.has(u));

      // Повертаємо результат
      return res.json({ onlyInSitemap, onlyInCrawl });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: error.message || "Server error" });
    } finally {
      // —————————————
      // 4) Прибираємо тимчасові файли Multer
      // —————————————
      if (req.files) {
        for (const fArr of Object.values(req.files)) {
          for (const f of fArr as Express.Multer.File[]) {
            try {
              fs.unlinkSync(f.path);
            } catch {}
          }
        }
      }
    }
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`▶️ Сервер запущено на http://localhost:${PORT}`)
);
