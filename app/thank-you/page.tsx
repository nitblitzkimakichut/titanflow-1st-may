"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Background3D with no SSR
const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

// Dynamically import Wistia Player component
const WistiaPlayer = dynamic(
  () =>
    import('@/components/WistiaPlayer').catch(() => {
      // Return a placeholder component if the import fails
      return () => <div className="w-full aspect-video bg-black/20 rounded-lg" />;
    }),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-black/20 rounded-lg animate-pulse" />
    ),
  }
);

// Add global styles to hide WhatsApp and Footer
const styles = `
  .fixed.bottom-6.right-6.z-50,
  footer.bg-black\\/50 {
    display: none !important;
  }
`;

const testimonials = [
  {
    quote: "Thankyou Shivansh And Team, we had our best month in terms on generating leads with AI AGENTS",
    name: "CEO",
    title: "Enterprise Client",
  },
  {
    quote: "Shivansh is the guy you want to work with, he is the type of guy who will show you results.",
    name: "Solar Sales Rep",
    title: "Solar Company",
  },
  {
    quote: "CREDIBLE AND UPTO DATE KID",
    name: "CEO",
    title: "Tech Startup",
  },
  {
    quote: "Very Good Services, Got Good Appointments",
    name: "Solar Sales Rep",
    title: "Solar Solutions",
  },
  {
    quote: "Using AI AGENTS for a month now, closed more deals, great guy to work with",
    name: "Managing Director",
    title: "Sales Agency",
  },
];

export default function ThankYou() {
  return (
    <>
      <style>{styles}</style>
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <Background3D />
        
        <div className="relative">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-emerald-900/10 via-slate-800/5 to-black/90 z-10" />
          
          <div className="container mx-auto px-4 py-12 relative z-20">
            {/* Warning Banner */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 rounded-lg text-center mb-8"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1 }}
                  className="text-2xl sm:text-3xl"
                >
                  ✋
                </motion.span> 
                STOP! DO NOT LEAVE THIS PAGE
              </h1>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                  IMPORTANT NEXT STEPS:
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                  Complete These 3 Steps Now, Otherwise We'll Be Forced To{" "}
                  <span className="font-bold underline">CANCEL</span> Your Call And
                  Give Your Slot To Someone Else
                </p>
              </motion.div>

              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-6 mb-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                    STEP 1:
                  </span>{" "}
                  Complete this video about our AI, it is absolutely necessary before we speak.
                </h3>

                {/* Video Container */}
                <div className="relative w-full max-w-3xl mx-auto">
                  <WistiaPlayer videoId="zcvyb92ww5" />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-6 mb-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                    STEP 2:
                  </span>{" "}
                  See what our clients are saying about us
                </h3>

                {/* Image */}
                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden bg-black/20">
                  <Image
                    src="https://iili.io/3XMRsrx.md.png"
                    alt="Client Results"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Testimonials Section - Separated from Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-12"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h3>
                <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="slow"
                />
              </motion.div>

              {/* Step 3 Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="space-y-8"
              >
                {/* Add Step 3 content here when provided */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}