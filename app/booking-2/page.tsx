"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowLeft, Calendar, Clock, CheckCircle2, Users, Star, Award, Shield, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Background3D from "@/components/Background3D";

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

          {/* Sales Letter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-4xl mx-auto mb-8 sm:mb-12"
          >
            <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 prose prose-lg max-w-none shadow-lg border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                You Don't Need More Leads.
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-600 mb-6">
                You Need a System That Actually Turns Them Into Revenue.
              </p>

              <div className="mb-8">
                <p className="text-lg font-medium text-slate-900 mb-4">Let's cut to it.</p>
                <p className="text-base text-slate-700 mb-4">If you're like most dental practice owners I talk to, you're doing everything right on paper:</p>
                <ul className="space-y-2 text-slate-700 list-disc pl-6 mb-4">
                  <li>Running ads</li>
                  <li>Posting content</li>
                  <li>Training your team</li>
                  <li>Answering the phones (well... trying to)</li>
                </ul>
                <p className="text-base font-medium text-slate-800 mt-4">And yet, your calendar isn't as full as it should be.</p>
                <p className="text-base text-slate-700">Your team is overwhelmed.</p>
                <p className="text-base text-slate-700">Leads are slipping through the cracks.</p>
                <p className="text-base text-slate-700">And you're starting to wonder if the problem is you.</p>
                <p className="text-lg font-bold text-slate-900 mt-4">It's not.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Here's the Real Problem:</h3>
                <p className="text-lg font-medium text-emerald-600">You don't have a marketing problem.</p>
                <p className="text-lg font-medium text-emerald-600 mb-4">You have a follow-up and conversion problem.</p>
                <ul className="space-y-2 text-slate-700 list-disc pl-6 mb-4">
                  <li>Most leads aren't being responded to fast enough.</li>
                  <li>The wrong people are getting through.</li>
                  <li>The right people aren't getting booked.</li>
                  <li>And you're spending more time chasing than treating.</li>
                </ul>
                <p className="text-base font-medium text-slate-800 mt-4">It's not sustainable.</p>
                <p className="text-base font-medium text-slate-800">It's not scalable.</p>
                <p className="text-base font-medium text-slate-800">And it's definitely not why you got into this business.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What If There Was a Simpler Way?</h3>
                <p className="text-base text-slate-700 mb-4">Imagine waking up to a full calendar.</p>
                <p className="text-lg font-medium text-emerald-600">Not full of price-shoppers or free consult junkies—<br/>but real, motivated, pre-qualified patients.</p>
                <p className="text-base text-slate-700 mt-4">No chasing. No calling. No wondering if your team followed up.</p>
                <p className="text-lg font-medium text-slate-900">They come in ready, because the system already did the hard work.</p>
              </div>

              <div className="mb-8 bg-slate-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
                <div className="mb-4">
                  <img 
                    src="https://media-hosting.imagekit.io/5679058e04aa4a5d/Screenshot%202025-03-19%20181257.png?Expires=1838020917&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1Wh3TKxQVAEgqlv88dSwxf21TqYxNco2GUJ~fnYTiIfcUahFQ69q5a0qiQxfXVGWDZg2SKTaEn8e2bEKyxBpb6kyNZP~HaeQQXRkpbOnkw2ATIw~xmzQ4D6lB20oRjKOgiUgfP8bxz3WTCD0TGCxYfigCAIfj0jo7iTFABEBkQr2NzuL4~fOmsQQJYZ751iYF71~1fLw9z-G2vGj34CcU84C6JaMia~pnVhG0d6HV4aFT6VcnxylmEoprmAgACcvTAzn5viZ699vhp8Ot1L1hM53Y0ZFEA9iIgpM3F8h6FdBo9dX24jjV4ITl1dl3xdDqXu7CTWMf6sQm0VBh9fu6A__" 
                    alt="AI Follow-up Results" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <p className="text-lg font-semibold text-slate-900 mb-2">
                  This isn't just great targeting — it's what happens when AI handles your dental patient follow-up.
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent my-3">
                  $8 in ad spend turned into a $12K full mouth restoration... while the dentist was asleep.
                </p>
                <p className="text-lg font-medium text-slate-800">
                  You don't need more leads. You need a system that converts them into high-value dental patients.
                </p>
                <Link href="/case-studies" className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium">
                  → See more dental practice case studies
                </Link>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">That's What TitanFlow Does.</h3>
                <p className="text-base text-slate-700 mb-4">We've built an AI-powered patient acquisition system that:</p>
                <ul className="space-y-2 text-slate-700 list-disc pl-6 mb-4">
                  <li>Responds to leads in under 60 seconds (24/7)</li>
                  <li>Filters out time-wasters before they ever hit your inbox</li>
                  <li>Books only qualified patients on your calendar</li>
                  <li>Even collects a refundable deposit to make sure they show</li>
                </ul>
                <p className="text-lg font-medium text-emerald-600 mt-4">The best part?</p>
                <p className="text-lg font-medium text-slate-900">You don't have to set it up, manage it, or learn any tech.</p>
                <p className="text-base text-emerald-600">We install it. We optimize it. You reap the results.</p>
              </div>

              <div className="mb-8 bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">It's Built for Clinics That Are Tired of Wasted Potential.</h3>
                <ul className="space-y-2 text-slate-700 list-disc pl-6">
                  <li>If you're already generating leads but struggling to turn them into booked appointments, this fixes that.</li>
                  <li>If your front desk is great in person but slow online, this covers that.</li>
                  <li>If you're stretched thin, wearing too many hats, and know deep down you can't scale doing everything manually—<br/>this was built for you.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">"Sounds Great. But Does It Actually Work?"</h3>
                <p className="text-lg font-medium text-emerald-600">Yes. And fast.</p>
                <p className="text-base text-slate-700 mb-4">Most clinics make back their investment within two weeks—sometimes sooner.</p>
                <p className="text-base text-slate-700">The ROI is easy to track. If it doesn't pay for itself, it's not worth keeping.</p>
                <p className="text-base text-emerald-600">And if it doesn't work at all, you don't pay us a thing. In fact, we'll give you $2,000 for wasting your time.</p>
                <p className="text-lg font-medium text-slate-900 mt-4">No hidden fees. No fine print.</p>
                <p className="text-base text-slate-700">We'll discuss the full details and walk you through it on a strategy call.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What's Next?</h3>
                <p className="text-base text-slate-700 mb-4">If you're even half-curious, book a call.</p>
                <p className="text-base text-slate-700 mb-4">
                  Want to see more proof? <Link href="/case-studies" className="text-emerald-600 hover:text-emerald-700 font-medium">Check out our case studies</Link> to see how we've helped other businesses just like yours.
                </p>
                <p className="text-base text-slate-700">We'll take a look at your current setup, see if this is a fit, and show you how it would work in your business.</p>
                <p className="text-base text-slate-700 mt-4">If it's not a match, no worries.</p>
                <p className="text-lg font-medium text-slate-900">But if it is, this could be the unlock that takes your practice from "busy" to booked solid.</p>
                <p className="text-lg font-medium text-emerald-600 mt-4">Simple as that.</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile CTA - Visible only on smallest screens - KEEP INDIGO/PURPLE ONLY HERE */}
          <div className="block sm:hidden mb-8">
            <div className="relative">
              {/* Attention-grabbing pulsing effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-70 blur-md animate-pulse"></div>
              
              {/* Premium badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-xs uppercase tracking-wider py-1 px-4 rounded-full font-bold shadow-lg z-10">
                Limited Spots Available
              </div>
              
              <div className="relative bg-gradient-to-br from-indigo-900/90 to-black border-2 border-indigo-500/50 rounded-xl p-5 z-0">
                <h3 className="text-xl font-bold text-white text-center mb-3">Ready to Transform Your Practice?</h3>
                <p className="text-slate-300 text-center mb-5">Book your strategy session now and get a customized AI plan.</p>
                
                <a 
                  href="https://cal.com/shivansh-bajaj-okvpea/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg shadow-lg transform transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Schedule Your Free Strategy Call
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="absolute -inset-1 opacity-0 group-hover:opacity-30 bg-white blur-md group-hover:animate-pulse transition-opacity duration-300"></span>
                </a>
                
                <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-slate-300">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>30-Minute Consultation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>100% Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
            {/* Left Column - Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-4 sm:p-6 md:p-8 floating-element pulsing-border">
                <h2 className="text-xl sm:text-2xl font-semibold text-emerald-200 mb-4 sm:mb-8">What You Get (and Why It Matters)</h2>
                <ul className="space-y-4 sm:space-y-6">
                  {expectations.map((item, index) => (
                    <ExpectationItem 
                      key={index}
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  ))}
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-emerald-200 mb-4 sm:mb-6">Why Choose Us</h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <TrustIndicator icon={<Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />} text="100% Guaranteed" />
                  <TrustIndicator icon={<Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />} text="Proven Results" />
                  <TrustIndicator icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />} text="ROI Focused" />
                  <TrustIndicator icon={<Star className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />} text="Expert Support" />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Call Details & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-4 sm:p-6 floating-element pulsing-border">
                <h2 className="text-xl sm:text-2xl font-semibold text-emerald-200 mb-4 sm:mb-6">Strategy Session Details</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    <div>
                      <p className="text-sm sm:text-base text-slate-300">30 Minutes</p>
                      <p className="text-xs sm:text-sm text-slate-400">Focused strategy session</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    <div>
                      <p className="text-sm sm:text-base text-slate-300">1-on-1 Meeting</p>
                      <p className="text-xs sm:text-sm text-slate-400">With our AI strategy expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    <div>
                      <p className="text-sm sm:text-base text-slate-300">Flexible Scheduling</p>
                      <p className="text-xs sm:text-sm text-slate-400">Choose a time that works for you</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section - Hidden on smallest screens (shown at top) - KEEP INDIGO/PURPLE ONLY HERE */}
              <div className="w-full mt-8 hidden sm:block">
                <div className="relative">
                  {/* Attention-grabbing pulsing effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-70 blur-md animate-pulse"></div>
                  
                  {/* Premium badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-xs uppercase tracking-wider py-1 px-4 rounded-full font-bold shadow-lg z-10">
                    Limited Spots Available
                  </div>
                  
                  <div className="relative bg-gradient-to-br from-indigo-900/90 to-black border-2 border-indigo-500/50 rounded-xl p-5 z-0">
                    <h3 className="text-xl font-bold text-white text-center mb-3">Ready to Transform Your Practice?</h3>
                    <p className="text-slate-300 text-center mb-5">Book your strategy session now and get a customized AI plan.</p>
                    
                    <a 
                      href="https://cal.com/shivansh-bajaj-okvpea/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-full sm:w-auto mx-auto text-center px-8 py-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Schedule Your Free Strategy Call
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      <span className="absolute -inset-1 opacity-0 group-hover:opacity-30 bg-white blur-md group-hover:animate-pulse transition-opacity duration-300"></span>
                    </a>
                    
                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-300">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                        <span>No Credit Card Required</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-indigo-400" />
                        <span>30-Minute Consultation</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        <span>100% Money-Back Guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Case Studies CTA Section */}
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
            {/* Case Study Highlight Card 1 */}
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
            
            {/* Case Study Highlight Card 2 */}
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
            
            {/* Case Study Highlight Card 3 */}
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
              <Button
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <span className="flex items-center">
                  View All Case Studies
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </span>
              </Button>
            </Link>
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