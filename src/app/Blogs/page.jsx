"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiClock, FiTrendingUp, FiBookmark, FiShare2 } from "react-icons/fi";

const BlogsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Startups in 2024",
      excerpt: "How artificial intelligence is reshaping early-stage investments and what VCs need to know",
      category: "Technology",
      date: "May 15, 2024",
      readTime: "8 min read",
      image: "/about.jpg"
    },
    {
      id: 2,
      title: "Series A Crunch: Navigating the New Normal",
      excerpt: "Why the mid-stage funding gap is widening and how founders can adapt",
      category: "Finance",
      date: "April 28, 2024",
      readTime: "6 min read",
      image: "/about.jpg"
    }
  ];

  const allPosts = [
    {
      id: 3,
      title: "Building Founder-Friendly Term Sheets",
      excerpt: "Key clauses that protect both investors and entrepreneurs",
      category: "Legal",
      date: "April 10, 2024",
      readTime: "5 min read",
      image: "/about.jpg"
    },
    {
      id: 4,
      title: "The Rise of Climate Tech in Emerging Markets",
      excerpt: "Where we're seeing the most promising opportunities in 2024",
      category: "Sustainability",
      date: "March 22, 2024",
      readTime: "7 min read",
      image: "/about.jpg"
    },
    {
      id: 5,
      title: "VC Portfolio Construction in Volatile Markets",
      excerpt: "Strategies for maintaining balance when sectors shift",
      category: "Strategy",
      date: "March 15, 2024",
      readTime: "9 min read",
      image: "/about.jpg"
    },
    {
      id: 6,
      title: "Web3: Separating Signal from Noise",
      excerpt: "Which blockchain applications have real staying power",
      category: "Technology",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "/about.jpg"
    }
  ];

  const categories = [
    { name: "Technology", count: 12 },
    { name: "Finance", count: 8 },
    { name: "Legal", count: 5 },
    { name: "Strategy", count: 7 },
    { name: "Sustainability", count: 4 }
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
              Insights & Analysis
            </span>
          </h1>
          <p className="text-xl text-white/80">
            Expert perspectives on venture capital, startups, and emerging technologies
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Featured Posts
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-white/80 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock /> {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Grid + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Latest Articles
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {allPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-white/80 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <FiCalendar size={14} /> {post.date}
                      </span>
                      <div className="flex items-center gap-3">
                        <button className="text-white/60 hover:text-blue-400 transition-colors">
                          <FiBookmark />
                        </button>
                        <button className="text-white/60 hover:text-blue-400 transition-colors">
                          <FiShare2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center mt-16"
            >
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">2</button>
                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">3</button>
                <span className="px-2">...</span>
                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">8</button>
              </nav>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:w-1/3 space-y-8"
          >
            {/* Categories */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FiTrendingUp className="text-blue-400" /> Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="flex justify-between items-center py-2 hover:text-blue-400 transition-colors">
                      <span>{category.name}</span>
                      <span className="bg-white/10 px-2 py-1 rounded-full text-xs">{category.count}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Startups', 'Funding', 'AI', 'Blockchain', 'Due Diligence', 'Term Sheets', 'Exits', 'Unicorns'].map((tag, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                  >
                    #{tag}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
              <p className="text-white/80 mb-4 text-sm">
                Get the latest insights delivered to your inbox
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                />
                <button 
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogsPage;