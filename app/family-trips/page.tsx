"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripPlanningForm from "@/components/TripPlanningForm";
import { motion } from "framer-motion";
import Image from "next/image";

const familyImages = [
  "https://images.unsplash.com/photo-1567502401034-b947ee46e249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZBTUlMWSUyMFRSSVBTfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664367173144-7e854e199524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RkFNSUxZJTIwVFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1503431153573-96e959f4d9b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RkFNSUxZJTIwVFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RkFNSUxZJTIwVFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RkFNSUxZJTIwVFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664367173135-1c4e4c7f970f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZBTUlMWSUyMFRSSVBTfGVufDB8fDB8fHww",
];

export default function FamilyTripsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <main>
        {/* Hero - Text LEFT, Image RIGHT with family photo */}
        <section className="relative bg-gradient-to-r from-[#F5F0EB] via-[#FAF8F5] to-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[450px]">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="py-12 lg:py-0 z-10"
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">
                  OUR FAMILY TRIPS
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
                  EXPLORE UNIQUE<br />DESTINATIONS
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  The best family memories begin with meaningful adventures. Let us help you plan unforgettable trips designed around fun, comfort, and quality time together.
                </p>
              </motion.div>
              
              {/* Right: Family Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[350px] lg:h-[450px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop"
                  alt="Happy family"
                  fill
                  className="object-cover rounded-l-2xl lg:rounded-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-transparent to-transparent lg:block hidden" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Grid - 3 columns, 2 rows */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {familyImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`Family trip ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trip Planning Form */}
        <section className="py-12 md:py-16 bg-brand-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <TripPlanningForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}