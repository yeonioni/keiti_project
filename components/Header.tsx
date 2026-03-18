"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b-2 border-green-500 ${
        scrolled ? "shadow-md py-1" : "py-2"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo_header_1.png"
              alt="KEITI 로고"
              width={180}
              height={60}
              className={`transition-all duration-300 object-contain ${
                scrolled ? "h-9" : "h-12"
              } w-auto`}
              priority
            />
          </Link>
          <span
            className={`font-semibold text-gray-700 transition-all duration-300 ${
              scrolled ? "text-sm" : "text-base"
            } hidden sm:block`}
          >
            환경창업 아이디어 상시모집
          </span>
        </div>
      </div>
    </header>
  );
}
