"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrailPositions(prev => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        if (newPositions.length > 5) {
          return newPositions.slice(-5);
        }
        return newPositions;
      });
    };

    const updateVisibility = () => setIsVisible(true);
    const hideVisibility = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updateVisibility);
    window.addEventListener('mouseleave', hideVisibility);

    return () => {
      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mouseenter', updateVisibility);
      window.addEventListener('mouseleave', hideVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {trailPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="cursor-trail"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 0, x: pos.x, y: pos.y }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
          <motion.div
            className="custom-cursor"
            animate={{
              x: position.x,
              y: position.y,
              scale: 1,
              opacity: 1
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}