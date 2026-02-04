interface ContentSectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function ContentSection({
  id,
  title,
  children,
  className = "",
  narrow = false,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/60 ${className}`}
    >
      <div
        className={`mx-auto ${narrow ? "max-w-3xl" : "max-w-4xl"}`}
      >
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            {title}
          </h2>
        )}
        <div className="text-gray-400 text-lg leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
