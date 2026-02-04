import ArtworkCard from './artwork-card';
import { ARTWORKS } from '@/lib/artworks';

interface GallerySectionProps {
  showTitle?: boolean;
}

export default function GallerySection({ showTitle = true }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTWORKS.map((artwork) => (
            <div key={artwork.id}>
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}