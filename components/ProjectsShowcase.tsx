"use client";

import { PROJECTS_DATA } from "@/data/projects";

export default function ProjectsShowcase() {
  const items = [
    ...PROJECTS_DATA,
    ...PROJECTS_DATA,
    ...PROJECTS_DATA,
    ...PROJECTS_DATA,
  ];

  return (
    <section
      id="projects"
      className="bg-[#08080a] py-16 text-white w-full overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-10 text-left">
        <span className="font-profa text-xs sm:text-sm font-bold tracking-widest text-amber-500 uppercase block">
          PROJECTS
        </span>
        <h2 className="font-profa text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white uppercase">
          Featured Works
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Track 1 */}
        <div className="animate-marquee-track flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
          {items.map((project, idx) => (
            <div
              key={`p1-${project.id}-${idx}`}
              className="group relative w-48 sm:w-64 md:w-72 h-[380px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#111116] shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Track 2 */}
        <div
          className="animate-marquee-track flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0"
          aria-hidden="true"
        >
          {items.map((project, idx) => (
            <div
              key={`p2-${project.id}-${idx}`}
              className="group relative w-48 sm:w-64 md:w-72 h-[380px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#111116] shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}