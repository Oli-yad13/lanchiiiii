"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600 mb-2">hello@lanchihealth.com</p>
            <p className="text-gray-600 mb-2">Phone: +251 912 345 678</p>
            <p className="text-gray-600">Addis Ababa, Ethiopia</p>
          </div>

          {/* Who We Are */}
            <div>
            <h4 className="font-semibold mb-4">Who We Are</h4>
              <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-teal-500 transition">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-teal-500 transition">Careers</Link></li>
              <li><Link href="/employers" className="text-gray-600 hover:text-teal-500 transition">For Employers</Link></li>
              <li><Link href="/individuals" className="text-gray-600 hover:text-teal-500 transition">For Individuals</Link></li>
              </ul>
            </div>
            
          {/* Info */}
             <div>
            <h4 className="font-semibold mb-4">Info</h4>
              <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-600 hover:text-teal-500 transition">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-teal-500 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-teal-500 transition">Terms of Use</Link></li>
              </ul>
            </div>
            
          {/* Download App (Coming Soon) */}
             <div>
            <h4 className="font-semibold mb-4">Download our app</h4>
            <p className="text-gray-600 mb-4">Coming Soon!</p>
            <div className="flex gap-4">
              <Image src="/app-store-badge.svg" alt="Download on the App Store" width={120} height={35} />
              <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={120} height={35} />
            </div>
          </div>
        </div>
        
        {/* Bottom legal and copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4">
           <p className="text-center sm:text-left">© 2025 Lanchi. All rights reserved.</p>
           <div className="flex justify-center gap-4 flex-wrap">
             <Link href="/terms" className="hover:underline">Terms</Link>
             <Link href="/privacy-policy" className="hover:underline">Privacy</Link>
             <Link href="/faq" className="hover:underline">FAQ</Link>
             <Link href="#" className="hover:underline">Security</Link>
             <Link href="#" className="hover:underline whitespace-nowrap">Cookie Declaration</Link>
             <Link href="#" className="hover:underline whitespace-nowrap">Notice of Privacy Practices</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;