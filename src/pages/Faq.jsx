"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  Shield,
  Zap,
  Truck,
  Heart,
} from "lucide-react";

const faqs = [
  {
    q: "Padi dey work without internet?",
    a: "Yes o! Once you set am up the first time with small internet, after that everything — medicine reminder, prayer time, calling name — dey work OFFLINE. Even NEPA take light no problem.",
    icon: Zap,
  },
  {
    q: "My Mama no get smartphone. She fit use Padi?",
    a: "That’s why we make Padi! Mama no need any phone at all. Padi na small box wey dey parlor or bedroom. She just talk, Padi go hear and do everything.",
    icon: Phone,
  },
  {
    q: "How my children abroad go know say Mama don take her drug?",
    a: "Automatic! Once Mama say “I don take am” or Padi see say time don pass and she don answer, e go send WhatsApp or SMS give all the children wey you add. No stress.",
    icon: MessageCircle,
  },
  {
    q: "Wetin happen if light no dey?",
    a: "Padi get battery wey fit last 8–10 hours when NEPA take light. So even overnight, e go still wake Mama for 6am medicine or Fajr prayer.",
    icon: Zap,
  },
  {
    q: "Padi dey speak Pidgin and village language?",
    a: "Yes! English, Yorùbá, Hausa, Igbo, and thick Pidgin. E fit even say “Mama Bose, é káàárọ̀” or “Alhaji, lokacin maganin ku ya yi” — exactly like person.",
    icon: MessageCircle,
  },
  {
    q: "If Mama no hear well, Padi voice loud reach?",
    a: "Very very loud! Louder than normal phone. You fit even tell am “Padi, talk louder” or “talk slow small” — e go obey instantly.",
    icon: Phone,
  },
  {
    q: "My Papa no sabi any tech. Who go set am up?",
    a: "We go do everything for you. Our boy go come your house anywhere in Nigeria, plug am, set all the medicine times, add your numbers, teach Mama how to talk to am — all FREE.",
    icon: Truck,
  },
  {
    q: "How much be Padi?",
    a: "One-time payment only — ₦74,900 (complete package with free delivery & installation). No monthly charge, no subscription wahala.",
    icon: Heart,
  },
  {
    q: "Wetin if e spoil or Mama no like am?",
    a: "30 days money-back guarantee + 1 full year warranty. If anything happen, we go come replace am free. We never leave you.",
    icon: Shield,
  },
  {
    q: "I fit pay when e reach my house?",
    a: "Yes! Pay on delivery. You go test am, see say e dey work, greet Mama, then pay the delivery man. No risk.",
    icon: Truck,
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Any Question Wey Dey Your Mind?
          </motion.h1>

          <motion.p className="text-xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium">
            We don hear all the questions from thousands of children wey wan buy
            for their parents. See the answers here — clear clear.
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 overflow-hidden"
            >
              <details className="group bg-white border-2 border-green-200 rounded-3xl shadow-lg hover:shadow-xl transition-all">
                <summary className="flex items-center justify-between px-8 py-8 cursor-pointer list-none">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                      <faq.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-[18px] md:text-3xl font-bold text-gray-800 pr-10">
                      {faq.q}
                    </h3>
                  </div>

                  <ChevronDown className="sm:w-8 sm:h-8 text-green-600 group-open:rotate-180 transition-transform duration-300" />
                </summary>

                <div className="px-8 pb-8 pt-4 border-t-2 border-green-100">
                  <p className="text-[15px] md:text-2xl text-gray-700 leading-relaxed pl-20">
                    {faq.a}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Big CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-green-600 to-emerald-700">
        <motion.div className="max-w-5xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-7xl font-black mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            You Still Get Question? Call Us Now — We Dey Answer 24/7
          </motion.h2>

          <motion.div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-3xl md:text-4xl font-bold mb-12">
            <a
              href="tel:+2348020666256"
              target="_blank"
              className="flex w-full sm:w-fit items-center gap-4 bg-white text-green-700 px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition"
            >
              <Phone className="w-9 h-9 sm:w-12 sm:h-12" />
              08020666256
            </a>
            <a
              href="https://wa.me/2348020666256"
              target="_blank"
              className="flex text-[17px] w-full sm:w-fit sm:text-3xl items-center gap-4 border-4 border-white px-12 py-8 rounded-full hover:bg-white hover:text-green-700 transition"
            >
              <MessageCircle className="w-9 h-9 sm:w-12 sm:h-12" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <p className="text-[18px] sm:text-2xl opacity-90">
            Talk to real person wey sabi pidgin, Yoruba, Hausa or Igbo.
            We no dey use robot customer care
          </p>
        </motion.div>
      </section>
    </>
  );
}
