"use client";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
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
              Privacy Policy
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

      {/* Main Content */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className=" px-6 max-w-4xl mx-auto prose prose-invert prose-lg"
      >
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">1. Introduction</h2>
          <p className="mb-8">
            CapitalOven ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website capitaloven.com (the "Site").
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number when you submit forms</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on Site</li>
            <li><strong>Cookies:</strong> We use essential and analytics cookies (see Section 5)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li>Provide and maintain our Site</li>
            <li>Respond to inquiries and communicate with you</li>
            <li>Analyze Site usage to improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">4. Data Sharing & Disclosure</h2>
          <p className="mb-8">
            We do not sell your personal data. We may share information with:
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Service providers who assist with Site operations</li>
              <li>Legal authorities when required by law</li>
              <li>Successors in the event of a merger or acquisition</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">5. Cookies & Tracking</h2>
          <p className="mb-8">
            We use:
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for Site functionality</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand usage patterns</li>
            </ul>
            You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">6. Data Security</h2>
          <p className="mb-8">
            We implement appropriate technical and organizational measures to protect your personal data. However, 
            no internet transmission is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">7. Your Rights</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your personal data</li>
            <li>Object to or restrict processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">8. International Transfers</h2>
          <p className="mb-8">
            Your information may be transferred to and maintained on computers located outside of your state, 
            province, country or other governmental jurisdiction where data protection laws may differ.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">9. Children's Privacy</h2>
          <p className="mb-8">
            Our Site is not intended for children under 16. We do not knowingly collect personal information 
            from children under 16 without parental consent.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">10. Changes to This Policy</h2>
          <p className="mb-8">
            We may update this Privacy Policy periodically. We will notify you of changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">11. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, please contact us at:
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p>CapitalOven Privacy Team</p>
              <p>privacy@capitaloven.com</p>
              <p>250 Tech Valley, Silicon Avenue, CA 94025</p>
            </div>
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicyPage;