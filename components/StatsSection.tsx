"use client";

import { useState, useEffect } from "react";

function AnimatedCounter({ value }: { value: string }) {
  const [mounted, setMounted] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || value === "24/7") return;

    // Clean String & Extract Numbers
    const cleanStr = value.replace(",", ".");
    const match = cleanStr.match(/[\d.]+/);

    if (!match) return;

    const targetNum = parseFloat(match[0]);
    const suffix = value.replace(/[\d.,]+/, "");
    const isDecimal = value.includes(",");

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth Ease Out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = easeProgress * targetNum;

      if (isDecimal) {
        setDisplayValue(currentNum.toFixed(1).replace(".", ",") + suffix);
      } else {
        setDisplayValue(Math.floor(currentNum) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [mounted, value]);

  // Sebelum mounted (SSR / Pertama Load), TAMPILKAN LANGSUNG NILAI ASLINYA biar ga 0!
  if (!mounted) {
    return <span>{value}</span>;
  }

  return <span>{displayValue}</span>;
}

export default function StatsSection() {
  const stats = [
    { value: "10+", label: "Games Released" },
    { value: "1,6M+", label: "Total Visits" },
    { value: "98%", label: "Positive Ratings" },
    { value: "24/7", label: "Active Systems" },
  ];

  const engineLogos = [
    {
      name: "Roblox Studio",
      url: "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/6/2/f/62f64963b3b8eda573996bdfb646729e818ef77b.png",
    },
    {
      name: "Unity 3D",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    },
  ];

  return (
    <section className="bg-[#08080a] py-16 text-white border-t border-white/5 w-full font-profa">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white min-h-[60px] flex items-center justify-center">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Built On Leading Game Engines */}
        <div className="text-center pt-10 border-t border-white/5 flex flex-col items-center justify-center">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase block mb-6">
            BUILT ON LEADING GAME ENGINES
          </span>

          <div className="flex items-center justify-center gap-8 md:gap-12">
            {engineLogos.map((engine, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={engine.url}
                  alt={engine.name}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}