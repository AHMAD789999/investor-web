"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { FiZap, FiDollarSign, FiGlobe,FiUpload,FiSend, FiCheck, FiMail, FiUsers } from "react-icons/fi";
import { FiShield, FiCpu } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  // Slider images (replace with your actual images)
  const slides = [
    "/h1.jpg", // Tech startup
    "/h5.webp", // Team working
    "/h2.jpg", // Office space
    "/h4.jpg", // Investment meeting
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FiZap className="text-blue-400" size={24} />,
      title: "Lightning-Fast Decisions",
      description: "We evaluate and respond to pitch decks within 72 hours - no endless waiting."
    },
    {
      icon: <FiDollarSign className="text-green-400" size={24} />,
      title: "Flexible Funding",
      description: "From $100K seed rounds to $5M Series A, we scale with your growth."
    },
    {
      icon: <FiGlobe className="text-purple-400" size={24} />,
      title: "Global Network",
      description: "Access to 200+ partners across Silicon Valley, Europe and Asia."
    },
    {
      icon: <FiUsers className="text-amber-400" size={24} />,
      title: "Founder-First",
      description: "We take board seats only when absolutely necessary."
    }
  ];

  const startups = [
    {
      name: "NeuroTech AI",
      sector: "Artificial Intelligence",
      stage: "Series B",
      logo: "/logos/neurotech.svg",
      description: "Revolutionizing brain-computer interfaces for medical applications",
      url: "#"
    },
    {
      name: "GreenCharge",
      sector: "Clean Energy",
      stage: "Series A",
      logo: "/logos/greencharge.svg",
      description: "Next-gen battery technology for sustainable energy storage",
      url: "#"
    },
    {
      name: "Finova",
      sector: "Fintech",
      stage: "Seed",
      logo: "/logos/finova.svg",
      description: "AI-powered financial planning for millennials",
      url: "#"
    },
    {
      name: "QuantumLeap",
      sector: "Quantum Computing",
      stage: "Series C",
      logo: "/logos/quantumleap.svg",
      description: "Enterprise quantum computing solutions",
      url: "#"
    }
  ];
  

  const AnimatedCounter = ({ to }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = typeof to === "string" ? parseInt(to.replace(/\D/g, "")) : to;
      if (start === end) return;

      let duration = 2000;
      let increment = end / (duration / 16);

      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.ceil(start));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(step);
    }, [to]);

    return <>{count}{typeof to === "string" && to.match(/[^0-9]/g)?.join('')}</>;
  };
   const industries = [
    {
      icon: <FaRobot className="text-blue-500 text-3xl" />,
      title: "Artificial Intelligence (AI) & Machine Learning",
      description:
        "Startups focused on developing AI algorithms, machine learning models, and applications across various sectors.",
    },
    {
      icon: <FiShield className="text-blue-500 text-3xl" />,
      title: "Cybersecurity",
      description:
        "Companies working on innovative cybersecurity solutions to protect businesses and individuals from cyber threats.",
    },
    {
      icon: <FiCpu className="text-blue-500 text-3xl" />,
      title: "Deeptech",
      description:
        "Deep tech ventures with innovations in AI, biotech, and quantum computing, reshaping industries and forging our advanced future.",
    },
     {
      icon: <FaRobot className="text-blue-500 text-3xl" />,
      title: "Artificial Intelligence (AI) & Machine Learning",
      description:
        "Startups focused on developing AI algorithms, machine learning models, and applications across various sectors.",
    },
    {
      icon: <FiShield className="text-blue-500 text-3xl" />,
      title: "Cybersecurity",
      description:
        "Companies working on innovative cybersecurity solutions to protect businesses and individuals from cyber threats.",
    },
    {
      icon: <FiCpu className="text-blue-500 text-3xl" />,
      title: "Deeptech",
      description:
        "Deep tech ventures with innovations in AI, biotech, and quantum computing, reshaping industries and forging our advanced future.",
    },
  ];
 

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 h-[80%]">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.05,
              }}
              transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, 0.97] }}
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `url(${slide})`,
                zIndex: index === currentSlide ? 1 : 0,
              }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Fueling Innovation
              </span>
              <br />
              <span className="text-white">Igniting Growth</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              We partner with visionary founders to build the next generation of
              transformative companies. From seed to scale, we're with you at every
              stage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
             <Link href='/portfolio'>
              <button className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium flex items-center gap-2 group hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                Explore Portfolio
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
             </Link>
              
                <Link href='/pitch'>
                  <button className="px-8 py-3.5 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all">
                    For Founders
                  </button>
                </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-[100px] left-0 right-0 z-10 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-blue-400 w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
 <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 font-medium">✦ ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            About Capital <br /> Oven
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-6">
            Rukam Sitara, based in New Delhi, is a venture capital firm dedicated
            to early-stage technology startups in India. <br />
            Established in 2023 by Archana Jahagirdar, we’re more than just investors.
            We’re partners, mentors, and collaborators, committed to capturing value
            in India's dynamic tech landscape.
          </p>
          <a
            href="#contact"
            className="text-white font-semibold border-b border-white inline-flex items-center gap-1 hover:text-blue-400 transition-colors"
          >
            Get in touch <span>↗</span>
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <div className="w-full h-auto rounded-md overflow-hidden">
            <Image
              src="/h1.jpg" // Replace with your actual image path
              alt="Team Discussion"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
 <hr className="mt-16 border-t-4 border-sky-400 w-[90%] mx-auto rounded-full" />
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-medium">OUR DIFFERENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Why Founders <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Choose CapitalOven</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              We're not just investors - we're your co-founders in the journey.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-xl border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl border border-white/10 p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-2">
                  <AnimatedCounter to="50+" />
                </p>
                <p className="text-white/60">Startups Funded</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                  <AnimatedCounter to="$250M+" />
                </p>
                <p className="text-white/60">Capital Deployed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2">
                  <AnimatedCounter to="12x" />
                </p>
                <p className="text-white/60">Avg. ROI</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 mb-2">
                  <AnimatedCounter to="24h" />
                </p>
                <p className="text-white/60">Response Time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 <hr className="mt-16 border-t-4 border-sky-400 w-[95%] mx-auto rounded-full" />
 <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">✦ FOCUSES</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Industries we <br /> invest in
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0b0b0b] border border-white/10 rounded-xl p-6"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     <hr className="mt-16 border-t-4 border-sky-400 w-[90%] mx-auto rounded-full relative top-[-50px]" />
     <div className="flex justify-center items-center rounded-2xl">
      <section className="w-[90%] bg-blue-400/20 py-16">
        <div className="w-[90%] mx-auto">
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-sky-400 mb-4 text-center"
          >
            Ready to Raise Your Next Round?
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white mb-12 max-w-2xl mx-auto text-center"
          >
            We're always looking to partner with ambitious founders solving real-world problems through technology.
          </motion.p>

          {/* Content Row */}
          <div className="flex justify-center items-center text-center">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📥</span>
                <h3 className="text-4xl md:text-6xl font-bold text-sky-400 mb-4 text-center">What We Look For:</h3>
              </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Left Column - Points */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2   rounded-xl p-8"
            >
              
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheck className="text-sky-400 mt-1 flex-shrink-0" />
                  <span className="text-white/90">Early-stage startups (Pre-Seed to Series A)</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <FiCheck className="text-sky-400 mt-1 flex-shrink-0" />
                  <span className="text-white/90">Strong founding teams with domain expertise</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <FiCheck className="text-sky-400 mt-1 flex-shrink-0" />
                  <span className="text-white/90">Scalable tech-driven business models</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <FiCheck className="text-sky-400 mt-1 flex-shrink-0" />
                  <span className="text-white/90">Sectors: AI, SaaS, Fintech, HealthTech, Cybersecurity, Deeptech</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Column - Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 flex flex-col justify-center h-full gap-6"
            >
             <Link href='/contact'>
              <button className="w-full lg:w-3/4 flex items-center justify-center gap-2 px-6 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors text-lg">
                <FiMail /> Contact Us
              </button>
             </Link>

              <Link href='/pitch'>
                <button className="w-full lg:w-3/4 flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-200 text-black rounded-lg transition-colors text-lg">
                  <FiUpload /> Pitch Us
                </button>
              </Link>
              
              <p className="text-gray-300 text-sm mt-4">
                We review all submissions within 72 hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Hero;