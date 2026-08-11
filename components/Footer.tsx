import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b0c10] text-white border-t border-white/10 pt-10 pb-12 font-profa w-full">
      {/* Container Full Width murni tanpa max-w agar melebar bebas */}
      <div className="w-full px-6 md:px-12">
        
        {/* Top Bar: Logo (Kiri) & Social Icons (Kanan) */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-white/10 gap-6">
          <Link href="/" className="select-none">
            <Image
              src="/images/salak.png"
              alt="Salak Studio Logo"
              width={160}
              height={50}
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Social Icons List (Hanya IG, itch.io, Roblox, YouTube) */}
          <div className="flex items-center gap-6 text-gray-400">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-500 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* itch.io */}
            <a
              href="https://itch.io"
              target="_blank"
              rel="noreferrer"
              aria-label="itch.io"
              className="hover:text-amber-500 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.304 0C2.66 0 1.316 1.114.928 2.628l-1.04 4.093c-.07.283-.105.57-.105.858v3.42c0 1.42.825 2.656 2.015 3.238v7.915c0 1.02.828 1.848 1.848 1.848h16.708c1.02 0 1.848-.828 1.848-1.848v-7.915c1.19-.582 2.015-1.818 2.015-3.238V7.579c0-.288-.035-.575-.105-.858L23.07 2.628C22.684 1.114 21.34 0 19.696 0H4.304zm2.146 3.692h11.1c.328 0 .592.265.592.593v.81c0 .328-.264.593-.592.593h-11.1a.593.593 0 0 1-.593-.593v-.81c0-.328.265-.593.593-.593zm-3.698 4.79h18.496v2.138c0 .884-.716 1.6-1.6 1.6-.884 0-1.6-.716-1.6-1.6V9.827H4.252v.793c0 .884-.716 1.6-1.6 1.6-.884 0-1.6-.716-1.6-1.6V8.482zm6.273 6.338h5.95v4.9h-5.95v-4.9z"/>
              </svg>
            </a>

            {/* Roblox */}
            <a
              href="https://www.roblox.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Roblox"
              className="hover:text-amber-500 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M5.164 0L0 18.836 18.836 24 24 5.164 5.164 0zm9.848 14.887l-4.051-1.111 1.111-4.051 4.051 1.111-1.111 4.051z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-amber-500 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column Grid (Penuh Melebar dari Ujung ke Ujung) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 text-xs">
          {/* Kolom 1: About */}
          <div className="space-y-3 pr-4">
            <h4 className="font-black text-white text-sm uppercase tracking-wider">ABOUT</h4>
            <p className="text-gray-400 leading-relaxed">
              Independent game development studio focused on interactive experiences, custom gameplay mechanics, and 3D simulation projects.
            </p>
          </div>

          {/* Kolom 2: Projects */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm uppercase tracking-wider">PROJECTS</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#projects" className="hover:text-white transition">Pos Satpam Anomalies</a></li>
              <li><a href="#projects" className="hover:text-white transition">The ICU Shift</a></li>
              <li><a href="#projects" className="hover:text-white transition">Mount Peax</a></li>
            </ul>
          </div>

          {/* Kolom 3: Engine & Tech */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm uppercase tracking-wider">ENGINE & TECH</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Roblox Studio (Luau)</li>
              <li>Unity 3D</li>
              <li>Blender 3D</li>
              <li>Laravel & Next.js</li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm uppercase tracking-wider">CONTACT</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:contact@salakstudio.dev" className="hover:text-white transition">Business Email</a></li>
              <li><a href="#contact" className="hover:text-white transition">Discovery Call</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Salak Studio. All rights reserved.</p>
          <p className="text-gray-600">Built for high engagement & performance</p>
        </div>
      </div>
    </footer>
  );
}