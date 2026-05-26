import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white">
      <div className="bg-white py-1 text-center text-black sm:py-1">
        <p className="container-global text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
          Today offer 20%
        </p>
      </div>
      <nav
        className="container-global flex h-14 items-center justify-between bg-black sm:h-16"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide transition-opacity hover:opacity-80 sm:text-base"
        >
          Ramp Parkour
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium sm:gap-8 sm:text-base">
          <li>
            <Link href="/" className="transition-opacity hover:opacity-80">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Pages/Contacts"
              className="transition-opacity hover:opacity-80"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Pages/admin/product"
              className="transition-opacity hover:opacity-80"
            >
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
