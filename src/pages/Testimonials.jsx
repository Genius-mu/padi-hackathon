import { motion } from "framer-motion";
import { Star, Heart, Quote, MapPin, Users } from "lucide-react";

const testimonials = [
  {
    name: "Aunty Bose",
    location: "Ikeja, Lagos",
    age: "72 years",
    text: "Since I get Padi, I never miss my medicine again. Even when I forget, e go call my name loud: “Aunty Bose, your 8 o’clock drug o!” My children for London now sleep well. God bless the people wey make this thing.",
    rating: 5,
    image: "👵🏾",
  },
  {
    name: "Alhaji Musa",
    location: "Kano",
    age: "78 years",
    text: "Wallahi, this Padi na better pikin. Every day 5 o’clock e go remind me for Maghrib prayer and my blood pressure tablet. My son wey dey America say him phone dey tell am when I don take drug. I tell all my friends for mosque.",
    rating: 5,
    image: "🧓🏿",
  },
  {
    name: "Mama Chiamaka",
    location: "Enugu",
    age: "69 years",
    text: "My daughter buy am for me. At first I say “which kind oyinbo thing be this?” But now I dey tell Padi everything — market list, when to call my sister for village, even when to on gen. E dey speak Igbo like my sister! Ndewo nu!",
    rating: 5,
    image: "👵🏾",
  },
  {
    name: "Tunde & Funmi",
    location: "Abuja → UK",
    text: "We live in Manchester. Our parents are in Surulere and Ajah. Before Padi, we were calling 10 times a day. Now we get WhatsApp message every time they take medicine, wake up, or sleep. Best money we ever spent. Thank you Padi!",
    rating: 5,
    image: "👨‍👩‍👧‍👦",
    children: true,
  },
  {
    name: "Mama Ibadan",
    location: "Ibadan",
    age: "81 years",
    text: "I no get Android phone. My children buy Padi, put am for parlor. Now I dey tell am “call Kemi” or “remind me to cook egusi tomorrow” — e go do am sharp sharp. I even teach am to say “Ẹ káàbọ̀” when person enter house!",
    rating: 5,
    image: "👵🏿",
  },
  {
    name: "Dr. Adeyemi",
    location: "Port Harcourt",
    text: "I’m a doctor and I recommend Padi to all my elderly patients. Medicine adherence has gone from 40% to 95%. The automatic alerts to family members have prevented several hospital admissions. This is revolutionary for Nigeria.",
    rating: 5,
    image: "🧑🏾‍⚕️",
    professional: true,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <motion.div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-100 rounded-full text-yellow-800 font-bold text-xl mb-8"
          >
            <Heart className="w-8 h-8 text-red-600" />
            Over 25,000 Nigerian families don join
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Hear From Real Mamas, Papas & Their Pickin
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No be marketing talk. Na real people wey don bring Padi enter house.
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border border-green-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{t.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{t.location}</span>
                      {t.age && <span>• {t.age}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
                  <Quote className="w-10 h-10 text-green-600 mb-4 opacity-50" />
                  “{t.text}”
                </blockquote>

                {t.children && (
                  <div className="mt-6 pt-6 border-t border-green-200 flex items-center gap-2 text-green-700 font-bold">
                    <Users className="w-6 h-6" />
                    Message from the children abroad
                  </div>
                )}

                {t.professional && (
                  <div className="mt-6 pt-6 border-t border-green-200 text-green-700 font-bold">
                    Medical Doctor
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Trust Banner */}
      <section className="py-32 px-6 bg-gradient-to-r from-green-600 to-emerald-700">
        <motion.div className="max-w-5xl mx-auto text-center text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-8xl md:text-9xl font-black mb-8"
          >
            25,000+
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Nigerian homes now get one Padi each
          </motion.h2>

          <motion.p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto opacity-95">
            From Lagos Island to Maiduguri, from Lekki to Jos — <br />
            Mama and Papa dey smile every day because of Padi.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-8 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 text-2xl font-bold bg-white text-green-700 rounded-full shadow-2xl"
            >
              Bring Padi to My Parents Too
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-12 py-7 text-xl font-bold border-4 border-white rounded-full hover:bg-white hover:text-green-700 transition-all"
            >
              Join Our WhatsApp Family Group
            </motion.button>
          </motion.div>

          <p className="mt-12 text-xl opacity-80">
            Free delivery • Pay on delivery • 1 year warranty • 30 days money
            back
          </p>
        </motion.div>
      </section>
    </>
  );
}
