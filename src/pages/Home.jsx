import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Mic,
  Calendar,
  MessageCircle,
  Heart,
  Globe,
  Sparkles,
  ChevronDown,
  Phone,
} from "lucide-react";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-6"
          style={{ opacity }}
        >
          <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
            <div className="absolute top-20 left-10 w-72 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-32 right-20 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000" />
          </motion.div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                  <Mic className="w-16 h-16 text-white" />
                </div>
              </div>

              <motion.h1
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Padi
              </motion.h1>

              <motion.p
                className="text-2xl md:text-4xl text-gray-700 mb-8 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Your Caring Voice Companion for a Simpler Life
              </motion.p>

              <motion.p
                className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                A multilingual voice assistant designed with love for seniors.
                Set reminders, schedule medicines, send messages — just by
                talking.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Get Early Access
                </button>
                <button className="px-10 py-5 border-2 border-purple-600 cursor-pointer text-purple-600 text-lg font-semibold rounded-full ease-in-out transition-all duration-100">
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-8 h-8 text-purple-600" />
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Made Simple. Made for You.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Padi understands your voice, your language, and your needs — no
                complicated buttons or screens.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Mic,
                  title: "Just Talk",
                  desc: "Speak naturally in English, Hindi, Tamil, Bengali & more",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Calendar,
                  title: "Never Forget",
                  desc: "Reminders for medicines, birthdays, bills, or prayers",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: MessageCircle,
                  title: "Stay Connected",
                  desc: "Schedule messages to family: “I took my medicine”",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Heart,
                  title: "Caring & Patient",
                  desc: "Speaks slowly, repeats gently, never gets tired",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: Globe,
                  title: "Speaks Your Language",
                  desc: "Supports 10+ Indian languages with warm, familiar voices",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Sparkles,
                  title: "Always There",
                  desc: "Works offline for basic tasks, no internet needed always",
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-5 mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Bring Joy Back to Everyday Life
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              Join thousands of families who trust Padi to care for their loved
              ones.
            </p>
            <motion.button
              className="px-12 py-6 bg-white text-purple-600 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Padi for Your Parents
            </motion.button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                <Mic className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Padi</h3>
            <p className="text-gray-400 text-lg mb-8">
              Made with ❤️ for every Amma, HomePagea, Nani, Dada across India
            </p>
            <p className="text-gray-500">
              © 2025 Padi Technologies Pvt Ltd. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
