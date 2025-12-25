"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1.2rem 8%",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <strong
        style={{
          color: "#367f30ff",
          letterSpacing: "1px",
          fontSize: "1.5rem",
        }}
      >
        Aranye Resort & Restaurant
      </strong>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "1.8rem",
          fontSize: "0.92rem",
          color: "#1f2937",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/rooms">Rooms</Link>
        {/* <Link href="/events">Events</Link> */}
        <Link href="/locate-us">Locate Us</Link>
        <Link href="/contact">Book</Link>
      </div>
    </nav>
  );
}
