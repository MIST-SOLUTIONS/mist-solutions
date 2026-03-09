"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setFormState("success");
      e.currentTarget.reset();
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-28 bg-slate-50">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-slate-600">
            Have a question or want to work together? Let’s talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
          />

          <button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow-md hover:shadow-xl hover:bg-slate-800 transition-all duration-300 disabled:opacity-50"
          >
            {formState === "submitting"
              ? "Sending..."
              : formState === "success"
                ? "Message Sent!"
                : formState === "error"
                  ? "Something went wrong"
                  : "Send Message"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          Or email directly at{" "}
          <a
            href={`mailto:${process.env.SMTP_USER || ""}`}
            className="font-medium text-slate-900"
          >
            {process.env.SMTP_USER || ""}
          </a>
        </div>
      </div>
    </section>
  );
}
