import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { getArtworkBySlug, getAllSlugs, PRINT_SIZES } from "@/lib/artworks";
import { ArtDetailForm } from "./ArtDetailForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) return { title: "Artwork | King Ambrosi" };
  return {
    title: `${artwork.title} | King Ambrosi`,
    description: artwork.description,
  };
}

export default async function ArtPage({ params }: PageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) notFound();

  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-8"
          >
            <span aria-hidden>←</span> Back to gallery
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-square max-h-[70vh] w-full rounded-2xl overflow-hidden bg-gray-800 shadow-2xl ring-1 ring-gray-700/50">
              <Image
                src={artwork.imagePath}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Info + form */}
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                {artwork.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {artwork.longDescription}
              </p>

              <ArtDetailForm
                artworkSlug={artwork.slug}
                artworkTitle={artwork.title}
                imagePath={artwork.imagePath}
                printSizes={PRINT_SIZES}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
