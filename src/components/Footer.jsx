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
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Love Message */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                Padi
              </span>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-8">
              The only voice companion wey truly understand Nigerian Mamas and
              Papas — in their language, with their kind of love.
            </p>

            <p className="text-lg text-gray-400 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
              Made with love for every Mama, Papa, Alhaji & Lolo across Naija
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Quick Links
            </h3>
            <ul className="space-y-4 text-lg">
              <li>
                <a href="/" className="hover:text-green-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="hover:text-green-400 transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="hover:text-green-400 transition"
                >
                  Real Stories
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-green-400 transition">
                  Questions & Answers
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Trust */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              We Get Your Back
            </h3>
            <ul className="space-y-6 space-y-5 text-lg">
              <li className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />1 Year Warranty
              </li>
              <li className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-green-400" />
                Free Delivery + Setup
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-400" />
                30 Days Money Back
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-green-400" />
                24/7 Naija Support
              </li>
            </ul>
          </div>

          {/* Contact & Call to Action */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Talk to Us Now
            </h3>

            <a
              href="tel:+2349160005555"
              className="flex items-center gap-4 bg-green-600 hover:bg-green-500 transition-all rounded-2xl p-6 mb-4 shadow-xl hover:shadow-green-500/30"
            >
              <Phone className="w-10 h-10" />
              <div>
                <p className="text-sm opacity-90">Call or WhatsApp</p>
                <p className="text-2xl font-bold">0916 000 5555</p>
              </div>
            </a>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
              >
                <Youtube className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-gray-800 text-center">
          <p className="text-lg text-gray-400 mb-4">
            © 2025 Padi Technologies Nigeria Limited. Made in Nigeria
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
