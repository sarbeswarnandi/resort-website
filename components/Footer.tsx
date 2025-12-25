export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left */}
        <div className="footer-brand">
          <h3>Aranye Resort & Restaurant</h3>
          <p>
            A forest retreat shaped by silence. Experience calm, nature,
            and meaningful moments.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h4>Connect with us</h4>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/sarbeswarnandi?igsh=MTVjOHV1MTR5aGM0Ng=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/people/Sarbeswar-Nandi/100090828131545/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5a3 3 0 0 1 3.2-3.3h2.3v3h-1.6c-1 0-1.3.5-1.3 1.2V12h2.8l-.4 3h-2.4v7A10 10 0 0 0 22 12z"
                />
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
        © {new Date().getFullYear()} Aranye Resort & Restaurant. All rights
        reserved.
      </div>
    </footer>
  );
}
