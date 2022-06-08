import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <h2>Score Plus</h2>
        </div>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Header;
