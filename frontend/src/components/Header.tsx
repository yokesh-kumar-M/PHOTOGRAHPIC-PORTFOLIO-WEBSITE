'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="header">
      <div className="nav-section">
        <div className="brand-and-navBtn">
          <span className="brand-name">MY WORLD.!</span>
          <span className="navBtn flex" onClick={() => setShowNav(!showNav)}>
            <i className="fas fa-bars"></i>
          </span>
        </div>

        <nav className={`top-nav ${showNav ? 'showNav' : ''}`}>
          <ul>
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>

      <div className="container about">
        <div className="about-content">
          <div className="about-img flex">
            <img src="/images/girlcamera.jpg" alt="photographer img" />
          </div>
          <h2>Amal Raj</h2>
          <h3>Photographer</h3>
          <blockquote>
            It’s not enough to just own a camera. Everyone owns a camera. To be a photographer you must understand, appreciate and harness the power you hold!"
            <span>– Mark Denman</span>
          </blockquote>
        </div>

        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.instagram.com/amal_raj_a_/">
                <i className="fab fa-instagram"></i>
              </a>
              <p>SOME SOCIAL CONNECTION.</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
