"use client";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-brand-100">
      <div className="h-1 bg-gradient-to-r from-lavender via-lemon to-brand-400" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center py-6 text-ink/80"
      >
        <p className="font-display text-lg text-ink">Made for little smiles ✨</p>
        <div className="mt-2 text-sm">
          <a href="/privacy" className="text-ink/60 hover:text-ink">Privacy Policy</a>
          <span className="mx-2 text-ink/30">•</span>
          <a href="/terms" className="text-ink/60 hover:text-ink">Terms of Service</a>
        </div>
        <p className="mt-2 text-xs text-ink/40">© {new Date().getFullYear()} Kids Lifestyle</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
