"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";
import Link from "next/link";

const destinations = [
  {
    id: "1",
    title: "DISNEY VACATIONS",
    subtitle: "LAND & SEA",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RElTTkVZJTIwVkFDQVRJT05TfGVufDB8fDB8fHww",
    href: "/disney-vacations",
  },
  {
    id: "2",
    title: "FAMILY TRIPS",
    subtitle: "MEMORABLE ADVENTURES",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=800&fit=crop",
    href: "/family-trips",
  },
  {
    id: "3",
    title: "TEXAS ROAD TRIPS",
    subtitle: "Partnership with East Texas Van Rentals",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=800&fit=crop",
    href: "/texas-road-trips",
  },
  {
    id: "4",
    title: "OTHER DESTINATIONS",
    subtitle: "EXPLORE THE WORLD",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=800&fit=crop",
    href: "/other-destinations",
  },
];

const features = [
  {
    id: "1",
    icon: "compass",
    title: "Expert Guidance",
    description: "Years of experience and first-hand destination knowledge.",
  },
  {
    id: "2",
    icon: "heart",
    title: "Personalized Trips",
    description: "Every trip is customized to match your style, needs, and budget.",
  },
  {
    id: "3",
    icon: "clock",
    title: "Save Time & Stress",
    description: "We handle the details so you can focus on making memories.",
  },
  {
    id: "4",
    icon: "dollar",
    title: "Best Value",
    description: "Top recommendations and insider tips to get the best value.",
  },
  {
    id: "5",
    icon: "headphones",
    title: "Ongoing Support",
    description: "We're with you every step of the way—before, during, and after your trip.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#F5F0EB] via-[#FAF8F5] to-white py-12 md:py-16">
          {/* Subtle mountain/landscape background decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,80 Q360,20 720,60 T1440,40 L1440,120 L0,120Z" fill="#E8F4F4"/>
              <path d="M0,100 Q480,40 960,80 T1440,60 L1440,120 L0,120Z" fill="#D4E8E8" opacity="0.5"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">
                TRAVEL WITH US
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-wide">
                PLAN YOUR PERFECT TRIP
              </h1>
            </motion.div>

            {/* Destination Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {destinations.map((dest, index) => (
                <DestinationCard key={dest.id} {...dest} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Travel With Us */}
        <section className="py-16 md:py-20 bg-white relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path d="M0,40 Q360,0 720,30 T1440,20 L1440,0 L0,0Z" fill="#2D6B6B"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold mb-2">
                WHY TRAVEL WITH US
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}