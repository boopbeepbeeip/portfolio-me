"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Cek apakah cookie persetujuan sudah ada
    const hasConsent = document.cookie.includes("cookie_consent=");
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  };

  const handleAccept = () => {
    setCookie("cookie_consent", "accepted", 365);
    setCookie("analytics_enabled", "true", 365);
    setShowBanner(false);
  };

  const handleReject = () => {
    setCookie("cookie_consent", "rejected", 365);
    setCookie("analytics_enabled", "false", 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[998] bg-black/40 backdrop-blur-md border-t border-white/10 font-profa py-3 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Teks santai khas Indie Dev */}
        <p className="text-xs text-gray-300 text-center sm:text-left">
          <span className="font-bold text-white">We use cookies</span> to keep track of site traffic and improve performance. No tracking spam.
        </p>

        {/* Tombol Opsi Ringkas */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-3.5 py-1.5 bg-transparent border border-white/20 text-gray-300 hover:text-white font-bold text-[11px] rounded hover:bg-white/10 transition uppercase tracking-wider"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 bg-amber-500 text-black font-extrabold text-[11px] rounded hover:bg-amber-400 transition uppercase tracking-wider"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}