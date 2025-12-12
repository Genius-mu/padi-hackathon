"use client";

import { Mic, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // Fixed import

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To know current page

  // Close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Stories", path: "/stories" }, // or '/stories'
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-green-100 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Padi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/Auth"
              className="px-8 py-3 text-lg font-semibold text-green-700 hover:text-green-800"
            >
              Sign In
            </Link>
            <Link
              to="/"
              className="px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
            >
              Order Padi Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-green-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-green-700" />
            ) : (
              <Menu className="w-7 h-7 text-green-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown – FIXED */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t-2 border-green-200 shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu} // This closes the menu properly
                  className={`text-2xl font-semibold transition-colors py-3 px-4 rounded-xl ${
                    location.pathname === item.path
                      ? "text-green-600 bg-green-50"
                      : "text-gray-800 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-6 border-t-2 border-green-200 space-y-4">
                <button className="w-full text-left text-xl font-medium text-green-700 py-3">
                  Sign In
                </button>
                <Link to="/order" onClick={closeMenu}>
                  <button className="w-full py-5 text-xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-xl hover:shadow-green-500/50">
                    Order Padi Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Spacer */}
      <div className="h-24 md:h-28" />
    </>
  );
}
