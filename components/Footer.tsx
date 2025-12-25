export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left */}
        <div className="footer-brand">
          <h3>Aranye Resort & Restaurant</h3>
          <p>
            A forest retreat shaped by silence.  
            Experience calm, nature, and meaningful moments.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h4>Connect with us</h4>

          <div className="social-icons">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sarbeswarnandi?igsh=MTVjOHV1MTR5aGM0Ng=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Sarbeswar-Nandi/100090828131545/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5a3 3 0 0 1 3.2-3.3h2.3v3h-1.6c-1 0-1.3.5-1.3 1.2V12h2.8l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=%2B8972657055"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 32 32">
                <path d="M16 2.9c-7.2 0-13 5.8-13 13 0 2.3.6 4.6 1.8 6.6L3 29l6.7-1.7c1.9 1 4 1.6 6.3 1.6 7.2 0 13-5.8 13-13s-5.8-13-13-13zm0 23.6c-2 0-3.9-.6-5.6-1.6l-.4-.2-4 1 1-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-5.8 4.7-10.6 10.6-10.6s10.6 4.7 10.6 10.6S21.8 26.5 16 26.5zm5.8-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2-.4.2-.7 0c-.3-.2-1.4-.5-2.6-1.6-1-1-1.6-2.1-1.8-2.5s0-.6.2-.8c.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h4>Bookings</h4>
          <p>Call or WhatsApp for reservations</p>
          <a href="tel:+918972657055" className="footer-phone">
            +91 89726 57055
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aranye Resort & Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
