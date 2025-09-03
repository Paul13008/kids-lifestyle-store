"use client";
import { motion } from 'framer-motion';
import Noise from '@/components/background/Noise';

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-16 sm:py-24 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-50 via-lemon/50 to-lavender/50" />
        <Noise opacity={0.06} />
        <motion.h1
          className="text-4xl sm:text-5xl font-display text-ink mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fun styles for little vibes
        </motion.h1>
        <motion.p
          className="text-lg text-ink/70 max-w-2xl mb-8"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Soft colors, playful shapes, and comfy essentials — crafted for kids and their grown‑ups.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-6 rounded-full shadow-soft"
          >
            Shop New Arrivals
            <span>→</span>
          </a>
        </motion.div>
        <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-mint blur-2xl opacity-70" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-sky blur-2xl opacity-70" />
      </div>
    </section>
  );
}

