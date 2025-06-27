"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Investments",
      links: [
        { name: "Portfolio", href: "/portfolio" },
        { name: "Investment Focus", href: "/focus" },
        { name: "Success Stories", href: "/success" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Startup Toolkit", href: "/toolkit" },
        { name: "Events", href: "/events" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com/company/capitaloven" },
    { icon: <FaTwitter />, href: "https://twitter.com/capitaloven" },
    { icon: <FaGithub />, href: "https://github.com/capitaloven" },
    { icon: <FaRegEnvelope />, href: "mailto:contact@capitaloven.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10 mt-20"
    >
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <motion.h2
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold text-white"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Capital
                </span>
                <span className="text-white">Oven</span>
              </motion.h2>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Fueling innovation and igniting growth for the next generation of
              startups.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: "#3B82F6" }}
                  className="text-white/60 hover:text-blue-400 text-xl transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white font-medium mb-4 text-lg">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-blue-400 text-sm transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CapitalOven. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;