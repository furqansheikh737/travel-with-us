"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ChevronRight } from "lucide-react";

interface FormData {
  tripType: string;
  adults: string;
  kids: string;
  startDate: string;
  endDate: string;
  additionalNotes: string;
}

export default function TripPlanningForm() {
  const [formData, setFormData] = useState<FormData>({
    tripType: "",
    adults: "",
    kids: "",
    startDate: "",
    endDate: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon to plan your perfect trip.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg border border-brand-sand/50 p-6 md:p-8"
    >
      <h3 className="font-display text-xl font-bold text-brand-dark text-center mb-6 flex items-center justify-center gap-2">
        Plan Your Journey
        <span className="text-brand-gold text-sm">✦</span>
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              What Type of Trip Are You Interested In?
            </Label>
            <Select
              value={formData.tripType}
              onValueChange={(value) => setFormData({ ...formData, tripType: value })}
            >
              <SelectTrigger className="w-full border-gray-200 h-10">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="disney">Disney Vacation</SelectItem>
                <SelectItem value="family">Family Trip</SelectItem>
                <SelectItem value="texas">Texas Road Trip</SelectItem>
                <SelectItem value="other">Other Destination</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              How Many People in Your Party?
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <Select
                value={formData.adults}
                onValueChange={(value) => setFormData({ ...formData, adults: value })}
              >
                <SelectTrigger className="border-gray-200 h-10"><SelectValue placeholder="No. of Adults" /></SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6].map((n) => (
                    <SelectItem key={n} value={n.toString()}>{n} Adult{n > 1 ? "s" : ""}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={formData.kids}
                onValueChange={(value) => setFormData({ ...formData, kids: value })}
              >
                <SelectTrigger className="border-gray-200 h-10"><SelectValue placeholder="No. of Kids" /></SelectTrigger>
                <SelectContent>
                  {[0,1,2,3,4,5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>{n} Kid{n !== 1 ? "s" : ""}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            When Would You Like To Go?
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative">
              <Input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="border-gray-200 pl-10 h-10"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <div className="relative">
              <Input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="border-gray-200 pl-10 h-10"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Any Additional Notes
          </Label>
          <Textarea
            value={formData.additionalNotes}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            placeholder="Type here"
            className="border-gray-200 min-h-[100px] resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full py-6 text-base font-medium shadow-md hover:shadow-lg transition-all"
        >
          Start Planning
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </form>
    </motion.div>
  );
}