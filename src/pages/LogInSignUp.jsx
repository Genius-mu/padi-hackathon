// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Mic,
//   Phone,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   ChevronRight,
//   Sparkles,
// } from "lucide-react";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-6 py-12">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
//           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 w-full max-w-md"
//         >
//           {/* Logo + Welcome */}
//           <div className="text-center mb-10">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className="inline-flex items-center gap-4 mb-6"
//             >
//               <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl">
//                 <Mic className="w-10 h-10 text-white" />
//               </div>
//               <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
//                 Padi
//               </h1>
//             </motion.div>

//             <h2 className="text-mt-2 text-3xl md:text-4xl font-bold text-gray-800">
//               {isLogin ? "Welcome Back!" : "Join the Family"}
//             </h2>
//             <p className="mt-3 text-xl text-gray-600">
//               {isLogin
//                 ? "Log in to manage your Padi devices"
//                 : "Create account to order for Mama & Papa"}
//             </p>
//           </div>

//           {/* Card */}
//           <motion.div
//             layout
//             className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-green-100"
//           >
//             {/* Tabs */}
//             <div className="flex mb-8 bg-gray-100 rounded-2xl p-1">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
//                   isLogin
//                     ? "bg-green-600 text-white shadow-lg"
//                     : "text-gray-600"
//                 }`}
//               >
//                 Log In
//               </button>
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
//                   !isLogin
//                     ? "bg-green-600 text-white shadow-lg"
//                     : "text-gray-600"
//                 }`}
//               >
//                 Sign Up
//               </button>
//             </div>

//             <form className="space-y-6">
//               {/* Phone Number */}
//               <div>
//                 <label className="block text-lg font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <Phone className="absolute left-4 top-5 w-6 h-6 text-green-600" />
//                   <input
//                     type="tel"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     placeholder="0803 000 5555"
//                     className="w-full pl-14 pr-6 py-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-lg font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-5 w-6 h-6 text-green-600" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     className="w-full pl-14 pr-16 py-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-5"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-6 h-6 text-gray-500" />
//                     ) : (
//                       <Eye className="w-6 h-6 text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[15px] sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-green-500/50 flex items-center justify-center gap-3"
//               >
//                 {isLogin ? "Log In Now" : "Create Account"}
//                 <ChevronRight className="w-7 h-7" />
//               </motion.button>

//               {isLogin && (
//                 <div className="text-center">
//                   <a
//                     href="#"
//                     className="text-green-600 font-medium hover:underline"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               )}
//             </form>

//             {/* Or continue with */}
//             <div className="mt-8">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="bg-white px-4 text-gray-500">Or</span>
//                 </div>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full mt-6 py-5 border-2 border-green-600 text-green-700 font-bold text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-green-50 transition"
//               >
//                 <Sparkles className="w-6 h-6" />
//                 Continue with WhatsApp
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Bottom Text */}
//           <p className="text-center mt-10 text-lg text-gray-600">
//             {isLogin ? "New here? " : "Already have an account? "}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-green-600 font-bold hover:underline"
//             >
//               {isLogin ? "Create account" : "Log in"}
//             </button>
//           </p>
//         </motion.div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 sm:px-6 py-12">
        {/* Animated Background Blobs - Responsive */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md mx-auto"
        >
          {/* Logo & Header */}
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="p-3 sm:p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl">
                <Mic className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
                Padi
              </h1>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-4">
              {isLogin ? "Welcome Back!" : "Join the Family"}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 px-4">
              {isLogin
                ? "Log in to manage your Padi devices"
                : "Create account to order for Mama & Papa"}
            </p>
          </div>

          {/* Auth Card */}
          <motion.div
            layout
            className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-green-100"
          >
            {/* Toggle Tabs */}
            <div className="flex mb-6 sm:mb-8 bg-gray-100 rounded-2xl p-1">
              {["Log In", "Sign Up"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setIsLogin(tab === "Log In")}
                  className={`flex-1 py-3 sm:py-4 px-6 rounded-xl font-bold text-[15px] sm:text-lg transition-all duration-300 ${
                    (tab === "Log In") === isLogin
                      ? "bg-green-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form className="space-y-5 sm:space-y-6">
              {/* Phone Input */}
              <div>
                <label className="block text-[15px] sm:text-lg font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0803 000 5555"
                    className="w-full pl-12 sm:pl-14 pr-4 py-4 sm:py-5 text-[14px] sm:text-lg rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-[15px] sm:text-lg font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 sm:pl-14 pr-14 py-4 sm:py-5 text-[14px] sm:text-lg rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    ) : (
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 sm:py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[15px] sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-green-500/50 flex items-center justify-center gap-3 mt-2"
              >
                {isLogin ? "Log In Now" : "Create Account"}
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.button>

              {isLogin && (
                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-green-600 text-base sm:text-lg font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </form>

            {/* WhatsApp Login */}
            <div className="mt-8">
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500 font-medium">
                    Or
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 sm:py-5 border-2 border-green-600 text-green-700 font-bold text-[14px] sm:text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-green-50 transition"
              >
                <Sparkles className="w-6 h-6" />
                Continue with WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Switch Mode Text */}
          <p className="text-center mt-8 text-base sm:text-lg text-gray-600 px-4">
            {isLogin ? "New here? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 font-bold hover:underline"
            >
              {isLogin ? "Create account" : "Log in"}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
