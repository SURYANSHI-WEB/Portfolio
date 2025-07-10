import { useState } from "react";

export default function ContactForm() {
  // Use your real Formspree endpoint!
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgbdrjb";
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const data = {
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("something went wrong. try again later!");
      }
    } catch {
      setError("something went wrong. try again later!");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="text-blue-400 text-xl mt-8" role="status" aria-live="polite">
        message received! now, where did i put my mug…
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          placeholder="your email"
          className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black w-full"
          aria-describedby="email-help"
        />
        <div id="email-help" className="sr-only">Enter your email address</div>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="your message"
          className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black min-h-[120px] w-full resize-none"
          aria-describedby="message-help"
        />
        <div id="message-help" className="sr-only">Enter your message</div>
      </div>
      <button
        type="submit"
        className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Send message"
        disabled={loading}
      >
        {loading ? "sending..." : "send"}
      </button>
      {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
    </form>
  );
} 