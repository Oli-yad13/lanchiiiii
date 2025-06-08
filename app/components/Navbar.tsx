"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    lastScrollY.current = window.scrollY;
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path: string, e?: React.MouseEvent) => {
    if (path.startsWith('/')) {
      e?.preventDefault();
      const targetId = path.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      } else {
        router.push(path);
        setOpen(false);
      }
    } else {
      router.push(path);
      setOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push('/');
    setOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-50 flex items-center justify-between px-6 py-3 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-white/40 transition-transform duration-300 ${!show ? '-translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'} hidden md:flex`}>
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Lanchi Logo"
            width={140}
            height={48}
            priority
            className="w-36 h-auto drop-shadow"
          />
        </button>
        {/* Desktop Nav */}
        <div className="flex items-center">
          <div className="flex space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 mr-3 md:mr-4 lg:mr-5">
            <button onClick={() => handleNavigation('/employers')} className="text-[#246A6B] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">For Employers</button>
            <button onClick={() => handleNavigation('/individuals')} className="text-[#246A6B] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">For Individuals</button>
            <button onClick={() => handleNavigation('/benefits')} className="text-[#246A6B] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">Benefits</button>
          </div>
          <Link href="/contact" className="px-3 lg:px-6 py-1.5 lg:py-2 rounded-full bg-[#246A6B] text-white text-xs sm:text-sm lg:text-base font-bold shadow hover:bg-[#089688] transition whitespace-nowrap inline-block">Get Started</Link>
        </div>
      </nav>

      {/* Mobile Top Bar - Logo Only */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-white/40 z-40 flex items-center justify-between px-4 md:hidden">
        <button onClick={handleLogoClick} className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Lanchi Logo"
            width={120}
            height={40}
            priority
            className="w-28 h-auto drop-shadow"
          />
        </button>
        <button
          className="flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-[#A7FFEB]/40 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-[#246A6B] mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#246A6B] mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#246A6B] transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />
      )}
      <div className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white/95 shadow-2xl z-50 flex flex-col items-start gap-8 px-8 py-8 transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/contact" className="w-full px-6 py-3 rounded-full bg-[#246A6B] text-white font-bold shadow hover:bg-[#089688] transition text-center">Get Started</Link>
        <div className="w-full border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">Quick Links</h3>
          <div className="space-y-4">
            <button onClick={() => handleNavigation('/employers')} className="text-[#246A6B] text-lg font-semibold hover:text-[#089688] transition w-full text-left">For Employers</button>
            <button onClick={() => handleNavigation('/individuals')} className="text-[#246A6B] text-lg font-semibold hover:text-[#089688] transition w-full text-left">For Individuals</button>
            <button onClick={() => handleNavigation('/benefits')} className="text-[#246A6B] text-lg font-semibold hover:text-[#089688] transition w-full text-left">Benefits</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;