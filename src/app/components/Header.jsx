"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "For Startups", href: "/startups" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-xl font-bold text-blue-700"
        >
          Capital<span className="text-orange-500">Oven</span>
        </motion.h1>

        {/* Navigation Links */}
        <nav className="space-x-4 hidden md:block">
          {navLinks.map((link, index) => (
            <motion.span
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200"
              >
                {link.name}
              </Link>
            </motion.span>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
