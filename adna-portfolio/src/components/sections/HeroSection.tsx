"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  MapPin, 
  Coffee,
  Code,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { scrollToElement } from "@/lib/utils";

const typewriterTexts = [
  "Full-Stack Developer",
  "Digital Innovator", 
  "Problem Solver",
  "Tech Enthusiast",
  "Creative Coder"
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleType = () => {
      const currentText = typewriterTexts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypeSpeed(75);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    };

    timeoutRef.current = setTimeout(handleType, typeSpeed);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, currentTextIndex, typeSpeed]);

  const scrollToAbout = () => {
    scrollToElement("about", 80);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
            >
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl"
              >
                👋
              </motion.span>
              <span className="text-lg text-muted-foreground">Hello, I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="block">{personalInfo.firstName}</span>
              <span className="gradient-text">{personalInfo.lastName}</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-20 flex items-center justify-center lg:justify-start"
            >
              <span className="text-primary">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-primary"
              >
                |
              </motion.span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-green-500 font-medium">Available for work</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToElement("contact", 80)}
                className="btn-primary group"
              >
                <span>Let&apos;s Work Together</span>
                <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resume}
                download
                className="btn-secondary group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar & Fun Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Avatar Container */}
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 p-3 bg-primary/10 rounded-full backdrop-blur-sm"
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-8 p-3 bg-purple-500/10 rounded-full backdrop-blur-sm"
              >
                <Coffee className="h-6 w-6 text-purple-500" />
              </motion.div>

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-4 p-3 bg-green-500/10 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="h-6 w-6 text-green-500" />
              </motion.div>

              {/* Avatar Image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">
                      {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
              >
                <div className="signature-text text-center">
                  {personalInfo.firstName}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full border border-border group-hover:border-primary transition-colors"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-8xl opacity-5 font-bold">
        {personalInfo.firstName[0]}
      </div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-5 font-bold">
        {personalInfo.lastName[0]}
      </div>
    </section>
  );
}