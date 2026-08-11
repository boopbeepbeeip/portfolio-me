"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#08080a] font-profa overflow-hidden">
      
      {/* 1. HERO VIDEO SHOWCASE */}
      <div className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center">
        
        {/* Background Video Lokal */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105 pointer-events-none"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Browser kamu tidak mendukung pemutaran video.
        </video>

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />

        {/* TEKS MURNI / TIPOGRAFI SIMPLE */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl text-white">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-500 uppercase tracking-tight leading-none drop-shadow-md">
              GAME DEVELOPER & SCRIPTER
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-gray-200 font-sans leading-relaxed max-w-lg drop-shadow-sm">
              I code gameplay mechanics, build systems, and bring game ideas to life.
            </p>

            <div className="mt-6">
              <Link
                href="#projects"
                className="inline-block border-2 border-white hover:border-amber-500 hover:bg-amber-500 hover:text-black text-white font-bold text-xs px-6 py-2.5 transition uppercase tracking-wider"
              >
                See Works
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* 2. BOTTOM BAR */}
      <div className="w-full bg-amber-500 text-black py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          <div>
            <h2 className="font-black text-sm sm:text-base uppercase tracking-tight">
              Salak — Independent Game Developer
            </h2>
            <p className="text-xs sm:text-sm font-sans font-medium text-black/80">
              1.6M+ Total Visits • Played by Windah Basudara & Top Creators
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-wider shrink-0">
            <a href="https://roblox.com" target="_blank" rel="noreferrer" className="hover:underline">
              Roblox
            </a>
            <span>•</span>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:underline">
              YouTube
            </a>
            <span>•</span>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}