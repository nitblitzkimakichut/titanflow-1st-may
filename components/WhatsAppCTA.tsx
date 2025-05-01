"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppCTA() {
  return (
    <motion.a
      href="https://wa.me/917347213123?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20you"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-900 via-slate-800 to-emerald-800 rounded-lg blur opacity-40 group-hover:opacity-60 transition-all duration-300" />
        <button className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 hover:border-emerald-700/50 text-emerald-400 hover:text-emerald-300 rounded-lg shadow-lg transition-all duration-300">
          <MessageCircle className="w-5 h-5" />
          <span className="font-mono text-sm font-medium tracking-wide">WhatsApp</span>
        </button>
      </div>
    </motion.a>
  );
}