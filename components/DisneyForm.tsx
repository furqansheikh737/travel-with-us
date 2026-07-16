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
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, Calendar } from "lucide-react";

interface DisneyFormProps {
  variant: "parks" | "cruise";
}

export default function DisneyForm({ variant }: DisneyFormProps) {
  const [formData, setFormData] = useState({
    adults: "",
    kids: "",
    startDate: "",
    endDate: "",
    days: "",
    resort: "",
    budget: "",
    notes: "",
    months: "",
    nights: "",
    ship: "",
    tripType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Disney ${variant === "parks" ? "Parks" : "Cruise"} booking request submitted!`);
  };

  const isParks = variant === "parks";
  const headerColor = isParks ? "bg-brand-teal" : "bg-brand-gold";
  const buttonColor = isParks ? "bg-brand-teal hover:bg-brand-teal/90" : "bg-brand-gold hover:bg-brand-gold/90";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg border border-brand-sand/50 overflow-hidden"
    >
      {/* Curved Header - EXACT match to design */}
      <div className={`${headerColor} relative py-4 px-6 text-center`}>
        {/* Curved bottom edge */}
        <div className="absolute -bottom-4 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,0 Q200,30 400,0 L400,30 L0,30Z" fill={isParks ? "#2D6B6B" : "#C8956C"}/>
          </svg>
        </div>
        <h3 className="text-white font-bold text-sm tracking-wider relative z-10 flex items-center justify-center gap-2">
          DISNEY {isParks ? "PARKS" : "CRUISE"}
          <span className="text-white/80 text-xs">✦</span>
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="p-6 pt-8 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-gray-700">How many people?</Label>
            <Select value={formData.adults} onValueChange={(v) => setFormData({...formData, adults: v})}>
              <SelectTrigger className="text-xs h-9"><SelectValue placeholder="No. of Adults" /></SelectTrigger>
              <SelectContent>
                {[1,2,3,4,5,6].map(n => <SelectItem key={n} value={n.toString()}>{n} Adult{n>1?"s":""}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-gray-700 opacity-0">Kids</Label>
            <Select value={formData.kids} onValueChange={(v) => setFormData({...formData, kids: v})}>
              <SelectTrigger className="text-xs h-9"><SelectValue placeholder="No. of Kids" /></SelectTrigger>
              <SelectContent>
                {[0,1,2,3,4,5].map(n => <SelectItem key={n} value={n.toString()}>{n} Kid{n!==1?"s":""}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        {isParks ? (
          <>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-gray-700">Dates</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <Input type="date" className="text-xs h-9 pl-8" value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.target.value})} />
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="relative">
                  <Input type="date" className="text-xs h-9 pl-8" value={formData.endDate} onChange={(e) => setFormData({...formData, endDate: e.target.value})} />
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-gray-700">How Many Days at the Parks?</Label>
              <Select value={formData.days} onValueChange={(v) => setFormData({...formData, days: v})}>
                <SelectTrigger className="text-xs h-9"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <SelectItem key={n} value={n.toString()}>{n} Day{n>1?"s":""}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-medium text-gray-700">Any preferred resorts?</Label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox id={`resort1-${variant}`} />
                  <Label htmlFor={`resort1-${variant}`} className="text-xs text-gray-600">Preferred Resort 1</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id={`resort2-${variant}`} />
                  <Label htmlFor={`resort2-${variant}`} className="text-xs text-gray-600">Preferred Resort 2</Label>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-gray-700">Months you would like to travel</Label>
              <Select value={formData.months} onValueChange={(v) => setFormData({...formData, months: v})}>
                <SelectTrigger className="text-xs h-9"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => (
                    <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-gray-700">How many cruise nights?</Label>
              <Select value={formData.nights} onValueChange={(v) => setFormData({...formData, nights: v})}>
                <SelectTrigger className="text-xs h-9"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {[3,4,5,7,10,14].map(n => <SelectItem key={n} value={n.toString()}>{n} Nights</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-gray-700">Any specific cruise ship?</Label>
              <Input className="text-xs h-9" placeholder="Enter ship name" value={formData.ship} onChange={(e) => setFormData({...formData, ship: e.target.value})} />
            </div>
          </>
        )}

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-gray-700">What Kind of Trip Are You Looking For?</Label>
          <Select value={formData.tripType} onValueChange={(v) => setFormData({...formData, tripType: v})}>
            <SelectTrigger className="text-xs h-9"><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="family">Family Vacation</SelectItem>
              <SelectItem value="couple">Couple Getaway</SelectItem>
              <SelectItem value="group">Group Trip</SelectItem>
              <SelectItem value="special">Special Occasion</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-gray-700">Budget</Label>
          <Select value={formData.budget} onValueChange={(v) => setFormData({...formData, budget: v})}>
            <SelectTrigger className="text-xs h-9"><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy ($2,000-$5,000)</SelectItem>
              <SelectItem value="moderate">Moderate ($5,000-$10,000)</SelectItem>
              <SelectItem value="luxury">Luxury ($10,000+)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-gray-700">Any additional notes:</Label>
          <Textarea
            className="text-xs min-h-[80px] resize-none"
            placeholder="Additional Notes for Travel Planner"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>

        <Button
          type="submit"
          className={`w-full text-white rounded-full py-5 text-sm font-medium ${buttonColor}`}
        >
          {isParks ? "Book Disney Trip" : "Book Disney Cruise"}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </motion.div>
  );
}