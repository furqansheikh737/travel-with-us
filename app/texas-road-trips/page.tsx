"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripPlanningForm from "@/components/TripPlanningForm";
import { motion } from "framer-motion";
import Image from "next/image";

const trips = [
  { id: "A", name: "TRIP A", duration: "3 Days", bestFor: "Families", destination: "Big Bend", priceRange: "$125", vanRental: "Included" },
  { id: "B", name: "TRIP B", duration: "5 Days", bestFor: "Couples", destination: "Hill Country", priceRange: "$250", vanRental: "Optional" },
  { id: "C", name: "TRIP C", duration: "7 Days", bestFor: "Adventures", destination: "National Parks", priceRange: "$325", vanRental: "Included" },
  { id: "D", name: "TRIP D", duration: "9 Days", bestFor: "Adventures", destination: "National Parks", priceRange: "$450", vanRental: "Included" },
];

export default function TexasRoadTripsPage() {
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
                  TEXAS ROAD TRIPS
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
                  ROAD TRIPS<br />FROM TEXAS
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-md mb-4">
                  In Partnership with <span className="font-semibold text-brand-teal">EAST TEXAS VAN RENTAL</span>
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Scenic routes, unforgettable places, epic adventures. Explore handpicked road trips perfect for families, couples, and adventure seekers.
                </p>
              </motion.div>
              
              {/* Right: Road Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[350px] lg:h-[450px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop"
                  alt="Texas Road Trip"
                  fill
                  className="object-cover rounded-l-2xl lg:rounded-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-transparent to-transparent lg:block hidden" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trip Table */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-brand-sand/50 overflow-hidden"
            >
              {/* Table Header */}
              <div className="bg-brand-teal text-white px-6 py-3">
                <div className="grid grid-cols-6 gap-4 text-xs font-bold uppercase tracking-wider">
                  <div>Trip Name</div>
                  <div>Duration</div>
                  <div>Best For</div>
                  <div>Destination</div>
                  <div>Price Range</div>
                  <div>Van Rental</div>
                </div>
              </div>
              {/* Table Rows */}
              <div className="divide-y divide-brand-sand/50">
                {trips.map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-6 gap-4 px-6 py-4 text-sm hover:bg-brand-cream/30 transition-colors"
                  >
                    <div className="font-bold text-brand-teal">{trip.name}</div>
                    <div className="text-gray-600">{trip.duration}</div>
                    <div className="text-gray-600">{trip.bestFor}</div>
                    <div className="text-gray-600">{trip.destination}</div>
                    <div className="text-gray-600">{trip.priceRange}</div>
                    <div className="text-gray-600">{trip.vanRental}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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