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
              Aranye Resort & Restaurant is located deep within a forest
              landscape, far from city noise and crowds. It is a place where
              greenery surrounds every moment and time moves gently.
            </p>
          </div>

          {/* SLIDESHOW */}
          <div className="hero-slideshow">
            <img
              src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/469813471_550668214465044_33053636131590108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oXQ-HgZ0cK8Q7kNvwERoraf&_nc_oc=AdmgAgIp_5FUtwTCIhEuBHbspMEerhWU-C7Pr22AWp-ciZkyrdC0GhXbdh5wMIc_W_4&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=TUwMdVyFlgjFog8uSH7KAg&oh=00_AflOxnF5oqu3ZEfaTd0wMwJV8GKMgqsU3I5abMQ69vx8Ig&oe=6952FAFE"
              alt="Forest surroundings"
            />
            <img
              src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/543407595_751045697773225_1323541314309066129_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j41uHcB6cZQQ7kNvwGWp9wk&_nc_oc=Adl4ovSI6pZf4pyjQYQebkKeq7w0aVjI-j5myAGiZ5PyO4EUpP9QQieoWKh7mCE3P8k&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=S7YuWvZ3mLkP2cgYG6jmfQ&oh=00_AflOhQIjUQRdFiFBB3RpbdfMEdNymuD_cVTuqzhiKoO2nQ&oe=6952D5C9"
              alt="Green landscape"
            />
            <img
              src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/476962134_593885913489205_6977100893525917449_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mL34-7oxpIMQ7kNvwHoiIjl&_nc_oc=AdnqFDiil7-XgGRqSR2CmUperp7MhVWhQg8z-bvBPd1x5dqhmq2ON5_CMzsINrrD-_s&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=aRN609jnSHQyRvp4ylxm7A&oh=00_Afk0SXt9abrGKM1EhIQTW3iw7cWNRWHzIO3yS0iRx66VsQ&oe=695303EC"
              alt="Quiet retreat"
            />
            <img
            src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/468524164_543488651862265_4013329023641134474_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oIuRHtUfF_UQ7kNvwFG_4I_&_nc_oc=AdkvX8jmMNrzCPfVXB1B7B4gpVqLahTvbaF8e3wSCEov61nho_UCUnnK1iqd1q4fckc&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=JtCBVOTpu2OrRmcp40zbtg&oh=00_AfkKp-cE2he6ZyYzAPQ7F1V7ZG9MlQY91M7s3zNWucgs_A&oe=695305BB"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2 style={{ marginBottom: "1.2rem" }}>
          Far from the city. Close to nature.
        </h2>

        <p style={{ maxWidth: "820px" }}>
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
        image="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/471517901_563287876549009_1077906263868800487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wOdB56VlvY8Q7kNvwHyll4F&_nc_oc=AdmCkx5ueqGrsKvKHoa9sUYksLIlVv1LdfJ4wmXMH8dfAwjV9jS92tQb1RT2lu65DDU&_nc_zt=23&_nc_ht=scontent.fccu16-1.fna&_nc_gid=9AUP3s7PNMZpUnhpA8-ceg&oh=00_AfmEeCPmo5niPT-gSXqu_ab-Z-ymn91sJsaSnUMgHEfA3Q&oe=6952F6E4"
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
          <div className="facility-chip">Outdoor swimming pool</div>
          <div className="facility-chip">Air-conditioned rooms</div>
          <div className="facility-chip">Non-smoking rooms</div>
          <div className="facility-chip">Restaurant and room service</div>
          <div className="facility-chip">Garden and outdoor seating</div>
          <div className="facility-chip">Bonfire evenings</div>
        </div>

        <div className="facilities-grid">
          <div className="facility-group">
            <h3>Great for your stay</h3>
            <ul>
              <li>Air conditioning</li>
              <li>Flat-screen TV</li>
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
              <li>Flat-screen TV</li>
              <li>No internet access available</li>
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
              <li>Safety deposit box</li>
            </ul>

            <h3>Wellness</h3>
            <ul>
              <li>Outdoor swimming pool (open all year)</li>
              <li>Sun umbrellas</li>
              <li>Sun loungers</li>
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

/* Activity component */
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
        <a href="/events">Explore</a>
      </div>
    </section>
  );
}
