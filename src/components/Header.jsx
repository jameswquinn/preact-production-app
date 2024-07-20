import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default Header;
