"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Play, CheckCircle2, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Background3D from "@/components/Background3D";

export default function FreeTraining() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Background3D />
      
      <div className="relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-emerald-900/10 via-slate-800/5 to-black/90 z-10" />
        
        <div className="container mx-auto px-4 py-12 relative z-20">
          <Link href="/">
            <Button className="text-emerald-400 hover:text-emerald-300 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-slate-300 to-emerald-200">
              Free Training: Scale Your Business with AI Agents
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Learn how to automate your business and reach $500K/month using our proven AI systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-8"
            >
              <motion.a
                href="https://youtu.be/LGQA8YxaG4g?si=cU0WW-lWeVbt-voY"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-video bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group relative overflow-hidden cursor-pointer">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('https://iili.io/3T79HCu.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-emerald-500/90 rounded-full p-4 backdrop-blur-sm group-hover:bg-emerald-400/90 transition-colors duration-300">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.a>
              <h2 className="text-2xl font-semibold text-emerald-200 mb-4">What You'll Learn</h2>
              <ul className="space-y-4">
                {trainingPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-emerald-200 mb-6">Free 7 Day Trial</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-slate-300">No Strings Attached</p>
                    <p className="text-sm text-slate-400">Implement this AI Infrastructure into your business</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-slate-300">Scale to 100K/mo</p>
                    <p className="text-sm text-slate-400">Only for 3 Businesses This Month</p>
                  </div>
                </div>
                <a 
                  href="https://cal.com/shivansh-bajaj-okvpea/30min"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-semibold mt-6">
                    Reserve Your Spot
                  </Button>
                </a>
                <p className="text-sm text-slate-400 text-center mt-4">
                  Last Spot Left !
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

const trainingPoints = [
  "How to implement AI agents that generate consistent leads 24/7",
  "The exact system we use to help businesses reach $500K/month",
  "Advanced automation strategies for scaling your operations",
  "How to eliminate manual tasks and reduce operational costs",
  "Real case studies of businesses transformed by AI automation",
  "Live Q&A session to address your specific business challenges"
];