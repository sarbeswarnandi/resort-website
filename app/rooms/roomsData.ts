// app/rooms/roomsData.ts

export type Room = {
  key: string;
  title: string;
  price: string;
  description: string;
  images: string[];
};

export const roomsData: Room[] = [
  {
    key: "nonac",
    title: "Single Bed Room (Non-AC)",
    price: "2500",
    description:
      "Comfortable single room ideal for solo travelers looking for a simple, quiet stay close to nature.",
    images: [
      "https://images.pexels.com/photos/20653866/pexels-photo-20653866.jpeg",
      "https://images.pexels.com/photos/7195879/pexels-photo-7195879.jpeg",
    ],
  },
  {
    key: "ac",
    title: "Single Bed Room with AC",
    price: "3500",
    description:
      "Stay cool and relaxed with air conditioning, perfect for longer stays and warmer days.",
    images: [
      "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg",
      "https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg",
    ],
  },
  {
    key: "family",
    title: "Family Double Bed Room",
    price: "5500",
    description:
      "Spacious double bed room suitable for families and small groups, with extra room to relax.",
    images: [
      "https://images.pexels.com/photos/6970068/pexels-photo-6970068.jpeg",
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
    ],
  },
  {
    key: "dorm",
    title: "Dormitory Stay",
    price: "Custom Pricing",
    description:
      "Dormitory-style accommodation for larger groups, events, and team outings. Pricing based on group size.",
    images: [
      "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg",
      "https://images.pexels.com/photos/35165103/pexels-photo-35165103.jpeg",
    ],
  },
];
