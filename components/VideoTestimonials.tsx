'use client';

import { motion } from 'framer-motion';

const videos = [
  {
    id: 2,
    src: "https://player.vimeo.com/video/1072827649?h=fbbd3951af&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    title: "testimonial 1",
    padding: "176.47%"
  },
  {
    id: 4,
    src: "https://player.vimeo.com/video/1072827611?h=0ce7744b60&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    title: "testimonial 3",
    padding: "177.78%"
  }
];

export default function VideoTestimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-5xl mx-auto mb-12"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        See What Our Growth Magnet Partners Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-900/30 rounded-xl overflow-hidden">
            <div style={{ padding: `${video.padding} 0 0 0`, position: "relative" }}>
              <iframe 
                src={video.src}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title={video.title}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 