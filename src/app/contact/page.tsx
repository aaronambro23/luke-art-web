import Header from "@/components/header";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | King Ambrosi",
  description: "Get in touch for prints, commissions, and enquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)] flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Contact
          </h1>
          <p className="text-gray-400 text-center mb-4">
            Interested in commissioning a
            painting? Get in touch—we can talk size, subject, and how to make
            something that fits your space.
          </p>
          <div className="mt-10">
            <ContactForm idPrefix="contact-page" />
          </div>
        </div>
      </main>
    </div>
  );
}
