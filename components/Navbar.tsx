"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLNavElement>(null);
  const itemsRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  // Menu dipangkas khusus untuk Indie Studio / Portfolio Personal
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateIndicator = (targetHref: string) => {
    const activeElement = itemsRef.current[targetHref];
    const navElement = navRef.current;

    if (activeElement && navElement) {
      const activeRect = activeElement.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();

      setIndicatorStyle({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updateIndicator(pathname);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] font-profa py-4 transition-all duration-200 border-b ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none shrink-0">
          <Image
            src="/images/salak.png"
            alt="Salak Studio Logo"
            width={160}
            height={50}
            className="h-9 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Menu Navigasi Ringkas */}
        <nav
          ref={navRef}
          onMouseLeave={() => updateIndicator(pathname)}
          className="relative hidden md:flex items-center gap-8 text-sm tracking-wider uppercase py-1"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                ref={(el) => {
                  itemsRef.current[item.href] = el;
                }}
                onMouseEnter={() => updateIndicator(item.href)}
                className={`relative py-1 flex items-center gap-1 transition-colors duration-100 ${
                  isActive ? "text-white font-black" : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}

          <span
            className="absolute bottom-0 h-[2px] bg-white pointer-events-none transition-all duration-100 linear"
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
        </nav>

        {/* Call To Action */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-xs px-5 py-2.5 rounded transition uppercase tracking-wider font-bold"
          >
            Get In Touch <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-white hover:text-amber-500 transition focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-6 mt-2 w-52 bg-black/80 backdrop-blur-md border border-white/10 text-white rounded shadow-xl overflow-hidden md:hidden z-50">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}