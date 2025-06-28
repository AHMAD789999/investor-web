"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiZap, FiDollarSign, FiBarChart2, FiUsers, FiClock, FiCheck, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
const StartupsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const investmentStages = [
    {
      title: "Pre-Seed",
      range: "$100K - $500K",
      focus: "Idea validation & team building",
      icon: <FiZap className="text-blue-400" />
    },
    {
      title: "Seed",
      range: "$500K - $2M",
      focus: "Product development & early traction",
      icon: <FiDollarSign className="text-blue-400" />
    },
    {
      title: "Series A",
      range: "$2M - $10M",
      focus: "Scaling proven business models",
      icon: <FiBarChart2 className="text-blue-400" />
    }
  ];

  const benefits = [
    "Access to $500K+ in partner credits (AWS, Google Cloud, etc.)",
    "Hands-on support from our operator network",
    "Growth marketing expertise",
    "Talent acquisition assistance",
    "Follow-on funding support",
    "Quarterly founder retreats"
  ];

  const portfolioExamples = [
    {
      name: "NeuroTech AI",
      sector: "Artificial Intelligence",
      stage: "Series A",
      logo: "/logo.webp"
    },
    {
      name: "GreenCharge",
      sector: "Clean Energy",
      stage: "Seed",
      logo: "/logo.webp"
    },
    {
      name: "ChainSecure",
      sector: "Blockchain",
      stage: "Pre-Seed",
      logo: "/logo.webp"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Fuel Your Growth
            </span>
            <br />
            <span className="text-white">With CapitalOven</span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            We back visionary founders building the next generation of category-defining companies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center gap-2 mx-auto"
          >
          <Link href='/pitch'>
            Apply for Funding </Link>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Investment Stages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              We Invest Across All Stages
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investmentStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">
                  {stage.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                <p className="text-blue-400 font-medium mb-3">{stage.range}</p>
                <p className="text-white/80">{stage.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Investment Process
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Initial Pitch</h3>
                  <p className="text-white/80">Submit your deck or executive summary</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Screening Call</h3>
                  <p className="text-white/80">30-minute call with our investment team</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Deep Dive</h3>
                  <p className="text-white/80">Product demo + team interviews</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Decision</h3>
                  <p className="text-white/80">Term sheet within 2-3 weeks</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-96 rounded-2xl overflow-hidden border border-white/10"
          >
            <img 
              src="/h1.webp" 
              alt="Investment process" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-28 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              Beyond Capital
            </span>
          </h2>
          <p className="text-xl text-center text-white/80 mb-12 max-w-3xl mx-auto">
            We provide our portfolio companies with resources far beyond just funding
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="text-blue-400 mt-1">
                  <FiCheck className="text-xl" />
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Companies We've Backed
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioExamples.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-all"
              >
                <div className="h-20 mb-6 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-full max-w-[160px]"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{company.name}</h3>
                <p className="text-blue-400 mb-2">{company.sector}</p>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm">
                  {company.stage}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We review applications on a rolling basis and typically respond within 5 business days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
  href="mailto:contact@capitaloven.com"
  className="inline-block px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all"
>
  Contact Our Team
</a>

            <Link href='/pitch'>
              <button className="px-8 py-3.5 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all">
              Pitch Your Startup
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default StartupsPage;