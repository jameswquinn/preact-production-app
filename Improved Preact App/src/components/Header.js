// src/components/Header.js
import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
  <header>
    <nav aria-label="Main Navigation">
      <Link href="/" aria-label="Home">Home</Link>
      <Link href="/about" aria-label="About">About</Link>
      <Link href="/contact" aria-label="Contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
