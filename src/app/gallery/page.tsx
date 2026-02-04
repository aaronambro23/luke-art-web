import Header from "@/components/header";
import PageHero from "@/components/PageHero";
import GallerySection from "@/components/GallerySection";

export const metadata = {
  title: "Gallery | King Ambrosi",
  description: "Browse prints and original art by King Ambrosi.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)] flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Gallery"
          subtitle="Prints and originals—bold, psychedelic, made to live with."
        />
        <section className="pb-20">
          <GallerySection showTitle={false} />
        </section>
      </main>
    </div>
  );
}
