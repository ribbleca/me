"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact section coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}