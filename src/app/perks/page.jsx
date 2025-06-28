"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCloud, FiServer, FiCode, FiDatabase, FiShield, FiDollarSign, FiZap, FiBarChart2 } from "react-icons/fi";
import Link from "next/link";
const TechnologyPerksPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const perks = [
    {
      title: "Cloud Credits",
      value: "$500K+",
      description: "Access to AWS, Google Cloud, and Azure credits to scale your infrastructure",
      icon: <FiCloud className="text-blue-400" />
    },
    {
      title: "Dev Tools",
      value: "Full Suite",
      description: "Free licenses for GitHub Enterprise, Figma, JetBrains, and more",
      icon: <FiCode className="text-blue-400" />
    },
    {
      title: "AI/ML Resources",
      value: "Premium Access",
      description: "OpenAI credits, Anthropic discounts, and custom GPU allocations",
      icon: <FiDatabase className="text-blue-400" />
    },
    {
      title: "Security Stack",
      value: "Enterprise Grade",
      description: "1Password, Cloudflare, and Snyk security packages included",
      icon: <FiShield className="text-blue-400" />
    },
    {
      title: "Analytics",
      value: "Growth Suite",
      description: "Mixpanel, Amplitude, and Segment plans to track your metrics",
      icon: <FiBarChart2 className="text-blue-400" />
    },
    {
      title: "Financial Benefits",
      value: "Exclusive Deals",
      description: "Brex corporate cards, Ramp discounts, and Stripe fee reductions",
      icon: <FiDollarSign className="text-blue-400" />
    }
  ];

  const partnerSpotlight = [
    {
      name: "ocentra",
      benefit: "$100K in credits",
      logo: "/logo.webp"
    },
    {
      name: "byteforceitsolutions",
      benefit: "Enterprise Plan",
      logo: "/logo.webp"
    },
    {
      name: "ocentratechnologies",
      benefit: "$50K in credits",
      logo: "/logo.webp"
    },
    {
      name: "t.g.s services",
      benefit: "Startup Plan",
      logo: "/logo.webp"
    }
  ];

  return (
    <div className=" overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
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
              Technology Perks
            </span>
          </h1>
          <p className="text-xl text-white/80">
            $1M+ in exclusive benefits to accelerate your technical infrastructure
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-28 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Supercharge Your Stack
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            As part of our portfolio, you'll gain immediate access to premium technology resources 
            that would normally cost startups hundreds of thousands in annual expenses.
          </p>
         
        </motion.div>

        {/* All Perks Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-28"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              Comprehensive Benefits Package
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">
                  {perk.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-2xl font-bold">{perk.title}</h4>
                  <span className="text-blue-400">{perk.value}</span>
                </div>
                <p className="text-white/80">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Spotlight */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Partner Spotlight
            </span>
          </h2>
          
          <div className="bg-white/5 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerSpotlight.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all"
                >
                  <div className="h-20 mb-4 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-[160px]"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-1">{partner.name}</h4>
                  <p className="text-blue-400 text-sm">{partner.benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Activation Process */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Simple Activation
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Get Funded</h3>
                  <p className="text-white/80">Join our portfolio through any investment round</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Onboarding Call</h3>
                  <p className="text-white/80">30-minute session with our Platform team</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Instant Access</h3>
                  <p className="text-white/80">Receive all credentials within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-96 rounded-2xl overflow-hidden border border-white/10"
          >
            <img 
              src="/h2.webp" 
              alt="Technology dashboard" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="text-sm">Example partner dashboard available to all portfolio companies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Tech Stack?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            These perks are exclusively available to CapitalOven portfolio companies
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

export default TechnologyPerksPage;