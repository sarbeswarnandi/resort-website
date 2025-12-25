"use client";

export default function CTA() {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "booking_click");
    }
  };

  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      onClick={handleClick}
      style={{
        display: "inline-block",
        marginTop: "2rem",
        padding: "14px 34px",
        background: "#c8a951",
        color: "#0f172a",
        borderRadius: "30px",
        fontWeight: "bold"
      }}
    >
      Book on WhatsApp
    </a>
  );
}
