"use client";

import { useEffect, useState } from "react";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(scrolled >= total * 0.9);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <a
        href="https://forms.gle/Fb6w5e9uvGDtygq26"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          transition: "opacity 0.4s ease, transform 0.4s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          pointerEvents: visible ? "auto" : "none",
        }}
        className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-16 py-4 rounded-2xl shadow-lg whitespace-nowrap"
      >
        아이디어 접수하기
      </a>
    </div>
  );
}
