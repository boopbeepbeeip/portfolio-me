import Navbar from "@/components/Navbar";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white pt-36">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="font-profa text-5xl md:text-7xl uppercase text-amber-500 tracking-tight">
          CAREER OPPORTUNITIES
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
          We are looking for talented developers, scripters, and 3D artists to build immersive gameplay experiences together.
        </p>

        <div className="mt-12 space-y-4 max-w-3xl">
          <div className="p-6 bg-[#111116] border border-white/10 rounded-xl flex justify-between items-center hover:border-amber-500/40 transition">
            <div>
              <h3 className="font-profa text-xl text-white">Roblox Gameplay Scripter (Luau)</h3>
              <p className="text-xs text-gray-400 mt-1">Remote / Contract-Based</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-5 py-2.5 rounded transition uppercase tracking-wider">
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}