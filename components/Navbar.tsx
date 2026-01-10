"use client";

import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleHomeClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Logo */}
        <div className="nav-brand">
          <Link href="/" onClick={handleHomeClick}>
            Aranye Resort &amp; Restaurant
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="nav-links desktop" aria-label="Main navigation">
          <Link href="/" onClick={handleHomeClick}>
            Home
          </Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/locate-us">Locate Us</Link>
          <Link href="/contact">Contact Us</Link>
          {/* <a href="tel:+918972657055" className="nav-cta">
            Book Now
          </a> */}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <Link href="/" onClick={handleHomeClick}>
            Home
          </Link>
          <Link
            href="/rooms"
            onClick={() => {
              setOpen(false);
            }}
          >
            Rooms
          </Link>
          <Link
            href="/locate-us"
            onClick={() => {
              setOpen(false);
            }}
          >
            Locate Us
          </Link>
          <Link
            href="/contact"
            onClick={() => {
              setOpen(false);
            }}
          >
            Contact Us
          </Link>
          <a href="tel:+918972657055" className="mobile-book">
            Call to Book
          </a>
        </div>
      )}
    </header>
  );
}
