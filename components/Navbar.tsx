"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Mail, Phone, ChevronRight, Home } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Disney Vacations", href: "/disney-vacations" },
  { label: "Family Trips", href: "/family-trips" },
  { label: "Texas Road Trips", href: "/texas-road-trips" },
  { label: "Other Destinations", href: "/other-destinations" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-brand-teal text-white py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 text-sm">
          <a href="mailto:info@travelwithus.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@travelwithus.com</span>
          </a>
          <a href="tel:1234567890" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
            <Phone className="w-4 h-4" />
            <span>Phone Number (123) 456-7890</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-brand-sand/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Travel With Us */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-24 h-24 -mt-4">
                <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                  {/* Badge/Shield shape background */}
                  <path d="M60 5 C30 5, 10 25, 10 55 C10 85, 35 110, 60 115 C85 110, 110 85, 110 55 C110 25, 90 5, 60 5Z" fill="#E8F4F4" stroke="#2D6B6B" strokeWidth="2"/>
                  {/* Decorative stars */}
                  <text x="35" y="22" fontSize="8" fill="#C8956C">✦</text>
                  <text x="80" y="22" fontSize="8" fill="#C8956C">✦</text>
                  <text x="60" y="18" fontSize="6" fill="#C8956C">✦</text>
                  {/* "Travel" text */}
                  <text x="60" y="38" textAnchor="middle" fill="#2D6B6B" fontSize="16" fontFamily="cursive" fontStyle="italic" fontWeight="bold">Travel</text>
                  {/* "WITH" text */}
                  <text x="60" y="50" textAnchor="middle" fill="#C8956C" fontSize="7" fontFamily="sans-serif" letterSpacing="2">WITH</text>
                  {/* "Us" text */}
                  <text x="60" y="68" textAnchor="middle" fill="#2D6B6B" fontSize="18" fontFamily="cursive" fontStyle="italic" fontWeight="bold">Us</text>
                  {/* Airplane icon */}
                  <path d="M52 75 L60 82 L68 75 L64 78 L60 85 L56 78Z" fill="#C8956C"/>
                  <text x="60" y="95" textAnchor="middle" fill="#2D6B6B" fontSize="6" fontFamily="sans-serif" letterSpacing="1">TRAVEL CO.</text>
                  {/* Bottom decorative line */}
                  <path d="M45 100 Q60 105 75 100" stroke="#C8956C" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`p-2 rounded-md transition-all duration-200 ${pathname === "/" ? "text-brand-gold" : "text-gray-500 hover:text-brand-teal"}`}
              >
                <Home className="w-5 h-5" />
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 border-b-2 ${
                    pathname === item.href
                      ? "text-brand-teal border-brand-gold"
                      : "text-gray-600 border-transparent hover:text-brand-teal hover:border-brand-gold/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="ml-3">
                <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all">
                  Contact Us
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-brand-teal">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-16 h-16">
                      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                        <path d="M60 5 C30 5, 10 25, 10 55 C10 85, 35 110, 60 115 C85 110, 110 85, 110 55 C110 25, 90 5, 60 5Z" fill="#E8F4F4" stroke="#2D6B6B" strokeWidth="2"/>
                        <text x="60" y="38" textAnchor="middle" fill="#2D6B6B" fontSize="16" fontFamily="cursive" fontStyle="italic" fontWeight="bold">Travel</text>
                        <text x="60" y="50" textAnchor="middle" fill="#C8956C" fontSize="7" fontFamily="sans-serif" letterSpacing="2">WITH</text>
                        <text x="60" y="68" textAnchor="middle" fill="#2D6B6B" fontSize="18" fontFamily="cursive" fontStyle="italic" fontWeight="bold">Us</text>
                      </svg>
                    </div>
                  </div>
                  <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-base font-medium py-2 border-b border-brand-sand text-brand-teal">
                    <Home className="w-4 h-4" /> Home
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-base font-medium py-2 border-b border-brand-sand ${pathname === item.href ? "text-brand-teal" : "text-gray-600"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full mt-4">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}