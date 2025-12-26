export default function LocateUs() {
  return (
    <section className="section alt">
      {/* Heading */}
      <h1
        style={{
          color: "#519e40ff",
          marginBottom: "0.8rem",
          fontSize: "2.4rem",
        }}
      >
        Locate Us
      </h1>

      {/* Sub text */}
      <p
        style={{
          color: "#6b7280",
          marginBottom: "2.5rem",
          maxWidth: "620px",
        }}
      >
        Easily find us on the map and plan a comfortable journey to
        Aranye Resort & Restaurant.
      </p>

      {/* Google Map Embed (Correct & Verified) */}
      <div
        style={{
          width: "100%",
          height: "420px",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.130054735381!2d87.31299287419051!3d23.271413306998415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f79dd3da2845d1%3A0xf3157bac35d62dd2!2sARANYE%20RESORT%20%26%20RESTAURANT!5e1!3m2!1sen!2sin!4v1766503130500!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>

      {/* Address + Actions */}
      <div
        style={{
          marginTop: "2.5rem",
          color: "#1f2937",
          lineHeight: 1.7,
        }}
      >
        <p style={{ fontWeight: 600 }}>Aranye Resort & Restaurant</p>
        <p>Bankura, West Bengal, India</p>
        <p style={{ marginBottom: "1.6rem" }}>📞 +91 8972657055</p>

        {/* Get Directions — FIXED */}
        <a
          href="https://maps.app.goo.gl/cye2mGLT2h4KPvsX9"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
          style={{
            display: "inline-block",
            padding: "12px 34px",
            background: "#63b05cff",
            color: "#ffffff",
            borderRadius: "999px",
            fontWeight: 600,
            letterSpacing: "0.4px",
            textAlign: "center",
          }}
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
