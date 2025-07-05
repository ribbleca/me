"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Monitor, 
  Github, 
  Linkedin, 
  Mail
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "@/data/portfolio";
import { cn, scrollToElement } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Tools", href: "#tools" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const elementId = href.replace("#", "");
    scrollToElement(elementId, 80);
  };

  const toggleTheme = () => {
    const themes: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "system":
        return <Monitor className="h-5 w-5" />;
      default:
        return <Sun className="h-5 w-5" />;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => handleNavClick("#home")}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              {personalInfo.firstName}
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
            >
              {getThemeIcon()}
            </motion.button>

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200 dark:border-gray-800">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Theme & Social */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                    title={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
                  >
                    {getThemeIcon()}
                  </motion.button>

                  <div className="flex space-x-2">
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      title="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>

                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>

                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      href={`mailto:${personalInfo.email}`}
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      title="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}