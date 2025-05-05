// crawl.js
const Crawler = require("simplecrawler");
const fs = require("fs");

// Стартовий URL і шлях вихідного CSV
const START_URL = "https://tpgmedical.group";
const OUT_CSV   = "./uploads/crawl_urls.csv";

// Переконайтесь, що папка uploads/ існує
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads", { recursive: true });
}

// Ініціалізуємо краулер одним рядком
const crawler = new Crawler(START_URL);

// Налаштування краулера
crawler.maxDepth       = 5;    // глибина обходу
crawler.maxConcurrency = 5;    // одночасні з’єднання
crawler.userAgent      = "simplecrawler";

// Фільтруємо тільки HTTP/HTTPS
crawler.addFetchCondition((queueItem) =>
  queueItem.url.startsWith("http://") || queueItem.url.startsWith("https://")
);

// Збираємо знайдені URL у Set (щоб уникнути дублів)
const found = new Set();

crawler.on("fetchcomplete", (queueItem) => {
  found.add(queueItem.url);
});

crawler.on("fetcherror", (queueItem, response) => {
  console.warn(`⚠️ Fetch error ${response.statusCode} at ${queueItem.url}`);
});

crawler.on("complete", () => {
  // Записуємо відсортований список у CSV
  const arr = Array.from(found).sort();
  fs.writeFileSync(OUT_CSV, arr.join("\n"), "utf-8");
  console.log(`✅ Зібрано ${arr.length} URL у ${OUT_CSV}`);
});

// Старт
console.log(`▶️  Запускаємо краулер для ${START_URL} ...`);
crawler.start();
