import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-1">
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        Home
      </Link>
      <Link
        href="/about-us"
        className="text-xl text-blue-500 inline-block mt-8"
      >
        About us
      </Link>
      <Link
        href="/articles"
        className="text-xl text-blue-500 inline-block mt-8"
      >
        Articles
      </Link>
      <Link
        href="/contacts"
        className="text-xl text-blue-500 inline-block mt-8"
      >
        Contacts
      </Link>
    </nav>
  );
};

export default Navbar;
