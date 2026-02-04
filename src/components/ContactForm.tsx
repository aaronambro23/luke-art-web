"use client";

import { useState } from "react";

interface ContactFormProps {
  idPrefix?: string;
  className?: string;
}

export function ContactForm({ idPrefix = "contact", className = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      const subject = encodeURIComponent("Contact from King Ambrosi site");
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:hello@kingambrosi.com?subject=${subject}&body=${mailtoBody}`;
      setStatus("sent");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label
          htmlFor={`${idPrefix}-name`}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-email`}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-message`}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition resize-y min-h-[120px]"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 disabled:opacity-60 transition-colors"
      >
        {status === "sending"
          ? "Sending…"
          : status === "sent"
            ? "Message sent"
            : status === "error"
              ? "Try again"
              : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-gray-400 text-center">
          Thanks—we’ll get back to you soon.
        </p>
      )}
    </form>
  );
}
