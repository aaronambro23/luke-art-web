import { CardContainer, CardBody, CardItem } from './3d-card';
import ArtworkCard from './artwork-card';

const artworks = [
  {
    id: 1,
    title: "Cosmic Harmony",
    description: "An exploration of celestial balance and cosmic energy.",
    imagePath: "/images/card-1.png"
  },
  {
    id: 2,
    title: "Urban Rhythms",
    description: "Capturing the pulsating energy of city life through abstract forms.",
    imagePath: "/images/card-1.png"
  },
  {
    id: 3,
    title: "Nature's Whisper",
    description: "A serene journey through the subtle beauty of natural landscapes.",
    imagePath: "/images/card-1.png"
  },
  // Add more artwork objects here...
];

export default function GallerySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
}