import SectionTitle from "@/components/SectionTitle";

export default function Works() {
  const projects = [
    { title: "Mediterranean Estate", desc: "Custom limestone columns and mantels", delay: "animate-delay-100" },
    { title: "Historic Restoration", desc: "Cathedral entrance stonework", delay: "animate-delay-200" },
    { title: "Garden Pavilion", desc: "Weathered stone columns and capitals", delay: "animate-delay-300" },
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
            className={`aspect-square rounded-lg2 border border-[#e8dfcf90] bg-[#f7f3ed] p-8 shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up ${project.delay}`}
          >
            <div className="h-full flex flex-col justify-end">
              <div className="font-display text-xl">{project.title}</div>
              <p className="mt-2 text-[16px] text-clay">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
