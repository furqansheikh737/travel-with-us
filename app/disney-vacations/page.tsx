"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisneyForm from "@/components/DisneyForm";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1690097232120-a59669ee0989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RElTTkVZJTIwVkFDQVRJT05TfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1620938092396-b6380afc6a7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RElTTkVZJTIwVkFDQVRJT05TfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1605443791607-80a259dd3c3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RElTTkVZJTIwVkFDQVRJT05TfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1599076980652-7ee5b5fd633a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERJU05FWSUyMFZBQ0FUSU9OU3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1532358668075-5801c5a45839?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERJU05FWSUyMFZBQ0FUSU9OU3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1620055155785-2fc4acd747cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERJU05FWSUyMFZBQ0FUSU9OU3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1551454211-35c47de27645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERJU05FWSUyMFZBQ0FUSU9OU3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1610651687421-59c9de4a8002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERJU05FWSUyMFZBQ0FUSU9OU3xlbnwwfHwwfHx8MA%3D%3D",
];

export default function DisneyVacationsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <main>
        {/* Hero Section - Text LEFT, Image RIGHT */}
        <section className="relative bg-gradient-to-r from-[#F5F0EB] via-[#FAF8F5] to-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="py-12 lg:py-0 z-10"
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">
                  DISNEY VACATIONS
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
                  EXPLORE DISNEY<br />VACATIONS
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Create magical family memories with unforgettable Disney vacations — from Disney World adventures to magical Disney cruises.
                </p>
              </motion.div>
              
              {/* Right: Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RElTTkVZJTIwVkFDQVRJT05TfGVufDB8fDB8fHww"
                  alt="Disney Castle"
                  fill
                  className="object-cover rounded-l-2xl lg:rounded-none"
                  priority
                />
                {/* Gradient fade to left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-transparent to-transparent lg:block hidden" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Grid - 4 columns, 2 rows */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`Disney gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Forms - Side by Side with curved headers */}
        <section className="py-12 md:py-16 bg-brand-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DisneyForm variant="parks" />
              <DisneyForm variant="cruise" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}