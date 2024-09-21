import Header from '../components/header';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { CardContainer, CardBody, CardItem } from '../components/3d-card';
import Image from 'next/image';

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
  // Add more artwork objects here...
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="-mt-16">
        <ContainerScroll
          titleComponent={
            <div className="text-center relative top-10 text-black">
              <h2 className="text-3xl font-normal mb-2">Exploring the boundaries of</h2>
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
      
      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <CardContainer key={artwork.id} className="h-full">
                <CardBody className="bg-white rounded-3xl shadow-lg overflow-hidden h-full">
                  <div className="p-6 flex flex-col h-full">
                    <CardItem translateZ="50" className="text-2xl font-bold mb-2">
                      {artwork.title}
                    </CardItem>
                    <CardItem translateZ="60" className="text-sm text-gray-600 mb-4">
                      {artwork.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full flex-grow mb-6"> {/* Increased bottom margin */}
                      <Image 
                        src={artwork.imagePath} 
                        alt={artwork.title}
                        width={400}
                        height={300}
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </CardItem>
                    <CardItem translateZ="40" className="mt-auto self-end"> {/* Added margin-top: auto and justify-end */}
                      <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-full">
                        Buy
                      </button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* ... other content ... */}
    </div>
  );
}