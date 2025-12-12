"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Volume2,
  PhoneOutgoing,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Just Talk to Padi Like Person",
    desc: "No button, no screen to press. Just say anything you want am to do.",
    example: "“Padi, remind me to take my blood pressure drug by 8 o’clock”",
    voice: "Padi: Okay Mama, I go remind you by 8 o’clock. No worry.",
    color: "from-green-500 to-emerald-600",
  },
  {
    number: "02",
    title: "Padi Go Remind You With Love",
    desc: "When time reach, Padi go call your name loud and clear, even if you dey kitchen.",
    example: "8:00 PM → “Mama Bose! Time don reach for your medicine o!”",
    voice: "You: “I don take am.” → Padi: “Good! God bless you Mama.”",
    color: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    title: "Padi Fit Tell Your Pickin Automatically",
    desc: "If you no answer or you never take drug, Padi go send message give your children.",
    example: "WhatsApp to Tunde → “Mama Bose don take her 8pm medicine”",
    voice: "Or if missed → “Mama never answer since 8pm. Please call her.”",
    color: "from-blue-500 to-cyan-600",
  },
  {
    number: "04",
    title: "Set Anything With Your Mouth",
    desc: "Hospital date, church offering, NEPA bill, birthday — just talk am once.",
    example: "“Padi, remind me to pay light bill on 25th every month”",
    voice: "Padi: “I don save am. Every 25th I go remind you.”",
    color: "from-orange-500 to-red-600",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 rounded-full text-green-800 font-bold mb-8"
          >
            <Sparkles className="w-6 h-6" />E dey very simple — even Mama fit
            use am
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            How Padi Works Inside Your House
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No complicated phone. No small button. Just talk like you dey talk
            to your pikin.
          </motion.p>
        </motion.div>
      </section>

      {/* Step-by-step Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center mb-20 last:mb-0`}
            >
              {/* Left/Right Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl md:text-8xl font-black text-gray-100">
                    {step.number}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    {step.title}
                  </h2>
                </div>

                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  {step.desc}
                </p>

                {/* Example Speech Bubble */}
                <div className="space-y-6">
                  <div className="bg-gray-100 rounded-3xl p-6 max-w-lg">
                    <div className="flex items-start gap-4">
                      <Mic className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-medium text-gray-700">
                          You talk:
                        </p>
                        <p className="text-xl font-bold text-gray-900 mt-2">
                          {step.example}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 max-w-lg ml-auto">
                    <div className="flex items-start gap-4 text-white">
                      <Volume2 className="w-8 h-8 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-medium opacity-90">
                          Padi go answer:
                        </p>
                        <p className="text-xl font-bold mt-2">{step.voice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Icon */}
              <div className="flex-1 flex justify-center">
                <div
                  className={`w-80 h-80 rounded-3xl bg-gradient-to-br ${step.color} p-10 shadow-2xl flex items-center justify-center`}
                >
                  {i === 0 && <Mic className="w-32 h-32 text-white" />}
                  {i === 1 && <Volume2 className="w-32 h-32 text-white" />}
                  {i === 2 && (
                    <MessageSquare className="w-32 h-32 text-white" />
                  )}
                  {i === 3 && (
                    <PhoneOutgoing className="w-32 h-32 text-white" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Reassurance + CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-green-600 to-emerald-700">
        <motion.div
          className="max-w-5xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-10">
            That’s All.
            <br />
            Nothing More, Nothing Less.
          </h2>

          <p className="text-2xl md:text-3xl mb-12 opacity-95 max-w-4xl mx-auto">
            No internet all the time. No small remote. No confusion.
            <br />
            Just one Padi wey dey your house 24/7 like housegirl wey no dey vex.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 text-2xl font-bold bg-white text-green-700 rounded-full shadow-2xl hover:shadow-green-300"
            >
              Order Padi for My Parents
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-12 py-6 text-xl font-bold flex items-center gap-4 border-4 border-white rounded-full hover:bg-white hover:text-green-700 transition-all"
            >
              Watch Real Video Demo
              <ArrowRight className="w-8 h-8" />
            </motion.button>
          </div>

          <p className="mt-12 text-xl opacity-80">
            Delivery anywhere in Nigeria • 1-year warranty • 30-day money-back
          </p>
        </motion.div>
      </section>
    </>
  );
}
