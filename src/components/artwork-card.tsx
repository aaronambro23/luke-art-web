import Image from 'next/image';
import { CardContainer, CardBody, CardItem } from './3d-card';

interface Artwork {
  id: number;
  title: string;
  description: string;
  imagePath: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <CardContainer className="inter-var" containerClassName="py-10">
      <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full h-[500px] rounded-xl p-6 border flex flex-col justify-between">
        <div className="flex flex-col h-full">
          <div>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              {artwork.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-300 text-sm mt-2"
            >
              {artwork.description}
            </CardItem>
          </div>
          <CardItem translateZ="100" className="w-full mt-4 flex-grow flex items-center justify-center">
            <Image
              src={artwork.imagePath}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={artwork.title}
            />
          </CardItem>
          <div className="flex justify-end items-center mt-4">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-gray-900 text-xs font-bold"
            >
              Buy
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}