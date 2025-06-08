"use client";

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/contact' && <Navbar />}
    </>
  );
};

export default ConditionalNavbar; 