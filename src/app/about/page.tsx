import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";

export const metadata = {
  title: "About | King Ambrosi",
  description: "About Luca, artist and maker behind King Ambrosi.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)] flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="About"
          subtitle="Artist & maker behind King Ambrosi—half Italian, half French, painting since childhood."
        />

        <ContentSection
          title="Origins"
          narrow
        >
          <p>
            I’m Luca—half Italian, half French, and I’ve been painting my whole
            life. I grew up in Argentina, and that place is in the work: the
            light, the chaos, the colour of the streets and the silence of the
            countryside. A lot of my pieces are tied to moments I’ve lived
            there—people, places, or just a feeling that stuck.
          </p>
          <p>
            The mix of cultures and the years in Buenos Aires and beyond gave
            me a way of seeing that’s both European and Latin American. You’ll
            see that in the way I use colour and form: bold, a bit raw,
            sometimes psychedelic, but always grounded in something real.
          </p>
        </ContentSection>

        <ContentSection title="The work" narrow>
          <p>
            I work where colour and form meet—bold, psychedelic, and a bit
            surreal. Each piece starts as an idea and becomes something you can
            live with on your wall. Prints are made to order on archival paper
            so they hold up over time.
          </p>
          <p>
            If you’re after something specific—size, framing, or a
            commission—get in touch. I also take on custom pieces: a moment,
            a person, or a place you want turned into a painting.
          </p>
        </ContentSection>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/60">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl">
                  <Image
                    src="/images/logo.jpg"
                    alt="Luca / King Ambrosi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 256px, 320px"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Get in touch
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Questions about prints, commissions, or custom work? I’d love
                  to hear from you.
                </p>
                <Link
                  href="/contact"
                  className="inline-block py-3 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
