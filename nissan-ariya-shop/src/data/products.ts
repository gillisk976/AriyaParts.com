// src/data/products.ts
export const products = [
  {
    id: "mats",
    title: "Nissan Ariya All-Weather Floor Mats",
    price: 129.99,
    image: "/img/mats.jpg", // fallback for grid view
    images: [
      "/img/mats.jpg",
      "/img/mats2.jpg",
      "/img/mats3.jpg",
      "/img/mats4.jpg",

    ],
    video: "https://www.youtube.com/embed/VIDEO_ID_1",
    description: "Custom fit, all-weather protection for your Ariya.",
    amazonLink: "https://www.amazon.com/"
  },
  {
    id: "bike-rack",
    title: "Nissan Ariya Bike Rack",
    price: 249.99,
    image: "/img/kuat.jpg",
    video: "https://www.youtube.com/embed/VIDEO_ID_2",
    description: "Aerodynamic cross bars to expand your cargo capacity.",
    amazonLink: "https://www.amazon.com/",
    category: "accessories"
  },

  {
    id: "nacs",
    title: "Ariya Tesla NACS Charger Adapter",
    description: "Highly rated and tested ~$100 charger from Amazon",
    amazonLink: "https://amzn.to/3Gx2WCJ",
    youtubeVideoId: "dQw4w9WgXcQ",
    image: "/img/nacs.jpg",
    category: "accessories"
  },
  {
    id: "seat-cover",
    title: "Rear car seat cover for dogs or kids",
    description: "Rear car seat cover for dogs or kids.",
    amazonLink: "https://amzn.to/4f0ixY8",
    image: "/img/seatcover.png",
    category: "accessories"
  },
  {
    id: "sunshade",
    title: "Windshield Sunshade",
    description: "Protects the interior from UV rays and heat.",
    amazonLink: "https://www.amazon.com/dp/B0ZZZZZZZ",
    image: "/img/sunshade.jpg",
    category: "accessories"
  },
  {
    id: "hitch",
    title: "Tow Hitch Receiver",
    description: "Perfect to mount a bike rack or pull a small trailer",
    amazonLink: "https://amzn.to/4l4IaZr",
    image: "/img/hitch.jpg",
    category: "accessories"
  },
  {
    id: "bike-rack",
    title: "Bike Racks for your Ariya",
    description: "Carry your bikes easily with a hitch mounted bike rack.",
    amazonLink: "https://amzn.to/4kMsMAI",
    image: "/img/kuat.jpg",
    category: "accessories"
  },
  {
    id: "side-shade",
    title: "Car Window Shades for Baby",
    description: "BLock sun through the side windows",
    amazonLink: "https://amzn.to/4fGRi5i",
    image: "/img/sideshade.jpg",
    category: "accessories"
  },
  {
    id: "front-wiper",
    title: "Windshield Wipers",
    description: "Top rated windshield wipers.",
    amazonLink: "https://amzn.to/3HbBfQg",
    image: "/img/wipers.jpg",
    category: "maintenance"
  },
];
