export interface Sticker {
  id: string;
  lat: number;
  lng: number;
  city: string;
  image: string;
  uploaderName: string;
  dateAdded?: string;
}

export const stickers: Sticker[] = [
  {
    id: "tokyo-shinjuku",
    lat: 35.692291259765625,
    lng: 139.7013397216797,
    city: "Shinjuku, Tokio",
    image: "/stickers/Tokyo.jpeg",
    uploaderName: "Fabián y Jen",
    dateAdded: "2026-10-25",
  },
  {
    id: "buenos-aires-bond-street",
    lat: -34.5960272,
    lng: -58.3913481,
    city: "Bond Street, Buenos Aires",
    image: "/stickers/BondStreet.jpg",
    uploaderName: "Ro",
    dateAdded: "2026-10-25",
  },
  {
    id: "buenos-aires-obelisco",
    lat: -34.6025,
    lng: -58.3825,
    city: "Cerca del Obelisco, Buenos Aires",
    image: "/stickers/Ovelisco.jpg",
    uploaderName: "Ro",
    dateAdded: "2026-10-25",
  },
  {
    id: "matsumoto",
    lat: 36.23476028442383,
    lng: 137.9718475341797,
    city: "Matsumoto, Nagano, Japón",
    image: "/stickers/Matsumoto.jpeg",
    uploaderName: "Fabián y Jen",
    dateAdded: "2026-10-29",
  },
];
