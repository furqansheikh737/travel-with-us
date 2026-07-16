"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

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

const storyPoints = [
  "Personalized Travel Planning",
  "Disney Vacations & Family Getaways",
  "Texas Road Trips & Unique Destinations",
  "Stress-Free Travel Support",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <main>
        {/* About Hero - Text LEFT, Image RIGHT with overlapping photos */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold mb-2">
                  ABOUT US
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
                  Travel With Us
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Creating unforgettable travel experiences, one journey at a time.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Whistle While You Wander, we believe travel should be exciting, stress-free, and filled with unforgettable memories. Whether you're dreaming of a magical Disney vacation, planning a fun family getaway, or exploring scenic road trip destinations, we're here to help make every step of your journey simple and enjoyable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in personalized travel planning tailored to your unique needs, preferences, and budget. From destination recommendations and itinerary planning to travel tips and support, our goal is to help you create experiences that bring families closer and adventures to life.
                </p>
              </motion.div>

              {/* Overlapping Photos - Exact match to design */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1605443790760-18c6121939d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlzbmV5JTIwY2FzdGxlfGVufDB8fDB8fHww"
                    alt="Travel couple"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Overlapping small photo */}
                <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlzbmV5JTIwY2FzdGxlfGVufDB8fDB8fHww"
                    alt="Disney castle"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Travel With Us */}
        <section className="py-16 md:py-24 bg-white relative">
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

        {/* Our Story - Photo collage LEFT, Text RIGHT */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo Collage */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1624562595731-1aba3231ca70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERpc25leSUyMGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Family travel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mt-8">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VFJJUFN8ZW58MHx8MHx8fDA%3D"
                      alt="Road trip"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden -mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1616394585067-d3e824140aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRSSVBTfGVufDB8fDB8fHww"
                      alt="Adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1661963552124-2569fbf9359d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                      alt="Disney"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold mb-2">
                  OUR STORY
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                  Creating Memories That Last a Lifetime
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Travel With Us, we believe travel should be exciting, stress-free, and filled with unforgettable memories. Whether you're dreaming of a magical Disney vacation, planning a fun family getaway, or exploring scenic road trip destinations, we're here to help make every step of your journey simple and enjoyable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We specialize in personalized travel planning tailored to your unique needs, preferences, and budget. From destination recommendations and itinerary planning to travel tips and support, our goal is to help you create experiences that bring families closer and adventures to life.
                </p>
                <ul className="space-y-3">
                  {storyPoints.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-teal" />
                      </div>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}