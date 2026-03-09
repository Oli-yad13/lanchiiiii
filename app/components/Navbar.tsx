"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Our Solution", href: "/solution" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);

      if (currentScrollY > 400) {
        setShow(currentScrollY < lastScrollY.current);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On inner pages, start with scrolled style (white bg)
  const showWhiteBg = scrolled || !isHome;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${!show ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div
          className={`transition-all duration-500 ${showWhiteBg
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
            : "bg-transparent"
            }`}
        >
          <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="Lanchi"
                width={140}
                height={30}
                className={`h-8 w-auto transition-all duration-300 ${showWhiteBg ? "" : "max-lg:brightness-0 lg:brightness-0 lg:invert"
                  }`}
                priority
              />
            </Link>

            {/* Center nav links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${showWhiteBg
                      ? isActive
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                      : isActive
                        ? "text-[#0F1923] lg:text-white"
                        : "text-[#0F1923]/60 lg:text-white/70 hover:text-[#0F1923] lg:hover:text-white"
                      }`}
                    style={!showWhiteBg ? { textShadow: '0 1px 4px rgba(0,0,0,0.3)' } : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className={`px-5 py-2 rounded-sm text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${showWhiteBg
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-[#0F1923]/10 lg:bg-white/15 backdrop-blur-sm text-[#0F1923] lg:text-white border border-[#0F1923]/20 lg:border-white/20 hover:bg-[#0F1923]/20 lg:hover:bg-white/25"
                  }`}
                style={!showWhiteBg ? { textShadow: '0 1px 4px rgba(0,0,0,0.3)' } : undefined}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${showWhiteBg
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/60"
          : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Lanchi"
              width={110}
              height={24}
              className={`h-6 w-auto transition-all duration-300 ${showWhiteBg ? "" : "brightness-0"
                }`}
              priority
            />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 w-5 h-[1.5px] transition-all duration-300 ${showWhiteBg ? "bg-gray-800" : "bg-[#0F1923] lg:bg-white"
                  } ${open ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[1.5px] transition-opacity duration-200 ${showWhiteBg ? "bg-gray-800" : "bg-[#0F1923] lg:bg-white"
                  } ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 w-5 h-[1.5px] transition-all duration-300 ${showWhiteBg ? "bg-gray-800" : "bg-[#0F1923] lg:bg-white"
                  } ${open ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile slide-out */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${open ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="pt-20 px-8 space-y-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 py-4 transition-colors duration-300 border-b border-gray-100 ${isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  <span className="text-[13px] font-mono text-gray-300">
                    0{i + 1}
                  </span>
                  <span className="text-[15px] font-medium">{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-8">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gray-900 text-white text-[13px] font-semibold uppercase tracking-[0.08em]"
              >
                Get a Corporate Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;