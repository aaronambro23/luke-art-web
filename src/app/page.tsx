import Header from '../components/header';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import GallerySection from '../components/GallerySection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="-mt-16">
        <ContainerScroll
          titleComponent={
            <div className="text-center relative top-10 text-white">
              <h2 className="text-3xl font-normal mb-2">Defining the Boundaries of</h2>
              <h1 className="text-7xl font-bold mb-4">
                Colour &
                <br />
                Form
              </h1>
            </div>
          }
        >
          <div className="flex flex-col h-full w-full">
            <div className="relative w-full h-full rounded-[26px] overflow-hidden">
              <Image 
                src="/images/banner-image.png" 
                alt="KingAmbrosi Art" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>
          </div>
        </ContainerScroll>
      </div>
      
      <GallerySection />

      {/* ... other content ... */}
    </div>
  );
}