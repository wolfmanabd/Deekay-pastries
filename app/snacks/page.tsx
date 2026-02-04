import SnacksGrid from "@/Components/SnacksGrid";
export default function SnacksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--brand-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--brand-red)]">
            Our Freshly Baked Snacks
          </h1>
          <p className="mt-6 text-lg text-[var(--brand-red)] max-w-2xl mx-auto">
            Made fresh daily and delivered hot across Ibadan. Perfect for
            parties, offices, and everyday cravings.
          </p>
        </div>
      </section>

      {/* Snacks */}
      <SnacksGrid />

      {/* CTA */}
      <section className="bg-[var(--brand-yellow)] py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Place an Order?
        </h2>
        <p className="mt-4 text-white/90">
          Fast delivery across Ibadan. Freshly baked on demand.
        </p>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-[var(--brand-red)] text-white font-bold hover:scale-105 transition"
        >
          Order on WhatsApp
        </a>
      </section>
    </main>
  );
}
