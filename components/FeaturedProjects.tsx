import { PROJECTS_DATA } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-1">
            FEATURED <span className="text-amber-500">PROJECTS</span>
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md">
          Eksplorasi karya game & sistem interaktif yang telah diproduksi dengan fokus pada mekanisme gameplay serta pengalaman pengguna.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#111116] border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col"
          >
            {/* Project Banner Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-80" />
            </div>

            {/* Project Metadata */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black text-white mt-1 group-hover:text-amber-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-amber-500 hover:text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-2 shrink-0"
                >
                  View <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}