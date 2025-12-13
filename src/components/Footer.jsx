import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Truck,
  Heart,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Mic } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout – Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand & Love Message – Takes more space on mobile */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl">
                  <Mic className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
                </div>
                <span className="text-3xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                  Padi
                </span>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-6">
                The only voice companion wey truly understand Nigerian Mamas and
                Papas — in their language, with their kind of love.
              </p>

              <p className="text-base sm:text-lg text-gray-400 flex items-center gap-3">
                <Heart className="w-6 h-6 text-red-500 flex-shrink-0" />
                Made with love for every Mama, Papa, Alhaji & Lolo across Naija
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-green-400">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                {[
                  "Home",
                  "How It Works",
                  "Real Stories",
                  "Questions & Answers",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Home"
                          ? "/"
                          : link === "How It Works"
                          ? "/how-it-works"
                          : link === "Real Stories"
                          ? "/testimonials"
                          : "/faq"
                      }
                      className="hover:text-green-400 transition duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust & Support */}
            <div className="lg:col-span-3">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-green-400">
                We Get Your Back
              </h3>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400 flex-shrink-0" />1
                  Year Warranty
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-green-400 flex-shrink-0" />
                  Free Delivery + Setup
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-green-400 flex-shrink-0" />
                  30 Days Money Back
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0" />
                  24/7 Naija Support
                </li>
              </ul>
            </div>

            {/* Contact CTA – Full width on mobile */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-green-400">
                Talk to Us Now
              </h3>

              <a
                href="tel:+2349164880693"
                className="flex flex-col items-center gap-4 bg-green-600 hover:bg-green-500 transition-all rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-green-500/40 w-full text-left"
              >
                <Phone className="w-10 h-10 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-90 text-left sm:text-center">
                    Call or WhatsApp
                  </p>
                  <p className="text-xl sm:text-2xl text-left sm:text-center font-bold">
                    0916 488 0693
                  </p>
                </div>
              </a>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8 justify-center sm:justify-start">
                <a
                  href="#"
                  className="p-3 sm:p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="#"
                  className="p-3 sm:p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="#"
                  className="p-3 sm:p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-base sm:text-lg text-gray-400 mb-4">
              © 2025 Padi Technologies Nigeria Limited. Made in Nigeria
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-500 text-sm sm:text-base">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
