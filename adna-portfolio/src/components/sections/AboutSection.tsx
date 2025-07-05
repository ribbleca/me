"use client";

import { motion } from "framer-motion";
import { 
  User, 
  MapPin, 
  Calendar, 
  Heart, 
  BookOpen, 
  Coffee,
  Music,
  Camera,
  Gamepad2,
  Plane,
  Code2,
  Award
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

interface InterestIcons {
  [key: string]: React.ComponentType<{ className?: string }>;
}

export function AboutSection() {
  const interestIcons: InterestIcons = {
    "Artificial Intelligence": Code2,
    "User Experience Design": User,
    "Photography": Camera,
    "Travel": Plane,
    "Music Production": Music,
    "Gaming": Gamepad2,
    "Cooking": Coffee,
    "Sustainable Technology": BookOpen,
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Story */}
          <div className="space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">My Story</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {personalInfo.longBio}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Based in {personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Born {personalInfo.birthday}</span>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-4">
                {personalInfo.languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </div>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full capitalize">
                      {language.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Interests & Fun Facts */}
          <div className="space-y-8">
            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">What I Love</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.interests.map((interest, index) => {
                  const Icon = interestIcons[interest] || Heart;
                  return (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-2 p-3 bg-muted rounded-lg hover:bg-accent transition-colors cursor-default"
                    >
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{interest}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fun Facts</h3>
              </div>
              <div className="space-y-4">
                {personalInfo.funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-muted rounded-lg"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <p className="text-sm text-muted-foreground">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 border-primary/20"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">Currently Available</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I&apos;m open to new opportunities and exciting projects. Let&apos;s create something amazing together!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ 
                      behavior: "smooth" 
                    });
                  }}
                  className="btn-primary text-sm"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}