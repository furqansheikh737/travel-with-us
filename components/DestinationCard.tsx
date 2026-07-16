"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  index: number;
}

export default function DestinationCard({ title, subtitle, image, href, index }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay - darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Subtle wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 400 60" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,40 Q100,10 200,40 T400,40 L400,60 L0,60Z" fill="rgba(45,107,107,0.3)"/>
          </svg>
        </div>
        
        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
          <p className="text-xs text-brand-gold font-medium uppercase tracking-wider mb-1.5">
            {subtitle}
          </p>
          <h3 className="font-display text-lg font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}