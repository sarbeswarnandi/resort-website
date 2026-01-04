// app/page.tsx

function Activity({
  title,
  description,
  image,
  reverse,
}: {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className={`activity-section ${reverse ? "reverse" : ""}`}>
      <div className="activity-image">
        <img src={image} alt={title} />
      </div>

      <div className="activity-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Scroll to contact instead of dead /events route */}
        <a href="/contact">Plan this experience</a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          {/* TEXT */}
          <div className="hero-text">
            <h1>
              A forest retreat
              <br />
              shaped by silence
            </h1>

            <p>
              Aranye Resort &amp; Restaurant is located deep within a forest
              landscape, far from city noise and crowds. It is a place where
              greenery surrounds every moment and time moves gently.
            </p>
          </div>

          {/* SLIDESHOW */}
          <div className="hero-slideshow">
            <img
              src="https://images.picxy.com/cache/2020/9/24/c71d91e2e36edf8e85bfb49caecd371e.jpg"
              alt="Forest surroundings"
            />
            <img
              src="/images/room1.jpg"
              alt="Green landscape"
            />
            <img
              src="/images/green_forest.jpg"
              alt="Quiet retreat"
            />
            <img
              src="/images/cloudy_nature.jpg"
              alt="Resort surroundings"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro-section">
        <h2 className="section-heading">
          Far from the city. Close to nature.
        </h2>

        <p className="section-text">
          Designed as a quiet escape, Aranye offers open spaces, forest
          surroundings, and calm experiences. Mornings begin with natural
          sounds, afternoons pass slowly, and evenings settle into stillness.
        </p>
      </section>

      {/* ACTIVITIES */}
      <Activity
        title="Weddings in Nature"
        description="Celebrate weddings surrounded by forest views and open skies. Our spaces are suited for intimate ceremonies as well as thoughtfully planned larger gatherings."
        image="https://images.pexels.com/photos/35279312/pexels-photo-35279312.jpeg"
      />

      <Activity
        title="Conferences & Corporate Retreats"
        description="Host conferences, offsites, and corporate retreats in a calm forest setting that encourages focus, clarity, and meaningful collaboration."
        image="https://images.pexels.com/photos/15621210/pexels-photo-15621210.jpeg"
        reverse
      />

      <Activity
        title="Bonfire Evenings"
        description="Evenings around a bonfire offer warmth and quiet connection, set against the calm of the forest night."
        image="/images/bonfire.jpg"
      />

      <Activity
        title="Indian Folk Dance and Music"
        description="Traditional folk performances reflect cultural heritage while maintaining the peaceful rhythm of the surroundings."
        image="https://images.pexels.com/photos/19381835/pexels-photo-19381835.jpeg"
        reverse
      />

      <Activity
        title="Fishing Experiences"
        description="Fishing sessions take place in calm natural settings, offering a slow and grounding experience connected to the landscape."
        image="https://www.voicesofruralindia.org/wp-content/uploads/2021/09/amit-uikey-ekQx8X1i8Qs-unsplash-scaled.jpg"
      />

      {/* FACILITIES */}
      <section className="facilities">
        <h2>Resort Facilities</h2>

        <div className="facilities-popular">
          <div className="facility-chip">Air-conditioned rooms</div>
          <div className="facility-chip">Non-smoking rooms</div>
          <div className="facility-chip">Restaurant and room service</div>
          <div className="facility-chip">Garden and outdoor seating</div>
          <div className="facility-chip">Fishing activities</div>
          <div className="facility-chip">Bonfire evenings</div>
        </div>

        <div className="facilities-grid">
          <div className="facility-group">
            <h3>Great for your stay</h3>
            <ul>
              <li>Air conditioning</li>
              <li>LED-screen TV</li>
              <li>Room service</li>
              <li>Daily housekeeping</li>
              <li>Laundry service (additional charge)</li>
            </ul>

            <h3>Bathroom</h3>
            <ul>
              <li>Private bathroom</li>
              <li>Shower</li>
              <li>Toilet</li>
            </ul>

            <h3>Outdoors</h3>
            <ul>
              <li>Garden area</li>
              <li>Outdoor furniture</li>
              <li>Open lawn spaces</li>
            </ul>
          </div>

          <div className="facility-group">
            <h3>Activities</h3>
            <ul>
              <li>Bonfire evenings</li>
              <li>Indian folk dance and music</li>
              <li>Fishing experience</li>
              <li>Outdoor games</li>
            </ul>

            <h3>Food and Drink</h3>
            <ul>
              <li>On-site restaurant</li>
              <li>Breakfast service</li>
              <li>Lunch and dinner available</li>
              <li>Special diet menus on request</li>
            </ul>

            <h3>Media and Technology</h3>
            <ul>
              <li>TV</li>
              <li>WiFi internet access available</li>
            </ul>
          </div>

          <div className="facility-group">
            <h3>Services</h3>
            <ul>
              <li>24-hour front desk</li>
              <li>Room service</li>
              <li>Laundry service (additional charge)</li>
            </ul>

            <h3>Safety and Security</h3>
            <ul>
              <li>CCTV in common areas</li>
              <li>24-hour security</li>
            </ul>

            <h3>Wellness</h3>
            <ul>
              <li>Outdoor swimming pool (open all year)</li>
              <li>Sun umbrellas</li>
            </ul>

            <h3>Languages Spoken</h3>
            <ul>
              <li>Bengali</li>
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
