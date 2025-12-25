export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="contact-wrapper">
        {/* LEFT CONTENT */}
        <div className="contact-text">
          <h1>Plan Your Stay</h1>

          <p className="contact-intro">
            For bookings, availability, and event enquiries, we currently take
            reservations directly through phone calls and WhatsApp.
          </p>

          <p className="contact-note">
            Our team will assist you personally to ensure a smooth and
            comfortable stay surrounded by nature.
          </p>

          <div className="contact-actions">
            <a
              href="tel:+918972657055"
              className="contact-button primary"
            >
              Call for Booking
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=%2B8972657055"
              target="_blank"
              className="contact-button secondary"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="contact-info">
            <p>
              Phone: <strong>+91 89726 57055</strong>
            </p>
            <p>
              Available daily between morning and evening hours.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="contact-visual">
          <div className="contact-card">
            <h3>Why Book Directly?</h3>
            <ul>
              <li>Personal assistance for rooms and events</li>
              <li>Clear information on availability</li>
              <li>Custom arrangements for groups and celebrations</li>
              <li>Direct communication with the resort team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
