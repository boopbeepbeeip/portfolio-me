"use client";

import { useState, useEffect } from "react";

interface SpotlightSlide {
  id: string;
  creatorName: string;
  channelHandle: string;
  channelAvatar: string;
  subscriberCount: string;
  gameTitle: string;
  gameBgImg: string;
  youtubeLink: string;
  facecamImg?: string;
  commentTime: string;
  commentText: string;
  likesCount: string;
}

export default function CreatorSpotlight() {
  const slides: SpotlightSlide[] = [
    {
      id: "windah",
      creatorName: "Windah Basudara",
      channelHandle: "@windahbasudara",
      subscriberCount: "20.3M subscribers",
      channelAvatar: "https://yt3.googleusercontent.com/ZM0JpQTkJn-wJ3OfOD_TLFPnI-uno1QrWz20JH_FBtWK1oUCq032OkHIHO4Rr27ul_czy8g6Xw=s160-c-k-c0x00ffffff-no-rj",
      facecamImg: "/images/windah-kaget.png",
      gameBgImg: "/images/game-bg.png",
      youtubeLink: "https://youtube.com",
      gameTitle: "Midnight Library Shift",
      commentTime: "2 months ago",
      commentText: "Akhirnya, Guys, ini game Indonesia bukan sembarang game Indonesia, melainkan game horor Indonesia tema, nuansa dan juga berletak di Indonesia",
      likesCount: "1.2K",
    },
    {
      id: "hitzeed",
      creatorName: "Hitzeed CH",
      channelHandle: "@hitzeedceha",
      subscriberCount: "3.1M subscribers",
      channelAvatar: "https://yt3.googleusercontent.com/GQeqiPLzzAi9Jk419uWhVeTZ9NUg6OVfQV-FP30SC8yheN8s1ClggbIeTIbcEI67W5EH9ES-8sg=s160-c-k-c0x00ffffff-no-rj",
      facecamImg: "/images/hitzeed-idle.png",
      gameBgImg: "/images/game-bg2.png",
      youtubeLink: "https://youtube.com",
      gameTitle: "Pos Satpam Anomalies",
      commentTime: "4 months ago",
      commentText: "bangkek luwh salak 😂",
      likesCount: "17",
    },
    {
      id: "mefelz",
      creatorName: "Mefelz",
      channelHandle: "@mefelz",
      subscriberCount: "2.06M subscribers",
      channelAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_lyYBK4ZA5Hh-WnyFJETX5R2SUHHAUPVQSmHmStcOKaiQI=s160-c-k-c0x00ffffff-no-rj",
      facecamImg: "/images/mefelz-idle.png",
      gameBgImg: "/images/game-bg2.png",
      youtubeLink: "https://youtube.com",
      gameTitle: "Pos Satpam Anomalies",
      commentTime: "3 months ago",
      commentText: "...permasalahnya adalah kalau kita melihat situasi tempat ini, ini tidak baik-baik saja... aku tahu ini horor lagi...",
      likesCount: "432",
    },
    {
      id: "frost-diamond",
      creatorName: "Frost Diamond",
      channelHandle: "@frostdiamond",
      subscriberCount: "47.9M subscribers",
      channelAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_koyYvPfzTasJkD2Ypv4Pw3UFLeR9IeIB1xKG5E8IWq8FA=s160-c-k-c0x00ffffff-no-rj",
      facecamImg: "/images/frost-idle.png",
      gameBgImg: "/images/game-bg2.png",
      youtubeLink: "https://youtube.com",
      gameTitle: "Pos Satpam Anomalies",
      commentTime: "1 month ago",
      commentText: "Banyak sekali setan-setan yang ada di sini... seperti genderuo, pocong, kuyang, kuntilanak, hingga yang paling mengerikan, keranda terbang.",
      likesCount: "2.8K",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const SLIDE_DURATION = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 350);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentIndex];

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] bg-[#08080a] flex items-center border-t border-b border-white/10 font-profa my-12 sm:my-16 overflow-hidden lg:overflow-visible py-12 lg:py-16">
      
      {/* 1. DYNAMIC BACKGROUND GAME */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, idx) => (
          <img
            key={`bg-${slide.id}`}
            src={slide.gameBgImg}
            alt={`${slide.gameTitle} Background`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === currentIndex && !isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/90 lg:via-[#08080a]/85 to-transparent z-10" />
      </div>

      {/* 2. FACECAM + YOUTUBE COMMENT CARD */}
      <div className="absolute right-0 bottom-0 z-20 w-full lg:w-1/2 h-full flex items-end justify-end pointer-events-none select-none overflow-visible">
        <div className="relative h-full w-full lg:w-auto flex items-end justify-end overflow-visible pr-0 lg:pr-12">
          
          {/* BUILT-IN YOUTUBE COMMENT CARD */}
          {slides.map((slide, idx) => {
            const isVisible = idx === currentIndex && !isTransitioning;
            
            if (!isVisible) return null;

            return (
              <div
                key={`yt-comment-${slide.id}`}
                className="absolute top-4 sm:top-6 left-4 right-4 lg:right-auto lg:-left-56 lg:top-12 z-40 w-auto lg:w-[350px] max-w-full bg-[#0f0f0f]/95 border border-white/10 p-3 sm:p-3.5 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out pointer-events-auto animate-fadeIn"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <img
                    src={slide.channelAvatar}
                    alt={slide.creatorName}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 mt-0.5"
                  />

                  <div className="flex flex-col text-left font-sans w-full min-w-0">
                    <div className="flex items-center justify-between gap-1.5 w-full">
                      <div className="flex items-center gap-1 sm:gap-1.5 min-w-0 truncate">
                        <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight truncate">
                          {slide.channelHandle}
                        </span>
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-normal shrink-0">
                          • {slide.subscriberCount}
                        </span>
                      </div>

                      <span className="text-[10px] sm:text-[11px] text-gray-400 font-normal shrink-0 ml-1">
                        {slide.commentTime}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs lg:text-sm text-gray-100 font-normal mt-1 leading-snug break-words line-clamp-3 lg:line-clamp-none">
                      {slide.commentText}
                    </p>

                    <div className="flex items-center gap-4 text-gray-400 text-[11px] sm:text-xs mt-2 pt-1 border-t border-white/5">
                      <div className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                        <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                        <span className="text-[10px] sm:text-[11px] font-medium">{slide.likesCount}</span>
                      </div>

                      <div className="hover:text-white transition cursor-pointer">
                        <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
                        </svg>
                      </div>

                      <span className="text-[10px] sm:text-[11px] font-semibold text-gray-300 hover:text-white cursor-pointer ml-auto">
                        Reply
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

          {/* Cutout Facecam */}
          {slides.map((slide, idx) => {
            const isVisible = idx === currentIndex && !isTransitioning;

            return (
              <img
                key={`facecam-${slide.id}`}
                src={slide.facecamImg}
                alt={`${slide.creatorName} Facecam`}
                className={`h-[85%] sm:h-[95%] lg:h-[130%] max-w-none object-contain object-bottom origin-bottom-right drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] pointer-events-none transition-opacity duration-700 ease-in-out opacity-20 sm:opacity-30 lg:opacity-100 ${
                  isVisible ? "block" : "hidden"
                }`}
              />
            );
          })}

        </div>
      </div>

      {/* 3. TEKS FLEXING & CTA (OVERSIMPLIFIED / NO-AI) */}
      <div className="relative z-30 w-full max-w-[1500px] mx-auto px-6 lg:px-16 flex flex-col justify-center pt-24 sm:pt-28 lg:pt-0">
        <div
          className={`max-w-xs sm:max-w-md lg:max-w-xl min-h-[200px] flex flex-col justify-center space-y-3 sm:space-y-4 transition-all duration-300 ease-in-out ${
            isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Sub-label sederhana */}
          <span className="font-profa text-[10px] sm:text-xs font-bold tracking-widest text-amber-500 uppercase block">
            GAMEPLAY HIGHLIGHTS
          </span>

          {/* Title langsung & padat */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none">
            PLAYED BY <br />
            <span className="text-amber-500">{activeSlide.creatorName}</span>
          </h2>

          {/* Deskripsi ringkas */}
          <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
            Live stream gameplay and reactions on{" "}
            <span className="text-amber-500 font-bold">{activeSlide.gameTitle}</span>.
          </p>

          <div className="pt-2">
            <a
              href={activeSlide.youtubeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-[11px] sm:text-xs px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-black uppercase tracking-wider transition shadow-lg pointer-events-auto"
            >
              Watch Video <span className="text-sm">→</span>
            </a>
          </div>

        </div>
      </div>

      {/* 4. GARIS DURASI MERAH PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full z-40 flex items-center pointer-events-none">
        <div className="w-full h-[3px] bg-white/20 relative overflow-hidden">
          <div
            key={currentIndex}
            className="absolute left-0 top-0 h-full bg-red-600 shadow-[0_0_10px_#ef4444] animate-progress"
            style={{
              animationDuration: `${SLIDE_DURATION}ms`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progressAnim {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-progress {
          animation: progressAnim linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 300ms ease-out forwards;
        }
      `}</style>

    </section>
  );
}