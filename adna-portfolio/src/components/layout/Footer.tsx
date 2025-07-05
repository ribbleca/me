"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  Coffee,
  Code2,
  ArrowUp
} from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";
import { scrollToTop } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {personalInfo.tagline}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {personalInfo.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                      className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const elementId = link.href.replace("#", "");
                        document.getElementById(elementId)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors animated-underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Some Numbers</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {stats.projectsCompleted}+ Projects
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {stats.coffeeCups}+ Cups of Coffee
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {stats.happyClients}+ Happy Clients
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mb-4 sm:mb-0"
            >
              © {currentYear} {personalInfo.name}. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              using Next.js &amp; Tailwind CSS
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}