"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, Users, Star, Award, 
  Shield, ShieldCheck, TrendingUp, CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Background3D from "@/components/Background3D";

interface CaseStudyProps {
  title: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  timeframe: string;
  imageUrl?: string;
}

const CaseStudyCard = ({ 
  title, 
  clientName, 
  industry, 
  challenge, 
  solution, 
  results, 
  testimonial, 
  timeframe,
  imageUrl 
}: CaseStudyProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl overflow-hidden mb-12"
  >
    <div className="p-6 sm:p-8">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-200 mb-2">{title}</h3>
          <div className="flex items-center text-sm text-slate-400 mb-4">
            <span className="font-medium text-emerald-400">{clientName}</span>
            <span className="mx-2">•</span>
            <span>{industry}</span>
            <span className="mx-2">•</span>
            <span>{timeframe}</span>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-emerald-300 mb-2">Challenge:</h4>
            <p className="text-slate-300">{challenge}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-emerald-300 mb-2">Solution:</h4>
            <p className="text-slate-300">{solution}</p>
          </div>
        </div>
        
        {imageUrl && (
          <div className="md:w-1/3 bg-emerald-900/20 rounded-lg overflow-hidden">
            <div className="aspect-[3/2] relative">
              <img src={imageUrl} alt={clientName} className="object-cover w-full h-full" />
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-emerald-300 mb-3">Results:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result, index) => (
            <div key={index} className="bg-emerald-900/20 border border-emerald-800/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-200 mb-1">{result.value}</div>
              <div className="text-sm font-medium text-emerald-400 mb-2">{result.metric}</div>
              <div className="text-xs text-slate-400">{result.description}</div>
            </div>
          ))}
        </div>
      </div>
      
      {testimonial && (
        <div className="bg-gradient-to-r from-emerald-900/30 to-black border border-emerald-800/30 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="text-emerald-400 mt-1">"</div>
            <div>
              <p className="text-slate-300 italic mb-3">{testimonial.quote}</p>
              <p className="text-sm">
                <span className="font-medium text-emerald-400">{testimonial.author}</span>
                <span className="text-slate-400"> • {testimonial.position}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background3D />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-emerald-900/10 via-slate-800/5 to-black/90 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-8 pb-16">
          <Link href="/booking">
            <Button variant="outline" className="relative overflow-hidden group border-emerald-700/50 bg-black/40 hover:bg-black/60 hover:border-emerald-600 text-emerald-300 hover:text-emerald-200 backdrop-blur-sm mt-6 mb-8 -ml-2 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" /> 
              <span className="relative z-10">Book Your Consultation</span>
            </Button>
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-emerald-200">
              Real Results for Businesses
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              See how TitanFlow AI has transformed client acquisition and booking for businesses across the globe
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">93+</div>
                <div className="text-sm text-slate-300">Businesses</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">18.2x</div>
                <div className="text-sm text-slate-300">Avg. ROI</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">$24.83</div>
                <div className="text-sm text-slate-300">Avg. Acquisition Cost</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">24/7</div>
                <div className="text-sm text-slate-300">AI Availability</div>
              </div>
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={index}>
                <CaseStudyCard {...caseStudy} />
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center max-w-3xl mx-auto rounded-xl overflow-hidden"
          >
            <div className="relative">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-black/70 to-black/90 z-0"></div>
              
              {/* Glass effect card */}
              <div className="relative z-10 backdrop-blur-md bg-black/30 border border-emerald-800/40 shadow-2xl p-10 sm:p-12">
                {/* Premium badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white text-xs uppercase tracking-wider py-1 px-4 rounded-full font-bold shadow-lg">
                  Limited Availability
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-6 text-white">
                  Transform Your Business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">AI-Powered Automation</span>
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                  Join the elite group of Businesses that have revolutionized their acquisition. Our proven system delivers consistent results with minimal effort.
                </p>
                
                {/* Trustworthiness indicators */}
                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-emerald-200 font-semibold">93+ Clients</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-emerald-200 font-semibold">Premium Service</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mb-2">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-emerald-200 font-semibold">Satisfaction Guarantee</div>
                  </div>
                </div>
                
                <Link href="/booking">
                  <Button 
                    size="lg"
                    className="relative group overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-md shadow-lg transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center">
                      Schedule Your Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>30-Minute Consultation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>100% Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const caseStudies: CaseStudyProps[] = [
  {
    title: "160+ Landing Page Views to 88 Scheduled Appointments",
    clientName: "Skyle Dental",
    industry: "Dental Practice",
    challenge: "Skyle Dental was struggling with lead generation and patient booking efficiency. Their traditional marketing methods were costly and yielded inconsistent results. They needed a solution to capture leads more effectively and convert them into booked appointments.",
    solution: "We implemented TitanFlow AI to automate their lead capture and follow-up process. The system was able to respond to inquiries within 60 seconds, ask qualifying questions, and schedule appointments directly on their calendar. The AI also sent automatic reminders to reduce no-shows.",
    results: [
      {
        metric: "Landing Page Views",
        value: "165",
        description: "Total qualified visitors to their dedicated landing page"
      },
      {
        metric: "Appointments Scheduled",
        value: "88",
        description: "High-quality appointments booked automatically by the AI"
      },
      {
        metric: "Cost Per Appointment",
        value: "$24.83",
        description: "Average cost to acquire each scheduled appointment"
      },
      {
        metric: "Total Investment",
        value: "$2,185.34",
        description: "Marketing spend with TitanFlow's AI system"
      }
    ],
    testimonial: {
      quote: "Finally a good marketing campaign! Instead of wasting hours trying to follow up with leads, the AI does it for me. This has been a game-changer for our practice.",
      author: "Dr. James Moore",
      position: "Owner, Skyle Dental"
    },
    timeframe: "30 days"
  },
  {
    title: "45 Leads to 22 High-Value Patient Bookings",
    clientName: "Bright Smile Dentistry",
    industry: "Dental Practice",
    challenge: "Bright Smile Dentistry was struggling with converting leads into high-value treatment cases. Their team was spending hours following up with leads, but many turned out to be price shoppers or not ready for treatment.",
    solution: "We implemented TitanFlow AI to pre-qualify leads and identify patients interested in comprehensive dental care. The AI system educated prospects about treatment options and only booked appointments with patients who showed genuine interest in proceeding with treatment.",
    results: [
      {
        metric: "Landing Page Views",
        value: "45",
        description: "Qualified visitors interested in dental services"
      },
      {
        metric: "Appointments Scheduled",
        value: "22",
        description: "High-value treatment consultations booked"
      },
      {
        metric: "Cost Per Appointment",
        value: "$32.50",
        description: "Average cost per qualified patient"
      },
      {
        metric: "Total Investment",
        value: "$715.00",
        description: "Total advertising spend for the campaign"
      }
    ],
    testimonial: {
      quote: "The AI system has transformed how we handle new patient inquiries. We're now seeing more patients who are ready for comprehensive treatment, and our case acceptance rate has significantly improved.",
      author: "Dr. Sarah Anderson",
      position: "Owner, Bright Smile Dentistry"
    },
    timeframe: "2 weeks"
  },
  {
    title: "113 Leads to 50 Quality Appointments",
    clientName: "Vista Smile Care",
    industry: "Dental Practice",
    challenge: "Vista Smile Care was spending heavily on advertising but struggling with lead quality and conversion rates. They were receiving high volumes of inquiries but many were price-shoppers or non-serious leads. Their team was wasting time on manual follow-ups with low-quality prospects.",
    solution: "We implemented TitanFlow AI to pre-qualify leads before they reached the sales team. The AI was programmed to ask specific qualifying questions, filter out time-wasters, and only book appointments with prospects who met their ideal patient criteria. The system also provided educational content to nurture leads who weren't ready to commit.",
    results: [
      {
        metric: "Landing Page Views",
        value: "113",
        description: "Total leads generated from advertising"
      },
      {
        metric: "Appointments Scheduled",
        value: "50",
        description: "Quality appointments with pre-qualified patients"
      },
      {
        metric: "Cost Per Appointment",
        value: "$36.97",
        description: "Average cost per booked appointment"
      },
      {
        metric: "Total Investment",
        value: "$1,848.35",
        description: "Total marketing spend over the period"
      }
    ],
    testimonial: {
      quote: "We were blown away by how effective the AI system was at qualifying patients. Our calendar is now filled with high-value patients who are ready to move forward with treatment. This has been transformative for our practice.",
      author: "Dr. William Parker",
      position: "Founder, Vista Smile Care"
    },
    timeframe: "45 days"
  },
  {
    title: "193 Leads to 93 Appointments in Just 30 Days",
    clientName: "Bright Dental",
    industry: "Dental Practice",
    challenge: "Bright Dental was struggling with lead management and appointment scheduling. Their front desk staff was overwhelmed with calls and online inquiries, leading to delayed responses and missed opportunities. They needed a solution to streamline their lead capture and conversion process.",
    solution: "We implemented TitanFlow AI to handle their lead management and appointment scheduling. The AI responded to all inquiries within seconds, qualified leads based on their specific criteria, and scheduled appointments directly on their calendar. The system also sent automated reminders to reduce no-shows.",
    results: [
      {
        metric: "Landing Page Views",
        value: "193",
        description: "Total leads generated from advertising"
      },
      {
        metric: "Appointments Scheduled",
        value: "93",
        description: "Quality appointments booked by the AI"
      },
      {
        metric: "Cost Per Appointment",
        value: "$14.84",
        description: "Average cost per booked appointment"
      },
      {
        metric: "Total Investment",
        value: "$1,379.91",
        description: "Total marketing spend over the period"
      }
    ],
    testimonial: {
      quote: "I finally feel in control of our patient acquisition. The system works 24/7 and has completely transformed our booking process. Now our team can focus on providing exceptional care instead of chasing leads.",
      author: "Cassie D.",
      position: "Office Manager, Bright Dental"
    },
    timeframe: "30 days"
  },
  {
    title: "7 Premium Leads to 3 High-Value Clients",
    clientName: "Elite Medical Spa",
    industry: "Medical Spa",
    challenge: "Elite Medical Spa was offering premium treatments at higher price points. While they didn't need a high volume of clients, they needed to ensure the leads they did get were properly qualified and converted. Their challenge was identifying and converting the right type of high-value clients.",
    solution: "We customized TitanFlow AI to focus on quality over quantity. The AI was programmed to ask detailed qualifying questions specific to their premium services, educate prospects about treatment options, and only book appointments with leads who met their strict qualification criteria.",
    results: [
      {
        metric: "Landing Page Views",
        value: "7",
        description: "Highly targeted leads interested in premium services"
      },
      {
        metric: "Appointments Scheduled",
        value: "3",
        description: "High-value appointments with qualified clients"
      },
      {
        metric: "Cost Per Appointment",
        value: "$63.15",
        description: "Average cost per booked high-value appointment"
      },
      {
        metric: "Total Investment",
        value: "$189.46",
        description: "Total marketing spend for premium client acquisition"
      }
    ],
    testimonial: {
      quote: "For our premium services, we don't need hundreds of appointments - we need the right ones. TitanFlow AI has been exceptional at finding and converting exactly the type of clients we're looking for.",
      author: "Sarah Johnson",
      position: "Director, Elite Medical Spa"
    },
    timeframe: "14 days"
  },
  {
    title: "35 Leads to 6 Qualified Surgery Candidates",
    clientName: "Laser Vision Center",
    industry: "Eye Surgery",
    challenge: "Laser Vision Center was receiving a decent number of leads, but many were not qualified for their specific procedures or were just price shopping. They needed a system to better qualify leads and only schedule appointments with candidates who met their medical criteria.",
    solution: "We implemented TitanFlow AI with customized qualification questions specific to laser eye surgery candidacy. The AI asked detailed health questions, screened out unsuitable candidates, provided educational content, and only booked appointments with leads who passed the initial screening.",
    results: [
      {
        metric: "Landing Page Views",
        value: "35",
        description: "Total leads expressing interest in laser vision correction"
      },
      {
        metric: "Appointments Scheduled",
        value: "6",
        description: "Pre-qualified appointments with suitable candidates"
      },
      {
        metric: "Cost Per Appointment",
        value: "$9.02",
        description: "Average cost per qualified appointment"
      },
      {
        metric: "Total Investment",
        value: "$54.12",
        description: "Total advertising spend for the campaign"
      }
    ],
    testimonial: {
      quote: "The AI does an amazing job filtering out patients who aren't good candidates for our procedures, saving our doctors countless hours of consultations that would never convert. The ROI has been exceptional.",
      author: "Dr. Michael Wright",
      position: "Chief Surgeon, Laser Vision Center"
    },
    timeframe: "21 days"
  }
];