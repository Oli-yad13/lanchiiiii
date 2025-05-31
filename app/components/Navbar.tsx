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
      
      // Debug log to see what's happening
      console.log('Scroll position:', currentScrollY, 'Last scroll:', lastScrollY.current);
      
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scroll position
    lastScrollY.current = window.scrollY;
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path: string, e?: React.MouseEvent) => {
    if (path.startsWith('/')) { // Check if it's an anchor link
       e?.preventDefault(); // Prevent default anchor jump
      const targetId = path.substring(1); // Get the ID without the #
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
         setOpen(false); // Close mobile menu after clicking
      } else {
        router.push(path); // Navigate to different page if element not found
         setOpen(false); // Close mobile menu
      }
    } else {
       router.push(path); // For external links or full path navigation
       setOpen(false); // Close mobile menu
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push('/'); // Still navigate to home page URL
    setOpen(false); // Close mobile menu
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-50 flex items-center justify-between px-6 py-3 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-white/40 transition-transform duration-300 ${!show ? '-translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
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
      <div className="hidden md:flex items-center">
        <div className="flex space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 mr-3 md:mr-4 lg:mr-5">
          <button onClick={() => handleNavigation('/employers')} className="text-[#0B615E] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">For Employers</button>
          <button onClick={() => handleNavigation('/individuals')} className="text-[#0B615E] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">For Individuals</button>
          <button onClick={(e) => handleNavigation('#features', e)} className="text-[#0B615E] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">What We Cover</button>
          <button onClick={(e) => handleNavigation('#why-stand-out', e)} className="text-[#0B615E] text-xs sm:text-sm lg:text-base font-semibold hover:text-[#089688] transition whitespace-nowrap">Why We Stand Out</button>
        </div>
        <Link href="/contact" className="px-3 lg:px-6 py-1.5 lg:py-2 rounded-full bg-[#0B615E] text-white text-xs sm:text-sm lg:text-base font-bold shadow hover:bg-[#089688] transition whitespace-nowrap inline-block">Get Started</Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-[#A7FFEB]/40 transition z-20"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-[#0B615E] mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#0B615E] mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#0B615E] transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white/95 shadow-2xl z-50 flex flex-col items-start gap-8 px-8 py-20 transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => handleNavigation('/employers')} className="text-[#0B615E] text-lg font-semibold hover:text-[#089688] transition">For Employers</button>
        <button onClick={() => handleNavigation('/individuals')} className="text-[#0B615E] text-lg font-semibold hover:text-[#089688] transition">For Individuals</button>
        <button onClick={(e) => handleNavigation('#features', e)} className="text-[#0B615E] text-lg font-semibold hover:text-[#089688] transition">What We Cover</button>
        <button onClick={(e) => handleNavigation('#why-stand-out', e)} className="text-[#0B615E] text-lg font-semibold hover:text-[#089688] transition">Why We Stand Out</button>
        <Link href="/contact" className="mt-4 px-6 py-2 rounded-full bg-[#0B615E] text-white font-bold shadow hover:bg-[#089688] transition inline-block">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;