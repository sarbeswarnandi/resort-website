type RoomCardProps = {
  title: string;
  price: string;
  images: [string, string];
};

export default function RoomCard({ title, price, images }: RoomCardProps) {
  return (
    <div className="room-card">
      <div className="room-card-images">
        <img src={images[0]} alt={`${title} image 1`} />
        <img src={images[1]} alt={`${title} image 2`} />
      </div>

      <h3>{title}</h3>
      <p>₹{price} / night</p>
    </div>
  );
}
