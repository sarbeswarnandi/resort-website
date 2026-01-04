// components/RoomCard.tsx
"use client";

import { useState } from "react";

type RoomCardProps = {
  title: string;
  price: string;
  description: string;
  images: [string, string];
};

export default function RoomCard({
  title,
  price,
  description,
  images,
}: RoomCardProps) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const isCustomPrice = isNaN(Number(price));

  return (
    <article className="room-card-horizontal">
      {/* Left: main image */}
      <div className="room-card-horizontal-image">
        <img src={activeImage} alt={`${title} main image`} />
      </div>

      {/* Right: content */}
      <div className="room-card-horizontal-content">
        <header className="room-card-horizontal-header">
          <h2>{title}</h2>
          <p className="room-card-price">
            {isCustomPrice ? (
              <span>{price}</span>
            ) : (
              <>
                ₹{price} <span className="room-card-price-night">/ night</span>
              </>
            )}
          </p>
        </header>

        <p className="room-card-description">{description}</p>

        {/* Thumbnails */}
        <div className="room-card-thumbs">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              className={`room-thumb-btn ${
                activeImage === src ? "active" : ""
              }`}
              onClick={() => setActiveImage(src)}
            >
              <img src={src} alt={`${title} photo ${index + 1}`} />
            </button>
          ))}
        </div>

        <div className="room-card-actions">
          <a href="/contact" className="room-card-btn secondary">
            More Details
          </a>
          <a href="tel:+918972657055" className="room-card-btn primary">
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
