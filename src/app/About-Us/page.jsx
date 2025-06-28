"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiUsers, FiTrendingUp, FiGlobe, FiAward, FiBarChart2, FiHeart, FiTarget, FiEye, FiClock, FiLayers } from "react-icons/fi";
import Link from "next/link";
const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const stats = [
    { value: "200+", label: "Startups Funded", icon: <FiTrendingUp /> },
    { value: "$2B+", label: "Capital Deployed", icon: <FiBarChart2 /> },
    { value: "15+", label: "Years Experience", icon: <FiAward /> },
    { value: "50+", label: "Countries Reached", icon: <FiGlobe /> }
  ];

  const team = [
    { name: "Alex Chen", role: "Founder & CEO", bio: "Ex-Google Ventures, 12+ years in early-stage investing", img: "/te.webp" },
    { name: "Sarah Johnson", role: "Partner", bio: "Specializes in AI/ML startups, Stanford MBA", img: "/te.webp" },
    { name: "Raj Patel", role: "CTO", bio: "Built 3 unicorns, deep tech expert", img: "/te.webp" },
    { name: "Mia Rodriguez", role: "Head of Operations", bio: "Scaled 50+ portfolio companies", img: "/te.webp" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        
       
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ y: 50, }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Building Tomorrow's
            </span>
            <br />
            <span className="text-white">Market Leaders</span>
          </h1>
          <p className="text-xl text-white/80">
            We're more than investors - we're founders, operators, and technologists 
            committed to fueling innovation.
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-4xl mb-4 text-blue-400 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-8"
        >
          {/* Vision Card */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden group"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[url('/vision.jpg')] bg-cover bg-center"
            />
            <motion.div
              variants={{
                rest: { backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0.7)" },
                hover: { backdropFilter: "blur(4px)", backgroundColor: "rgba(0,0,0,0.85)" }
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-end p-8"
            >
              <motion.div
                variants={{
                  rest: { y: 20, opacity: 0.9 },
                  hover: { y: 0, opacity: 1 }
                }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiEye className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg">
                  To create a world where groundbreaking ideas receive the capital 
                  and support needed to solve humanity's biggest challenges.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden group"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[url('/mission.webp')] bg-cover bg-center"
            />
            <motion.div
              variants={{
                rest: { backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0.7)" },
                hover: { backdropFilter: "blur(4px)", backgroundColor: "rgba(0,0,0,0.85)" }
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-end p-8"
            >
              <motion.div
                variants={{
                  rest: { y: 20, opacity: 0.9 },
                  hover: { y: 0, opacity: 1 }
                }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiTarget className="text-3xl text-cyan-400" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg mb-2">
                  To identify, fund, and scale the most disruptive technology companies 
                  through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Unparalleled founder support</li>
                  <li>Global network access</li>
                  <li>Data-driven decision making</li>
                  <li>Patient capital for long-term growth</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* NEW: Left Content + Right Image Section */}
        <motion.div
          initial={{  }}
          animate={isInView ? { opacity: 1,  } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <FiClock className="text-2xl text-blue-400" />
              <span className="text-sm font-medium text-blue-400">OUR APPROACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Long-Term Growth <span className="text-blue-400">Partnership</span>
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Unlike traditional VC firms, we don't just write checks. We commit 
              to decade-long partnerships with our founders, providing continuous 
              support through every growth stage.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-blue-400 mt-1">
                  <FiLayers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Stage Support</h3>
                  <p className="text-white/80">
                    From seed to Series C and beyond, we scale our involvement 
                    to match your needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 mt-1">
                  <FiUsers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Founder-Centric</h3>
                  <p className="text-white/80">
                    Your success is our success. We align incentives through 
                    transparent terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{  scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
          >
            <img 
              src="/app.jpg" 
              alt="Growth partnership" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{   }}
          animate={isInView ? { opacity: 1, } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1"
          >
            <img 
              src="/founder.jpg" 
              alt="CapitalOven founders" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
          <div className="order-1 md:order-2 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Origin Story
              </span>
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Founded in 2010 during the aftermath of the financial crisis, 
              CapitalOven began with a simple thesis: the best innovations 
              emerge during challenging times.
            </p>
            <p className="text-lg text-white/80 mb-6">
              What started as two founders and a small fund in Silicon Valley 
              has grown into a global investment firm with presence across 
              3 continents.
            </p>
            <Link href='/Blogs'>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Read Full History
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Investment Philosophy */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Investment Philosophy
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Founder First",
                desc: "We back exceptional people first, ideas second. Great founders find ways to pivot.",
                icon: <FiUsers className="text-3xl" />
              },
              {
                title: "Category Creation",
                desc: "We seek startups defining new markets rather than competing in existing ones.",
                icon: <FiTrendingUp className="text-3xl" />
              },
              {
                title: "Impact at Scale",
                desc: "Our portfolio companies must demonstrate potential for global transformation.",
                icon: <FiGlobe className="text-3xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm h-full"
              >
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Meet Our Team
            </span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{  y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-white/10"
              >
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-400 mb-2">{member.role}</p>
                  <p className="text-white/80 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-28 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              Our Core Values
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Radical Transparency",
                desc: "We believe open communication builds trust with founders and LPs alike."
              },
              {
                title: "Long-Term Partnership",
                desc: "Our investments come with decade+ commitments, not just checks."
              },
              {
                title: "Intellectual Honesty",
                desc: "We challenge our own assumptions as vigorously as we challenge others'."
              },
              {
                title: "Responsible Growth",
                desc: "Scale matters, but how you scale matters more."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex gap-4"
              >
                <div className="text-blue-400 mt-1">
                  <FiHeart className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{  scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a founder seeking capital or an investor looking to 
            collaborate, we'd love to hear from you.
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

export default AboutUs;