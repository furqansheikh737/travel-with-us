export interface TripCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "date" | "textarea" | "number";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface TripPackage {
  id: string;
  name: string;
  duration: string;
  bestFor: string;
  destination: string;
  priceRange: string;
  vanRental: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SocialLink {
  platform: "facebook" | "instagram";
  href: string;
}