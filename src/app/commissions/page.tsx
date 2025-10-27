import SectionTitle from "@/components/SectionTitle";

export default function Commissions() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle>Begin a Commission</SectionTitle>
      <p className="mt-6 max-w-prose text-clay">
        Each commission begins as dialogue. We listen to your vision, your space, your story.
        From concept to installation, we work alongside architects, designers, and homeowners
        to create pieces that endure for generations.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg2 border border-[#e8dfcf90] bg-[#f7f3ed] p-8 shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up animate-delay-100">
          <div className="font-display text-2xl mb-3">Mantels & Fireplaces</div>
          <p className="text-clay text-sm">Custom proportions for every room and ceiling height</p>
        </div>
        <div className="rounded-lg2 border border-[#e8dfcf90] bg-[#f7f3ed] p-8 shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up animate-delay-200">
          <div className="font-display text-2xl mb-3">Columns & Capitals</div>
          <p className="text-clay text-sm">From Corinthian to contemporary interpretations</p>
        </div>
        <div className="rounded-lg2 border border-[#e8dfcf90] bg-[#f7f3ed] p-8 shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up animate-delay-300">
          <div className="font-display text-2xl mb-3">Architectural Details</div>
          <p className="text-clay text-sm">Lintels, keystones, corbels, and custom elements</p>
        </div>
      </div>

      <div className="mt-20 text-center opacity-0 animate-fade-in-up">
        <a href="/contact" className="btn no-underline">
          Begin a Conversation
        </a>
      </div>
    </div>
  );
}
