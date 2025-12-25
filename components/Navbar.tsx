"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Logo */}
        <div className="nav-brand">
          <Link href="/">Aranye Resort & Restaurant</Link>
        </div>

        {/* Desktop Links */}
        <nav className="nav-links desktop">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/contact">Locate Us</Link>
          <a href="tel:+918972657055" className="nav-cta">
            Book
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Locate Us</Link>
          <a href="tel:+918972657055" className="mobile-book">
            Call to Book
          </a>
        </div>
      )}
    </header>
  );
}
