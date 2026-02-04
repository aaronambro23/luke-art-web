import Header from "@/components/header";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import Link from "next/link";

export const metadata = {
  title: "Artistic Vision | King Ambrosi",
  description: "The ideas, process, and vision behind the work.",
};

export default function ArtisticVisionPage() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)] flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Artistic Vision"
          subtitle="Colour, form, and the space between."
        />

        <ContentSection title="Vision" narrow>
          <p>
            I’m interested in the edges of things—where one colour meets
            another, where shape blurs into feeling, and where the familiar
            tips into the surreal. The work sits between representation and
            abstraction: you might recognise a face or a landscape, but the
            real subject is mood, rhythm, and the way light and colour can
            carry meaning without spelling it out.
          </p>
          <p>
            Psychedelic and bold doesn’t mean random. Every piece is built
            from decisions about balance, contrast, and flow. I want the
            result to feel alive on the wall—something you can keep coming
            back to and still find something new in.
          </p>
        </ContentSection>

        <ContentSection title="How I paint" narrow>
          <p>
            I work with pen, marker, and paint—often in the same piece. The
            line comes first: pen and marker give structure and detail, and
            then paint brings in colour, depth, and atmosphere. That mix lets
            me move between precision and looseness, so a painting can feel
            both controlled and spontaneous.
          </p>
          <p>
            The materials are simple, but the combination is what makes the
            language mine. I like the tension between the graphic quality of
            line and the fluidity of paint—it’s how I get to the kind of
            imagery that feels both grounded and a bit otherworldly.
          </p>
        </ContentSection>

        <ContentSection title="Commissions & prints" narrow>
          <p>
            The prints and originals in the gallery are made to live with. If
            you have an idea you’d like to see realised—a commission, a
            specific size, or a direction you’re drawn to—get in touch. I take
            on custom work and can work with you on subject, format, and
            medium.
          </p>
          <p>
            <Link
              href="/contact"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2"
            >
              Contact me
            </Link>{" "}
            to start a conversation.
          </p>
        </ContentSection>
      </main>
    </div>
  );
}
