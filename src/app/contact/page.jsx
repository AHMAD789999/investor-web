"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub, FiInstagram, FiSend } from "react-icons/fi";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const contactMethods = [
    {
      icon: <FiMail className="text-3xl" />,
      title: "Email Us",
      details: "contact@capitaloven.com",
      action: "mailto:contact@capitaloven.com"
    },
    {
      icon: <FiPhone className="text-3xl" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <FiMapPin className="text-3xl" />,
      title: "Visit Us",
      details: "250 Tech Valley, Silicon Avenue, CA 94025",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, name: "LinkedIn", url: "https://linkedin.com/company/capitaloven" },
    { icon: <FiTwitter />, name: "Twitter", url: "https://twitter.com/capitaloven" },
    { icon: <FiGithub />, name: "GitHub", url: "https://github.com/capitaloven" },
    { icon: <FiInstagram />, name: "Instagram", url: "https://instagram.com/capitaloven" }
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
              Let's Build
            </span>
            <br />
            <span className="text-white">The Future Together</span>
          </h1>
          <p className="text-xl text-white/80">
            Whether you're a founder, investor, or potential partner, we'd love to hear from you.
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-28"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-all"
            >
              <a href={method.action} className="block">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-white/80 hover:text-white transition-colors">
                  {method.details}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form + Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-28 items-start"
        >
          {/* Contact Form */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Send Us a Message
              </span>
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@startup.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256064576!2d-73.98784492416466!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690834258475!5m2!1sen!2sus"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-28 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Connect With Us
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Follow our journey and stay updated with our latest investments and insights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all flex flex-col items-center w-32"
              >
                <div className="text-3xl mb-3 text-blue-400">
                  {social.icon}
                </div>
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              Stay Informed
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for quarterly updates on our portfolio and investment insights.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactUs;