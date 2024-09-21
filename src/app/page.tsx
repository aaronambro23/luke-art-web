import Header from '../components/header';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      <Header />
      <ContainerScroll
        titleComponent={
          <div className="text-center relative top-10 text-black"> {/* Added text-black here */}
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your other page content here */}
      </main>
    </div>
  );
}