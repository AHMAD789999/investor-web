"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About-Us" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "For Startups", href: "/Startups" },
  { name: "Technology Perks", href: "/perks" },
  { name: "Blogs", href: "/Blogs" },
    { name: "Contact", href: "/contact  " },
];

const Header = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksRef = useRef([]);
  const [linkDimensions, setLinkDimensions] = useState([]);

  // Measure link positions
  useEffect(() => {
    const updateDimensions = () => {
      setLinkDimensions(
        linksRef.current.map(link => ({
          width: link?.offsetWidth || 0,
          left: link?.offsetLeft || 0
        }))
      );
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Get current highlight position
  const getHighlightPosition = () => {
    const activeIndex = navLinks.findIndex(link => 
      hoveredLink ? link.href === hoveredLink : link.href === pathname
    );
    
    return linkDimensions[activeIndex] || { left: 0, width: 0 };
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo with glow */}
        <Link href="/" className="group relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold flex justify-center items-center text-white"
          >
             <img
  src='/log.png'
  width={60}
  height={50}
  alt='CapitalOven Image'
  className=""
/>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Capital
                </span>
                <span className="text-white">Oven</span>
          </motion.div>
          <div className="absolute inset-0 bg-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 relative">
          {/* Blue highlight indicator */}
          <motion.div
            className="absolute bottom-0 h-[100%] bg-blue-600/30 rounded-lg border border-blue-500/30 z-0"
            animate={{
              left: getHighlightPosition().left,
              width: getHighlightPosition().width,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          {navLinks.map((link, index) => (
            <div
              key={link.href}
              ref={el => (linksRef.current[index] = el)}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className="px-4 py-2 relative z-10"
            >
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}

          {/* Contact Button */}
     
                    <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="ml-2 relative group"
          >
            <Link
              href="/pitch"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm flex items-center relative overflow-hidden"
            >
              <span className="relative z-10">Pitch US</span>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 7 : 0,
              width: isMenuOpen ? 24 : 20,
            }}
            className="block h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="block h-0.5 bg-white rounded-full w-5"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -7 : 0,
              width: isMenuOpen ? 24 : 20,
            }}
            className="block h-0.5 bg-white rounded-full transition-all"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              />

              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed top-0 right-0 w-80 h-screen bg-gradient-to-b from-gray-900 to-black border-l border-white/10 z-40 pt-24 px-6 flex flex-col gap-4"
              >
                 <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold flex justify-center items-center text-white"
          >
             <img
  src='/log.png'
  width={60}
  height={50}
  alt='CapitalOven Image'
  className=""
/>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Capital
                </span>
                <span className="text-white">Oven</span>
          </motion.div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-5 py-3 rounded-lg text-lg transition-all ${
                      pathname === link.href
                        ? "bg-blue-600/20 font-bold text-white border border-blue-500/30"
                        : "text-white/80 font-bold hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/pitch"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-6 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-medium text-center"
                >
                  Pitch-Us
                </Link>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;