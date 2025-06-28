"use client";
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
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
              Terms of Service
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-white/80"
          >
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className=" px-6 max-w-4xl mx-auto prose prose-invert prose-lg"
      >
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">1. Acceptance of Terms</h2>
          <p className="mb-8">
            By accessing or using capitaloven.com ("Site"), you agree to be bound by these Terms of Service and our Privacy Policy.
            If you do not agree, please do not use the Site.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">2. Use of the Site</h2>
          <p className="mb-8">
            You agree to use the Site only for lawful purposes and in a manner that does not violate the rights of others.
            You must not use the Site to distribute spam, malware, or engage in illegal activities.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">3. Intellectual Property</h2>
          <p className="mb-8">
            All content on the Site, including text, graphics, logos, and software, is the property of CapitalOven and protected by
            copyright, trademark, and other laws. You may not reproduce or distribute content without our written permission.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">4. User Accounts</h2>
          <p className="mb-8">
            If you create an account on the Site, you are responsible for maintaining the confidentiality of your account and
            password and for all activities under your account. Notify us immediately of any unauthorized use.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">5. Limitation of Liability</h2>
          <p className="mb-8">
            To the fullest extent permitted by law, CapitalOven shall not be liable for any indirect, incidental, or consequential
            damages resulting from your use or inability to use the Site.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">6. Disclaimer</h2>
          <p className="mb-8">
            The Site is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the
            Site will always be secure, error-free, or available.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">7. Termination</h2>
          <p className="mb-8">
            We may suspend or terminate your access to the Site at any time without notice, for conduct that we believe violates
            these Terms or is harmful to other users or us.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">8. Changes to the Terms</h2>
          <p className="mb-8">
            We may update these Terms at any time. Continued use of the Site after changes become effective means you agree to
            the revised Terms. We will post the most current version on this page.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">9. Governing Law</h2>
          <p className="mb-8">
            These Terms shall be governed by and construed in accordance with the laws of California, without regard to its conflict
            of laws principles.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfServicePage;
