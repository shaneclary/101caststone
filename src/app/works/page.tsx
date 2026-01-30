import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function Works() {
  const projects = [
    { title: "Mediterranean Estate", desc: "Custom limestone columns and mantels", delay: "animate-delay-100", img: "/images/gallery/works-1.jpg" },
    { title: "Historic Restoration", desc: "Cathedral entrance stonework", delay: "animate-delay-200", img: "/images/gallery/works-2.jpg" },
    { title: "Garden Pavilion", desc: "Weathered stone columns and capitals", delay: "animate-delay-300", img: "/images/gallery/works-3.jpg" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Recent Works</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Selected commissions in mantels, columns, and landscape pieces—each proportioned to its light, room, and purpose.
      </p>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group relative aspect-square rounded-lg overflow-hidden border border-[#e8dfcf90] shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up ${project.delay}`}
          >
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="font-display text-xl text-ivory">{project.title}</div>
              <p className="mt-2 text-[16px] text-ivory/80">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
