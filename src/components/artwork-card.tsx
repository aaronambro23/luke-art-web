"use client";

import { useState } from "react";
import Image from 'next/image';
import { Lens } from './Lens';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const [hovering, setHovering] = useState(false);

  return (
    <div className={cn(
      "w-full h-[350px] relative rounded-3xl overflow-hidden",
      "bg-gradient-to-r from-[#1D2235] to-[#121318] p-3",
      "flex flex-col"
    )}>
      <Rays />
      <Beams />
      <div className="relative z-10 flex flex-col h-full">
        <Lens hovering={hovering} setHovering={setHovering}>
          <div className="w-full h-[200px] relative">
            <Image
              src={artwork.imagePath}
              alt={artwork.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl"
            />
          </div>
        </Lens>
        <motion.div
          animate={{
            filter: hovering ? "blur(2px)" : "blur(0px)",
          }}
          className="py-2 relative z-20 flex-grow"
        >
          <h2 className="text-white text-lg text-left font-bold truncate">
            {artwork.title}
          </h2>
          <p className="text-neutral-200 text-left mt-1 text-sm line-clamp-2">
            {artwork.description}
          </p>
        </motion.div>
        <div className="relative z-20 flex justify-end w-full mt-2">
          <button className="bg-white text-black hover:bg-gray-100 font-bold py-2 px-4 rounded-full transition duration-300 mb-2 text-sm w-full max-w-[100px]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

// Update the Beams and Rays components
const Beams = (): JSX.Element => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      {/* ... (SVG content) */}
    </svg>
  );
};

const Rays = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute left-0 top-0  pointer-events-none z-[1]",
        className
      )}
    >
      {/* ... (SVG content) */}
    </svg>
  );
};