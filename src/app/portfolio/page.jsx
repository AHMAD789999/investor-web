"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiFilter, FiExternalLink, FiBarChart2,FiArrowRight, FiDollarSign, FiUsers, FiMapPin } from "react-icons/fi";
 import Link from "next/link";
const PortfolioPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");

  // Portfolio data
  const portfolioCompanies = [
    {
      id: 1,
      name: "NeuroTech AI",
      description: "AI-powered neural interfaces for medical diagnostics",
      sector: "Artificial Intelligence",
      stage: "Series B",
      year: 2023,
      logo: "/logo.webp",
      website: "https://neurotech.ai",
      stats: {
        valuation: "$850M",
        growth: "320% YoY",
        employees: "145"
      }
    },
    {
      id: 2,
      name: "GreenCharge",
      description: "Next-gen solid-state batteries for EVs",
      sector: "Clean Energy",
      stage: "Series A",
      year: 2022,
      logo: "/logo.webp",
      website: "https://greencharge.com",
      stats: {
        valuation: "$420M",
        growth: "180% YoY",
        employees: "89"
      }
    },
    {
      id: 3,
      name: "ChainSecure",
      description: "Enterprise-grade blockchain security solutions",
      sector: "Web3",
      stage: "Seed",
      year: 2023,
      logo: "/logo.webp",
      website: "https://chainsecure.io",
      stats: {
        valuation: "$150M",
        growth: "95% YoY",
        employees: "42"
      }
    },
    {
      id: 4,
      name: "QuantumLeap",
      description: "Quantum computing SaaS platform",
      sector: "Deep Tech",
      stage: "Series A",
      year: 2021,
      logo: "/logo.webp",
      website: "https://quantumleap.tech",
      stats: {
        valuation: "$600M",
        growth: "210% YoY",
        employees: "112"
      }
    },
    {
      id: 5,
      name: "BioGenX",
      description: "CRISPR-based gene editing therapies",
      sector: "Biotech",
      stage: "Series C",
      year: 2020,
      logo: "/logo.webp",
      website: "https://biogenx.com",
      stats: {
        valuation: "$1.2B",
        growth: "400% YoY",
        employees: "230"
      }
    },
    {
      id: 6,
      name: "UrbanFarm",
      description: "Vertical farming automation systems",
      sector: "AgTech",
      stage: "Series B",
      year: 2022,
      logo: "/logo.webp",
      website: "https://urbanfarm.io",
      stats: {
        valuation: "$380M",
        growth: "150% YoY",
        employees: "76"
      }
    }
  ];

  // Get unique sectors for filters
  const sectors = ["All", ...new Set(portfolioCompanies.map(company => company.sector))];

  // Filter companies based on active filter
  const filteredCompanies = activeFilter === "All" 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.sector === activeFilter);

  // Portfolio stats
  const portfolioStats = [
    { value: "36", label: "Companies", icon: <FiUsers className="text-blue-400" /> },
    { value: "$2.8B", label: "Total Value", icon: <FiDollarSign className="text-blue-400" /> },
    { value: "18", label: "Countries", icon: <FiMapPin className="text-blue-400" /> },
    { value: "7", label: "Unicorns", icon: <FiBarChart2 className="text-blue-400" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] flex items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center"
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
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-white/80">
            Discover the visionary companies we're proud to support
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="flex items-center gap-2 text-blue-400">
              <FiFilter />
              <span className="font-medium">Filter:</span>
            </div>
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === sector
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="h-16 w-16 bg-white/5 rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <a 
                    href={company.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink className="text-xl" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                  {company.name}
                </h3>
                <p className="text-white/80 mb-4">{company.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                    {company.sector}
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    {company.stage}
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    {company.year}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-blue-400 font-medium">{company.stats.valuation}</div>
                    <div className="text-white/60 text-xs">Valuation</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-blue-400 font-medium">{company.stats.growth}</div>
                    <div className="text-white/60 text-xs">Growth</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-blue-400 font-medium">{company.stats.employees}</div>
                    <div className="text-white/60 text-xs">Team</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-28"
        >
          <h2 id="success" className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Success Stories
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="md:h-64 overflow-hidden">
                <img 
                  src="/founder.jpg" 
                  alt="Success story" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                  Case Study
                </span>
                <h3 className="text-2xl font-bold mb-3">From Seed to $1B: NeuroTech AI's Journey</h3>
                <p className="text-white/80 mb-4">
                  How our early belief in neural interfaces helped build a category-defining company
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  Read Case Study <FiArrowRight />
                </button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="md:h-64 overflow-hidden">
                <img 
                  src="/founder.jpg" 
                  alt="Success story" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                  Founder Interview
                </span>
                <h3 className="text-2xl font-bold mb-3">GreenCharge's Road to Series B</h3>
                <p className="text-white/80 mb-4">
                  The founder's perspective on scaling battery tech with VC support
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  Watch Interview <FiArrowRight />
                </button>
              </div>
            </motion.div>
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
            Want to Join Our Portfolio?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional founders building transformative companies
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

export default PortfolioPage;