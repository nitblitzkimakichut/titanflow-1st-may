'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-4xl mx-auto mb-12"
    >
      <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl p-6">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/shivanshbajaj053/consultation-call" 
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </motion.div>
  );
} 