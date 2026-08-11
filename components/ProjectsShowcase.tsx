"use client";

import React from "react";

interface Project {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  link?: string;
}

interface FeaturedProjectsProps {
  projects?: Project[];
}

export default function FeaturedProjects({ projects = [] }: FeaturedProjectsProps) {
  return (
    <section className="py-12 bg-[#08080a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold uppercase mb-6 text-amber-500">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects?.map((project) => (
            <div key={project.id} className="border border-white/10 p-4 rounded-lg bg-black/40">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{project.description}</p>
              
              {/* Optional Chaining & Default Array Biar Gak Error TS18048 */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(project.tags || []).map((tag, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}