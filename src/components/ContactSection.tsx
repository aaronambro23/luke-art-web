import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-xl mx-auto">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-white mb-2 text-center"
        >
          Contact
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Interested in commissioning a painting?
          Get in touch—we can talk size, subject, and how to make something
          that fits your space.
        </p>
        <div className="mt-10">
          <ContactForm idPrefix="contact-home" />
        </div>
      </div>
    </section>
  );
}
