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
    description: "Capturing the energy of city life through abstract forms.",
    imagePath: "/images/card-2.png"
  },
  {
    id: 3,
    title: "Nature's Whisper",
    description: "A journey through the subtle beauty of natural landscapes.",
    imagePath: "/images/card-3.png"
  },
  {
    id: 4,
    title: "Digital Dreams",
    description: "Exploring the intersection of technology and imagination.",
    imagePath: "/images/card-4.png"
  },
  {
    id: 5,
    title: "Mr. Schmagee",
    description: "Capturing the ephemeral beauty of sound and light.",
    imagePath: "/images/card-5.png"
  },
  {
    id: 6,
    title: "Quantum Canvas",
    description: "Visualizing the strange world of quantum physics.",
    imagePath: "/images/card-6.png"
  },
  {
    id: 7,
    title: "Chromatic Girl",
    description: "A vibrant exploration of color theory and perception.",
    imagePath: "/images/card-7.png"
  },
  {
    id: 8,
    title: "Birds of Paradise",
    description: "Weaving the past, present, and future in a visual narrative.",
    imagePath: "/images/card-8.png"
  }
];

export default function GallerySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id}>
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}