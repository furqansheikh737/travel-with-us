"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Clock, DollarSign, HeadphonesIcon, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  heart: Heart,
  clock: Clock,
  dollar: DollarSign,
  headphones: HeadphonesIcon,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const IconComponent = iconMap[icon] || Compass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-brand-sand/60 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
        <IconComponent className="w-6 h-6" />
      </div>
      <h3 className="font-display text-sm font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      {/* Gold bottom line on hover */}
      <div className="mt-4 w-8 h-0.5 bg-brand-gold/0 group-hover:bg-brand-gold transition-colors duration-300 rounded-full" />
    </motion.div>
  );
}