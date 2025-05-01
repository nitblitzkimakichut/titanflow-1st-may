"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, Brain, Code2, Cpu, MessageSquare, Sparkles, Target, Users, Zap,
  Clock, Calendar, Phone, Video, Star, Share2, Globe, Mail, RefreshCcw,
  UserCheck, Bot, FileText, BellRing, UserPlus, ChevronDown, ChevronUp,
  CheckCircle2, Rocket, TrendingUp, Award, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Background3D from "@/components/Background3D";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const displayedServices = showAllServices ? services : services.slice(0, 3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const stats = [
    { icon: <CheckCircle2 className="w-7 h-7 text-emerald-400" />, value: "97%", label: "Client Satisfaction" },
    { icon: <Rocket className="w-7 h-7 text-emerald-400" />, value: "2.5x", label: "Revenue Growth" },
    { icon: <TrendingUp className="w-7 h-7 text-emerald-400" />, value: "85%", label: "Lead Conversion" },
    { icon: <Award className="w-7 h-7 text-emerald-400" />, value: "24/7", label: "AI Availability" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Background3D />
      
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-slate-300 to-emerald-200"
            >
              TitanFlow AI
            </motion.h1>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-slate-300 to-emerald-200"
            >
              TitanFlow AI
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link href="/free-training" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Free Training
            </Link>
            <Link href="/free-training" className="text-slate-300 hover:text-emerald-400 transition-colors">
              7 Day Trial
            </Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Case Studies
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Features
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="md:hidden text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden py-4 px-4 border-t border-emerald-900/30"
              >
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/free-training" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Free Training
                  </Link>
                  <Link 
                    href="/free-training" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    7 Day Trial
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="text-slate-300 hover:text-emerald-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-left text-slate-300 hover:text-emerald-400 transition-colors py-2"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection('benefits')}
                    className="text-left text-slate-300 hover:text-emerald-400 transition-colors py-2"
                  >
                    Features
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-emerald-900/10 via-slate-800/5 to-black/90 z-10" />
        
        {/* Enhanced ambient elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              animate={{
                x: [0, Math.random() * 50, 0],
                y: [0, Math.random() * 70, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 6}%`,
                top: `${10 + i * 6}%`,
                width: `${20 + i * 2}px`,
                height: `${20 + i * 2}px`,
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(5,150,105,0.1) 70%, rgba(0,0,0,0) 100%)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(148,163,184,0.1) 70%, rgba(0,0,0,0) 100%)'
                  : 'radial-gradient(circle, rgba(52,211,153,0.2) 0%, rgba(16,185,129,0.1) 70%, rgba(0,0,0,0) 100%)'
              }}
            />
          ))}
        </div>
        
        {/* Floating achievement banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-800/30 flex items-center gap-3 shadow-xl">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-emerald-900/80 border-2 border-emerald-400/40 flex items-center justify-center text-xs text-emerald-200"
                  animate={{ scale: i === 0 ? [1, 1.1, 1] : 1 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: i * 0.5
                  }}
                >
                  {['A', 'I', '+'][i]}
                </motion.div>
              ))}
            </div>
            <div className="h-8 w-[1px] bg-emerald-800/30"></div>
            <div className="text-sm text-slate-200">
              <span className="text-emerald-400 font-medium">230+ businesses</span> powered by our AI
            </div>
          </div>
        </motion.div>

        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-center max-w-[90%] mx-auto"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-900 via-slate-800 to-emerald-800 rounded-lg blur-2xl opacity-40 animate-pulse" />
              <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-slate-300 to-emerald-200 tracking-tight">
                Hiring More People Won't Work.
                <br className="hidden sm:block" />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
                  Our 15 AI Agents Deliver $150K/Month
                </span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 max-w-xl mx-auto">
              Automate your customer acquisition with intelligent AI — no additional staff or wasted ad spending required
            </p>
            <div className="flex justify-center">
              <Link href="/free-training">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(52, 211, 153, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="glass-button relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <Button 
                    size="lg" 
                    className="relative bg-white hover:bg-white text-black font-semibold px-8 py-3 text-lg rounded-md shadow-xl"
                  >
                    Start Free Training <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-black/50 backdrop-blur-sm border-y border-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 bg-emerald-900/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-4 flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-emerald-400 relative z-10"
                  >
                    <div className="absolute -inset-3 bg-emerald-900/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {stat.icon}
                  </motion.div>
                </div>
                <motion.h3
                  className="text-3xl font-bold text-emerald-400 mb-2 relative z-10"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-300 text-sm relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-emerald-900/30 rounded-full text-emerald-400 text-sm font-medium mb-4">INTELLIGENT AUTOMATION</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-200">Meet Your Elite AI Team</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Cutting-edge AI solutions engineered to revolutionize your business operations and skyrocket growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {displayedServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  exit={{ opacity: 0, y: 20 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 hover:border-emerald-700/50 transition-all backdrop-blur-sm group hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-800/30 transition-colors"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-200">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <motion.span 
                          className="text-emerald-400 mt-1 transition-transform duration-300 group-hover:scale-110"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ scale: 1.5, opacity: 1 }}
                        >•</motion.span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllServices(!showAllServices)}
              className="border-emerald-800 text-emerald-400 hover:bg-emerald-900/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-emerald-900/20 transition-all duration-300 group-hover:w-full"></div>
              <span className="relative z-10">
                {showAllServices ? (
                  <>Show Less <ChevronUp className="ml-2 h-4 w-4 inline" /></>
                ) : (
                  <>Discover All AI Agents <ChevronDown className="ml-2 h-4 w-4 inline" /></>
                )}
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-900/50 via-emerald-800/20 to-emerald-900/50 rounded-xl blur-xl opacity-30 animate-pulse"></div>
            
            <div className="relative p-8 rounded-xl bg-gradient-to-b from-emerald-900/10 to-black/80 border border-emerald-800/30">
              <div className="inline-block px-4 py-1 bg-emerald-900/30 rounded-full text-emerald-400 text-sm font-medium mb-4">SUCCESS STORY</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-200">
                19 Quality Appointments in Just 3 Days for Elite Solar
              </h2>
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500/50 via-emerald-400/80 to-emerald-500/50 rounded-full"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-900/30">
                  <motion.div 
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-emerald-400"
                  >
                    <Calendar className="h-5 w-5" />
                  </motion.div>
                  <span className="text-slate-300 text-sm">3 appointments on day one</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-900/30">
                  <motion.div 
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    className="text-emerald-400"
                  >
                    <TrendingUp className="h-5 w-5" />
                  </motion.div>
                  <span className="text-slate-300 text-sm">19 appointments by day three</span>
                </div>
                
                <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-900/30">
                  <motion.div 
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="text-emerald-400"
                  >
                    <Bot className="h-5 w-5" />
                  </motion.div>
                  <span className="text-slate-300 text-sm">100% automated follow-ups</span>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg mb-8">
                After quick onboarding, our AI system delivered immediate results with zero manual intervention. 
                The system identified high-intent leads, engaged them at optimal times, and scheduled appointments automatically.
              </p>
              
              <Link href="/free-training">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(52, 211, 153, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="bg-emerald-900/80 hover:bg-emerald-800/80 text-emerald-100/90 font-semibold px-8 rgb-glow backdrop-blur-sm"
                  >
                    Schedule Your Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-200">Experience the Business Transformation</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Step into a world where every bottleneck in your business is eliminated and growth happens automatically
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 hover:border-emerald-700/50 transition-all backdrop-blur-sm group hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-800/30 transition-colors"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-200">{feature.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/50 via-emerald-900/5 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-emerald-900/30 rounded-full text-emerald-400 text-sm font-medium mb-4">TRUSTED BY INDUSTRY LEADERS</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-200">What Our Clients Say</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Real results from businesses that have transformed their operations with our intelligent AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 0 20px rgba(52, 211, 153, 0.2)"
                }}
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-900/10 to-black border border-emerald-900/20 backdrop-blur-sm relative group"
              >
                <div className="absolute -top-3 -left-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-8 h-8 text-emerald-400 fill-emerald-400/30" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 text-emerald-400/40 fill-emerald-400/10" />
                  </motion.div>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-pulse"></div>
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-emerald-200">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-slate-300 relative pl-4">
                  <span className="absolute left-0 top-0 text-emerald-400 text-3xl leading-tight">"</span>
                  {testimonial.content}
                  <span className="text-emerald-400 text-3xl leading-tight">"</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-b from-black/50 to-emerald-900/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-900 via-slate-800 to-emerald-800 rounded-lg blur-2xl opacity-40 animate-pulse"></div>
            
            <div className="relative p-8 rounded-xl bg-gradient-to-b from-emerald-900/20 to-black/70 border border-emerald-700/30">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-lg -translate-x-3 -translate-y-3"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-500/20 rounded-br-lg translate-x-3 translate-y-3"></div>

              <motion.h2 
                className="text-4xl sm:text-5xl font-bold mb-6 text-emerald-200"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                Ready to Scale Your Business
                <br />
                to New Heights?
              </motion.h2>
              <p className="text-slate-300 mx-auto mb-8 text-lg sm:text-xl">
                Achieve breakthrough growth with AI-powered automation that delivers consistent sales
                <br />
                and profitability without hiring additional staff.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/free-training">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                    <Button size="lg" className="relative bg-white hover:bg-white/90 text-black font-semibold px-8 py-6 text-lg rgb-glow backdrop-blur-sm overflow-hidden group">
                      <div className="absolute inset-0 w-0 bg-emerald-50 transition-all duration-300 group-hover:w-full opacity-20"></div>
                      <span className="relative flex items-center">
                        Start Your 7-Day Free Trial <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-emerald-400"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm">No Credit Card Required</span>
                </motion.div>
              </div>
              
              <div className="mt-6 flex flex-wrap justify-center gap-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">24/7 AI Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Full Feature Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: <Clock className="w-6 h-6 text-emerald-400" />,
    title: "Speed to Lead AI Agent",
    description: "Instantly respond to high-intent leads within 60 seconds",
    features: [
      "Automated lead qualification",
      "Instant phone call initiation",
      "Real-time lead scoring",
      "24/7 response capability"
    ]
  },
  {
    icon: <Calendar className="w-6 h-6 text-emerald-400" />,
    title: "AI Appointment Setter",
    description: "Automated scheduling and appointment management",
    features: [
      "Smart calendar management",
      "Automated follow-ups",
      "Multi-timezone support",
      "Integration with major calendar systems"
    ]
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    title: "24/7 WhatsApp Sales Agent",
    description: "Round-the-clock WhatsApp sales support powered by AI",
    features: [
      "Instant response to inquiries",
      "Product recommendations",
      "Order processing",
      "Multi-language support"
    ]
  },
  {
    icon: <FileText className="w-6 h-6 text-emerald-400" />,
    title: "AI Content Creator",
    description: "Automated content creation and posting system",
    features: [
      "SEO-optimized content",
      "Scheduled posting",
      "Multi-platform support",
      "Engagement analytics"
    ]
  },
  {
    icon: <Video className="w-6 h-6 text-emerald-400" />,
    title: "AI UGC Video Maker",
    description: "Generate engaging user-style video content automatically",
    features: [
      "Custom video templates",
      "Brand voice adaptation",
      "Trending style integration",
      "Multi-platform export"
    ]
  },
  {
    icon: <BellRing className="w-6 h-6 text-emerald-400" />,
    title: "AI Retention Agent",
    description: "Proactive customer retention and follow-up system",
    features: [
      "Automated check-ins",
      "Satisfaction monitoring",
      "Personalized offers",
      "Churn prediction"
    ]
  },
  {
    icon: <Target className="w-6 h-6 text-emerald-400" />,
    title: "AI Lead Nurturing",
    description: "Automated lead nurturing and relationship building",
    features: [
      "Personalized communication",
      "Behavior-based targeting",
      "Content recommendations",
      "Engagement tracking"
    ]
  },
  {
    icon: <Star className="w-6 h-6 text-emerald-400" />,
    title: "AI Reputation Manager",
    description: "Automated reputation monitoring and management",
    features: [
      "Review monitoring",
      "Sentiment analysis",
      "Response automation",
      "Brand perception tracking"
    ]
  },
  {
    icon: <Share2 className="w-6 h-6 text-emerald-400" />,
    title: "AI Referral System",
    description: "Automated referral program management",
    features: [
      "Referral tracking",
      "Reward automation",
      "Program analytics",
      "Partner management"
    ]
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
    title: "AI Website Lead Capture",
    description: "Intelligent website visitor conversion system",
    features: [
      "Smart forms",
      "Behavior tracking",
      "Lead scoring",
      "Conversion optimization"
    ]
  },
  {
    icon: <Mail className="w-6 h-6 text-emerald-400" />,
    title: "AI Outreach Agent",
    description: "Automated email and call outreach campaigns",
    features: [
      "Personalized emails",
      "Call scheduling",
      "Response tracking",
      "A/B testing"
    ]
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-emerald-400" />,
    title: "AI Rescheduling Agent",
    description: "Intelligent appointment rescheduling system",
    features: [
      "Automated rescheduling",
      "Smart availability check",
      "Customer preference learning",
      "Calendar optimization"
    ]
  },
  {
    icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
    title: "AI No-Show Reducer",
    description: "Proactive appointment confirmation and reminder system",
    features: [
      "Smart reminders",
      "Engagement tracking",
      "Behavior prediction",
      "Follow-up automation"
    ]
  },
  {
    icon: <UserPlus className="w-6 h-6 text-emerald-400" />,
    title: "Lead Reactivation Agent",
    description: "AI-powered system for re-engaging dormant leads",
    features: [
      "Personalized re-engagement",
      "Optimal timing prediction",
      "Custom offer generation",
      "Success tracking"
    ]
  }
];

const features = [
  {
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    title: "Complete Command Over Lead Flow",
    description: "Never miss a potential customer again. Our system captures and converts every inquiry into consistent qualified appointments.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Exponential Revenue Growth",
    description: "Watch as every marketing dollar transforms into measurable, exponential revenue growth with precise tracking and optimization.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: "Unshakable Market Dominance",
    description: "Stand out in your market with a trusted brand presence. We build the credibility that turns prospects into loyal, lifetime customers.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
    title: "Stress-Free Business Operation",
    description: "Eliminate the chaos of manual management with intelligent automation that lets you focus on strategy instead of daily operations.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Dental Clinic Director, Texas",
    content: "TitanFlow's AI solutions transformed our practice. We've seen a 43% increase in new patient appointments and saved 20+ hours weekly on administrative tasks."
  },
  {
    name: "Michael Chen",
    position: "CEO, Eclipse Energy & Roofing",
    content: "Their conversational AI platform revolutionized our customer experience. Response times decreased by 90%, and our customer satisfaction scores have never been higher."
  },
  {
    name: "Emma Williams",
    position: "Marketing Director, Premium Auto Group",
    content: "The AI-powered marketing automation has helped us scale efficiently. We're now running hyper-personalized campaigns that have increased our conversion rates by 67%."
  }
];