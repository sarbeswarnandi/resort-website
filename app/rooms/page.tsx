// app/rooms/page.tsx
import RoomCard from "../../components/RoomCard";
import { roomsData } from "./roomsData";

export default function Rooms() {
  return (
    <section className="section">
      <h1 className="section-heading" style={{ marginBottom: "2.5rem" }}>
        Our Accommodations
      </h1>

      <div className="rooms-list">
        {roomsData.map((room) => (
          <RoomCard
            key={room.key}
            title={room.title}
            price={room.price}
            description={room.description}
            images={room.images}
          />
        ))}
      </div>
    </section>
  );
}
