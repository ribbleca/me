"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Code2, 
  Users, 
  Coffee, 
  Award, 
  Calendar,
  TrendingUp
} from "lucide-react";
import { stats } from "@/data/portfolio";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const statsData = [
    {
      icon: Code2,
      value: stats.projectsCompleted,
      suffix: "+",
      label: "Projects Completed",
      description: "From startups to enterprise solutions",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Calendar,
      value: stats.yearsOfExperience,
      suffix: "+",
      label: "Years of Experience",
      description: "Building amazing digital experiences",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      icon: Users,
      value: stats.happyClients,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Coffee,
      value: stats.coffeeCups,
      suffix: "+",
      label: "Cups of Coffee",
      description: "Fuel for creative coding sessions",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      icon: TrendingUp,
      value: stats.technologiesUsed,
      suffix: "+",
      label: "Technologies",
      description: "Always learning and adapting",
      color: "text-pink-500",
      bg: "bg-pink-500/10"
    },
    {
      icon: Award,
      value: Math.floor(stats.linesOfCode / 1000),
      suffix: "K+",
      label: "Lines of Code",
      description: "Written with passion and precision",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    }
  ];

  return (
    <section className="section-padding">
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
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey as a developer
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="card p-8 text-center h-full relative overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                  >
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </motion.div>

                  {/* Counter */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl lg:text-5xl font-bold mb-2 gradient-text"
                    >
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4">Ready to Add Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These numbers represent my journey so far, but I&apos;m always excited to take on new challenges 
              and create amazing solutions together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ 
                  behavior: "smooth" 
                });
              }}
              className="btn-primary"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}