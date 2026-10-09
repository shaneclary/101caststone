import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Recent Cast Stone Installations",
  description: "Selected commissions in mantels, columns, and landscape pieces—each proportioned to its light, room, and purpose.",
  alternates: { canonical: "/works" },
};

// Titles and descriptions describe only what each photo shows (the same
// photos carry the same titles on the home page).
const projects = [
  {
    title: "Contemporary Surround",
    desc: "Clean-lined fireplace surround framing a linear firebox",
    img: "/images/gallery/works-1.jpg",
  },
  {
    title: "Pavers",
    desc: "Large-format pavers set in lawn beside an arched loggia",
    img: "/images/gallery/works-2.jpg",
  },
  {
    title: "Tangled Mantel",
    desc: "Mantel with scrolled corbel legs",
    img: "/images/gallery/works-3.jpg",
  },
  {
    title: "Mantel & Overmantel",
    desc: "Fireplace mantel with overmantel shelf and raised hearth",
    img: "/images/gallery/project-1.jpg",
  },
  {
    title: "Courtyard Fountain",
    desc: "Scalloped-basin fountain in a brick courtyard",
    img: "/images/gallery/project-2.jpg",
  },
  {
    title: "Corbel Mantel",
    desc: "Mantel with gently arched frieze and scrolled corbel legs",
    img: "/images/gallery/project-3.jpg",
  },
  {
    title: "Pergola Columns",
    desc: "Columns supporting a garden pergola over a stone terrace",
    img: "/images/gallery/project-4.jpg",
  },
  {
    title: "Garden Steps",
    desc: "Flagstone steps through a planted slope",
    img: "/images/gallery/project-5.jpg",
  },
  {
    title: "Stone Veneer Entry",
    desc: "Stone veneer wall around an arched entry door",
    img: "/images/gallery/project-6.jpg",
  },
];

export default function Works() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Recent Works</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Selected commissions in mantels, columns, and landscape pieces—each proportioned to its light, room, and purpose.
      </p>

      {/* Featured Project */}
      <div className="mt-16 opacity-0 animate-fade-in-up">
        <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-[#e8dfcf90] shadow-[0_10px_30px_rgba(60,58,54,0.08)]">
          <Image
            src={projects[0].img}
            alt={projects[0].title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="text-ivory/80 text-sm tracking-wide uppercase mb-2">Featured Project</div>
            <h2 className="font-display text-3xl md:text-4xl tracking-normal text-ivory">{projects[0].title}</h2>
            <p className="mt-2 text-[16px] text-ivory/80 max-w-xl">{projects[0].desc}</p>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(1).map((project, index) => (
          <div
            key={project.img}
            className={`group relative aspect-[4/5] rounded-lg overflow-hidden border border-[#e8dfcf90] shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="font-display text-xl tracking-normal text-ivory">{project.title}</h2>
              <p className="mt-2 text-[15px] text-ivory/80 line-clamp-2">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center opacity-0 animate-fade-in-up animate-delay-500">
        <p className="text-clay text-[17px] leading-relaxed max-w-2xl mx-auto">
          Every project begins with a conversation about your space, your vision, and the legacy you wish to create.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
