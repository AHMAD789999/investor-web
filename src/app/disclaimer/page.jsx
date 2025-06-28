"use client";
import { motion } from "framer-motion";

const DisclaimerPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[url('/privacy-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Disclaimer
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-white/80"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </motion.p>
        </div>
      </motion.section>

      {/* Disclaimer Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className=" px-6 max-w-4xl mx-auto prose prose-invert prose-lg"
      >
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">1. General Information</h2>
          <p className="mb-8">
            The information provided by CapitalOven ("we," "us," or "our") on capitaloven.com (the "Site") is for general informational
            purposes only. All information on the Site is provided in good faith, however we make no representation or warranty
            of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness
            of any information on the Site.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">2. External Links Disclaimer</h2>
          <p className="mb-8">
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating
            from third parties or links to websites and features in banners or other advertising. Such external links are not
            investigated, monitored, or checked for accuracy, adequacy, validity, reliability, or completeness by us.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">3. Professional Disclaimer</h2>
          <p className="mb-8">
            The Site cannot and does not contain legal, financial, or investment advice. The information is provided for general
            informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking
            any actions based upon such information, we encourage you to consult with appropriate professionals.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">4. No Responsibility Disclaimer</h2>
          <p className="mb-8">
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the
            use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any
            information on the site is solely at your own risk.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">5. "Use at Your Own Risk" Disclaimer</h2>
          <p className="mb-8">
            All information in this website is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the
            results obtained from the use of this information, and without warranty of any kind, express or implied.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">6. Contact Us</h2>
          <p>
            If you have any questions regarding this Disclaimer, please contact us at:
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p>CapitalOven Legal Team</p>
              <p>legal@capitaloven.com</p>
              <p>250 Tech Valley, Silicon Avenue, CA 94025</p>
            </div>
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default DisclaimerPage;
