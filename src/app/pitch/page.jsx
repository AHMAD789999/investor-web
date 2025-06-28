"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiUpload,
  FiChevronDown,
  FiChevronUp,
  FiMail,
} from "react-icons/fi";

const PitchUsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does the review process take?",
      answer:
        "We aim to respond to all complete applications within 10 business days. If we're interested in moving forward, you'll typically receive a meeting request within that timeframe.",
    },
    {
      question: "What should be included in our pitch deck?",
      answer:
        "Focus on: Problem/Solution, Market Opportunity, Product Differentiation, Business Model, Traction/Metrics, Team, and Funding Ask. Keep it under 15 slides.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "We don't sign NDAs at the initial review stage. Our team reviews hundreds of pitches annually and maintains strict confidentiality without formal agreements.",
    },
    {
      question: "What's your typical check size?",
      answer:
        "We lead or co-invest rounds between $500K-$5M, with initial checks typically in the $250K-$1M range depending on stage and valuation.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16 px-4">
      {/* Form Section */}
      <motion.div
       
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-screen-lg mx-auto bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-10 md:p-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
          Submit Your Pitch
        </h2>
        <p className="text-center text-white/80 mb-8">
          We review submissions weekly and respond to all complete applications.
        </p>

        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Founder Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name*
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="stage" className="block text-sm font-medium mb-2">
              Funding Stage*
            </label>
            <select
              id="stage"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            >
              <option value="">Select stage</option>
              <option value="pre-seed">Pre-Seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
            </select>
          </div>

          <div>
            <label htmlFor="deck" className="block text-sm font-medium mb-2">
              Pitch Deck (PDF)*
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/10 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition">
              <FiUpload className="text-2xl text-blue-400 mb-2" />
              <p className="text-sm text-white/80">Click or drag to upload</p>
              <input
                id="deck"
                type="file"
                accept=".pdf"
                className="hidden"
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              What makes your team uniquely qualified?*
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition"
          >
            Submit Application
          </button>
        </form>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-screen-lg mx-auto mt-24 px-2"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleAnswer(index)}
              className="bg-white/5 border border-white/10 rounded-lg p-5 cursor-pointer hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-xl" />
                ) : (
                  <FiChevronDown className="text-xl" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                  
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-white/80 mt-4"
                    transition={{ duration: 0.2 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{  y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-24 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have More Questions?</h2>
        <p className="text-lg text-white/80 mb-6">
          Contact our investment team directly for specific inquiries.
        </p>
        <button className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition backdrop-blur-md">
          <FiMail className="inline mr-2" /> Email Our Team
        </button>
      </motion.div>
    </div>
  );
};

export default PitchUsPage;
