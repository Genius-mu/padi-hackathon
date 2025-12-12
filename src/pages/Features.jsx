import { motion } from "framer-motion";
import {
  Mic,
  Calendar,
  Pill,
  MessageCircle,
  Heart,
  Globe,
  Volume2,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Just Talk — No Wahala",
    desc: "Speak the way you talk every day. Padi listens with patience, even with market noise or slow speech.",
    color: "from-green-500 to-emerald-600",
    details: [
      "Understands loud background & children talking",
      "Hears you even if you speak slowly or cough",
      "Repeats gently when you say “ehn?”",
    ],
  },
  {
    icon: Pill,
    title: "Medicine Reminder Wey Dey Care",
    desc: "Morning drug, afternoon drug, night drug — Padi go remind you with love, every single day.",
    color: "from-purple-500 to-pink-600",
    details: [
      "Talk am once, e go remember forever",
      "Ask you “Mama/Papa, you don take am?”",
      "Call or text your pikin if you miss am",
    ],
  },
  {
    icon: Calendar,
    title: "Remember Everything Sharp Sharp",
    desc: "Hospital appointment, NEPA bill, church/mosque, birthday — tell Padi once, sleep with two eyes closed.",
    color: "from-orange-500 to-red-600",
    details: [
      "Set reminder in 5 seconds with voice",
      "Daily, weekly, or monthly",
      "E go shout am loud when time reach",
    ],
  },
  {
    icon: MessageCircle,
    title: "Auto Text to Your Pickin Dem",
    desc: "Padi fit send “I don take my medicine” or “I dey go market” to your children automatically.",
    color: "from-blue-500 to-cyan-600",
    details: [
      "No Android phone needed for Mama/Papa",
      "Works with normal Nokia torchlight phone",
      "Your children go get peace of mind",
    ],
  },
  {
    icon: Globe,
    title: "E Dey Speak Your Language Well Well",
    desc: "English, Yorùbá, Hausa, and Igbo — with sweet, familiar voices like your sister or brother.",
    color: "from-yellow-500 to-amber-600",
    details: [
      "Ọ̀rọ̀ Yorùbá, harshen Hausa, ásụ̀sụ́ Ìgbò",
      "Understands thick accents & pidgin",
      "Switch language anytime with voice",
    ],
  },
  {
    icon: Volume2,
    title: "Loud, Clear & Very Patient Voice",
    desc: "E dey talk loud and slow. If you no hear, e go repeat with smile — no vex.",
    color: "from-pink-500 to-rose-600",
    details: [
      "Extra loud speaker for elders",
      "You fit tell am “talk louder” or “talk slow”",
      "Works even when NEPA take light",
    ],
  },
  {
    icon: Shield,
    title: "Your Privacy Na Number One",
    desc: "No camera. No cloud wahala. Your voice no dey go anywhere.",
    color: "from-gray-600 to-slate-800",
    details: [
      "Everything stays inside the device",
      "Works offline for reminders & calls",
      "We no sell your data — tori Olorun",
    ],
  },
  {
    icon: Heart,
    title: "Made with Love for Naija",
    desc: "Built by Nigerian children who want Mama & Papa to live long, happy, and independent.",
    color: "from-green-600 to-green-800",
    details: [
      "Tested with real Mama & Baba for Lagos, Kano, Enugu",
      "Customer care wey sabi pidgin & respect",
      "Naija support 24/7 — call or WhatsApp",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Banner – Naija Energy */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-green-50 via-white to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzhr3xz9b/image/upload/v1736000000/nigeria-subtle-pattern.png')] opacity-5" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-green-700 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Padi Wey Sabi You Pass Your Pickin
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-800 max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The only voice assistant wey understand Mama when she talk pidgin,
            Papa when he shout for Hausa, and Grandma when she pray for Igbo.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-green-100 hover:-translate-y-6 transition-all duration-500"
              >
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} p-5 mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-5">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {feature.desc}
                </p>

                <ul className="space-y-4">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-4 text-lg text-gray-700"
                    >
                      <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA – Pure Naija Vibes */}
      <section className="py-32 px-6 bg-gradient-to-r from-green-600 via-yellow-500 to-green-700">
        <motion.div className="max-w-5xl mx-auto text-center text-white">
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            One Padi for House.
            <br />
            Peace of Mind for Abroad Pickin.
          </motion.h2>

          <motion.p className="text-2xl md:text-3xl mb-12 font-medium opacity-95">
            Join over 25,000 Nigerian families wey don bring Padi come house.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="px-16 py-7 text-2xl font-bold bg-white text-green-700 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Padi Now
            </motion.button>
            <motion.button
              className="px-12 py-6 text-xl hover:bg-white font-bold border-4 border-white text-white rounded-full hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Watch How It Works
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
