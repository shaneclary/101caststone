import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Mediterranean Estate",
    location: "Santa Barbara, CA",
    desc: "Custom limestone columns and grand fireplace mantel with hand-carved acanthus detailing",
    img: "/images/gallery/works-1.jpg",
  },
  {
    title: "Historic Restoration",
    location: "San Luis Obispo, CA",
    desc: "Cathedral entrance stonework including corbels, pilasters, and ornamental trim",
    img: "/images/gallery/works-2.jpg",
  },
  {
    title: "Garden Pavilion",
    location: "Paso Robles, CA",
    desc: "Weathered stone columns and Corinthian capitals for outdoor living space",
    img: "/images/gallery/works-3.jpg",
  },
  {
    title: "Wine Country Residence",
    location: "Napa Valley, CA",
    desc: "French Chateau-style mantel with matching hearth and custom surround",
    img: "/images/gallery/project-1.jpg",
  },
  {
    title: "Coastal Villa",
    location: "Carmel-by-the-Sea, CA",
    desc: "Balustrade system with custom newel posts and continuous handrail",
    img: "/images/gallery/project-2.jpg",
  },
  {
    title: "Private Courtyard",
    location: "Montecito, CA",
    desc: "Three-tier fountain centerpiece with antiqued patina finish",
    img: "/images/gallery/project-3.jpg",
  },
  {
    title: "Hillside Estate",
    location: "Los Altos Hills, CA",
    desc: "Outdoor fireplace with integrated seating and custom fire pit",
    img: "/images/gallery/project-4.jpg",
  },
  {
    title: "Ranch Renovation",
    location: "Atascadero, CA",
    desc: "Heritage-style mantel with fluted columns and keystone accent",
    img: "/images/gallery/project-5.jpg",
  },
  {
    title: "Tuscan Inspired Home",
    location: "Pebble Beach, CA",
    desc: "Full exterior package: door surrounds, window trims, and corbel brackets",
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
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-[#e8dfcf90] shadow-[0_10px_30px_rgba(60,58,54,0.08)]">
          <Image
            src={projects[0].img}
            alt={projects[0].title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="text-sienna/90 text-sm tracking-wide uppercase mb-2">Featured Project</div>
            <div className="font-display text-3xl md:text-4xl text-ivory">{projects[0].title}</div>
            <p className="mt-2 text-[16px] text-ivory/80 max-w-xl">{projects[0].desc}</p>
            <p className="mt-3 text-[14px] text-ivory/60">{projects[0].location}</p>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(1).map((project, index) => (
          <div
            key={project.title}
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
              <div className="font-display text-xl text-ivory">{project.title}</div>
              <p className="mt-2 text-[15px] text-ivory/80 line-clamp-2">{project.desc}</p>
              <p className="mt-2 text-[13px] text-ivory/60">{project.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center opacity-0 animate-fade-in-up animate-delay-500">
        <p className="text-clay text-[17px] leading-relaxed max-w-2xl mx-auto">
          Every project begins with a conversation about your space, your vision, and the legacy you wish to create.
        </p>
        <a
          href="/contact"
          className="btn no-underline inline-block mt-6"
        >
          Start Your Project
        </a>
      </div>
    </div>
  );
}
