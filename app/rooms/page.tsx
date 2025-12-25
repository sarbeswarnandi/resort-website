import RoomCard from "../../components/RoomCard";

export default function Rooms() {
  return (
    <section className="section">
      <h1 style={{ marginBottom: "2.5rem" }}>
        Our Accommodations
      </h1>

      <div className="grid">
        <RoomCard
          title="Single Bed Room (Non-AC)"
          price="2500"
          images={[
            "https://images.pexels.com/photos/20653866/pexels-photo-20653866.jpeg",
            "https://images.pexels.com/photos/7195879/pexels-photo-7195879.jpeg",
          ]}
        />

        <RoomCard
          title="Single Bed Room with Air Conditioning"
          price="3500"
          images={[
            "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg",
            "https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg",
          ]}
        />

        <RoomCard
          title="Family Double Bed Room"
          price="5500"
          images={[
            "https://images.pexels.com/photos/6970068/pexels-photo-6970068.jpeg",
            "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
          ]}
        />

        <RoomCard
          title="Dormitory Stay"
          price="Custom Pricing"
          images={[
            "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg",
            "https://images.pexels.com/photos/35165103/pexels-photo-35165103.jpeg",
          ]}
        />
      </div>
    </section>
  );
}
