"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripPlanningForm from "@/components/TripPlanningForm";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  "https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFRSSVBTfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VFJJUFN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1541945876617-8026869043f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRSSVBTfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1572895847559-d5b2ee1469b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFRSSVBTfGVufDB8fDB8fHww",
];

export default function OtherDestinationsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <main>
        {/* Hero - Text LEFT, Image RIGHT */}
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
                  OTHER DESTINATIONS
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
                  EXPLORE UNIQUE<br />DESTINATIONS
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Discover beautiful destinations, hidden gems, scenic escapes, and unforgettable travel experiences tailored to your style.
                </p>
              </motion.div>
              
              {/* Right: Scenic Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[350px] lg:h-[450px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=800&fit=crop"
                  alt="Beautiful destination"
                  fill
                  className="object-cover rounded-l-2xl lg:rounded-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-transparent to-transparent lg:block hidden" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Destination Grid */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {destinations.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`Destination ${index + 1}`}
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