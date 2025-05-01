"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Background3D from "@/components/Background3D";
import dynamic from 'next/dynamic';

// Dynamically import client components with no SSR
const CalendlyEmbed = dynamic(() => import('@/components/CalendlyEmbed'), { ssr: false });
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'), { ssr: false });

interface ExpectationItemProps {
  title: string;
  description: string;
  index: number;
  key?: number;
}

const ExpectationItem = ({ title, description, index }: ExpectationItemProps) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
    className="flex items-start gap-3 group"
  >
    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
    <div>
      <h3 className="text-emerald-200 font-semibold mb-1 text-base sm:text-lg">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.li>
);

interface SocialProofItemProps {
  icon: any;
  text: string;
}

const SocialProofItem = ({ icon, text }: SocialProofItemProps) => (
  <div className="flex items-center gap-2 bg-emerald-500/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
    {icon}
    <span className="text-xs sm:text-sm text-slate-300">{text}</span>
  </div>
);

interface TrustIndicatorProps {
  icon: any;
  text: string;
}

const TrustIndicator = ({ icon, text }: TrustIndicatorProps) => (
  <div className="flex items-center gap-2 sm:gap-3">
    {icon}
    <span className="text-sm sm:text-base text-slate-300">{text}</span>
  </div>
);

export default function Booking() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background3D />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-emerald-900/10 via-slate-800/5 to-black/90 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 min-h-screen flex flex-col">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-center pt-0 sm:pt-4 mb-6 sm:mb-8"
          >
            <div className="max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
                className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              >
                <span className="text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  🦷 LIMITED: Only 3 Dental Practices Can Join This Month
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-emerald-200">
                  Stop Losing High-Value Dental Patients to Competitors
                </span>
                <span className="block text-base sm:text-xl md:text-2xl mt-2 sm:mt-4 text-emerald-300">
                  Get 50-100 High-Value Dental Patients in 60 Days with Our AI-Powered System
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6 max-w-2xl mx-auto"
              >
                Join 127+ dental practices transforming their patient acquisition - <Link href="/case-studies" className="text-emerald-400 hover:text-emerald-300 underline">See Case Studies</Link>
              </motion.p>

              {/* Social Proof - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8"
              >
                <SocialProofItem icon={<Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />} text="4.9/5 Practice Rating" />
                <SocialProofItem icon={<TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />} text="127+ Dental Practices" />
                <SocialProofItem icon={<Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />} text="22.4x Average ROI" />
              </motion.div>
            </div>
          </motion.div>

          {/* Calendly Embed */}
          <CalendlyEmbed />

          {/* Video Testimonials */}
          <VideoTestimonials />

          {/* Case Studies Section */}
          <div className="w-full bg-gradient-to-b from-black to-emerald-900/20 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  See How Other Dental Practices Are <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">Thriving With Our System</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
                  Browse our collection of success stories from dental practices just like yours that have transformed their patient acquisition with our AI-powered system.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                {/* Case Study Cards */}
                <div className="bg-black/50 border border-emerald-800/40 rounded-xl overflow-hidden hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-emerald-800/30 to-black flex items-center justify-center">
                    <span className="text-5xl font-bold text-emerald-300">+325%</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">New Patient Growth</h3>
                    <p className="text-slate-300 mb-4">Urban dental clinic increased high-value patients by 325% in just 60 days</p>
                    <p className="text-sm text-emerald-400">Orthodontics & Cosmetic Dentistry</p>
                  </div>
                </div>

                <div className="bg-black/50 border border-emerald-800/40 rounded-xl overflow-hidden hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-emerald-800/30 to-black flex items-center justify-center">
                    <span className="text-5xl font-bold text-emerald-300">$98,400</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Revenue Added</h3>
                    <p className="text-slate-300 mb-4">Suburban practice added $98K in monthly recurring revenue</p>
                    <p className="text-sm text-emerald-400">General & Cosmetic Dentistry</p>
                  </div>
                </div>

                <div className="bg-black/50 border border-emerald-800/40 rounded-xl overflow-hidden hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-emerald-800/30 to-black flex items-center justify-center">
                    <span className="text-5xl font-bold text-emerald-300">18.5x</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">ROI Achieved</h3>
                    <p className="text-slate-300 mb-4">Multi-location practice saw 18.5x return on investment in first quarter</p>
                    <p className="text-sm text-emerald-400">Implants & Restorative Dentistry</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/case-studies">
                  <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <span className="flex items-center">
                      View All Case Studies
                      <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const expectations = [
  {
    title: "A Custom AI System That Brings Patients In",
    description: "No more waiting on referrals or chasing leads. We install a predictable pipeline that runs on its own."
  },
  {
    title: "ROI Breakdown + Go-Live Timeline",
    description: "Know exactly what you'll make, how fast, and how it works—before spending a single rupee."
  },
  {
    title: "A Step-by-Step Growth Plan",
    description: "No vague strategies. You get a clear map to scale, with exact moves to play each week."
  },
  {
    title: "Exclusive Use of Our Patient Acquisition Engine",
    description: "This isn't a course. It's a done-for-you system—only offered to one clinic per area. We don't compete with our clients."
  },
  {
    title: "We Do the Heavy Lifting",
    description: "From setup to optimization—our team handles the tech, the scripts, the automations, everything."
  },
  {
    title: "No Pressure. Just Proof.",
    description: "We don't \"sell.\" We show you what's broken in your current system—and how we fix it. If you see the gap, we work together."
  }
];