import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background: subtle gradient + soft glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-center">
          {/* Visual: portrait/logo block */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl">
              <Image
                src="/images/logo.jpg"
                alt="Luca / King Ambrosi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 288px, 320px"
                priority={false}
              />
              <div
                className="absolute inset-0 border border-white/5 rounded-2xl"
                aria-hidden
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p
              id="about-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90 mb-4"
            >
              About
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              I’m Luca—artist and maker behind King Ambrosi.
            </h2>
            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              <p>
                I work where colour and form meet: bold, psychedelic, and a bit
                surreal. Each piece starts as an idea and becomes something you
                can live with on your wall.
              </p>
              <p>
                Prints are made to order on archival paper so they hold up over
                time. If you’re after something specific—size, framing, or a
                commission—get in touch below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
