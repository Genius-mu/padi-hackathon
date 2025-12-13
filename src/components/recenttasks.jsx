// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   ArrowDownRight,
//   Clock,
//   CheckCircle,
//   AlertCircle,
//   Wallet,
// } from "lucide-react";
// import { format } from "date-fns";

// // Sample recent tasks/transactions – replace with real data from your API later
// const recentTasks = [
//   {
//     id: 1,
//     type: "TRANSFER",
//     amount: 5000,
//     currency: "NGN",
//     recipient: "Tunde Bakare",
//     status: "SUCCESS",
//     date: new Date("2025-12-12T14:30:00"),
//     desc: "Send money give my guy for beer",
//   },
//   {
//     id: 2,
//     type: "AIRTIME",
//     amount: 2000,
//     currency: "NGN",
//     recipient: "Self (08012345678)",
//     status: "SUCCESS",
//     date: new Date("2025-12-11T09:15:00"),
//     desc: "Buy airtime sharp sharp",
//   },
//   {
//     id: 3,
//     type: "BILL_PAY",
//     amount: 15000,
//     currency: "NGN",
//     recipient: "PHCN (Electricity)",
//     status: "PENDING",
//     date: new Date("2025-12-10T18:45:00"),
//     desc: "Pay NEPA bill before dem cut light",
//   },
//   {
//     id: 4,
//     type: "TRANSFER",
//     amount: 10000,
//     currency: "NGN",
//     recipient: "Mama Basira",
//     status: "FAILED",
//     date: new Date("2025-12-09T11:20:00"),
//     desc: "Send money for market",
//   },
//   {
//     id: 5,
//     type: "AIRTIME",
//     amount: 500,
//     currency: "NGN",
//     recipient: "Nkechi (08098765432)",
//     status: "SUCCESS",
//     date: new Date("2025-12-08T22:10:00"),
//     desc: "Small credit for night call",
//   },
// ];

// const getStatusConfig = (status) => {
//   switch (status) {
//     case "SUCCESS":
//       return {
//         icon: CheckCircle,
//         color: "from-green-500 to-emerald-600",
//         text: "E don land!",
//         bg: "bg-green-100",
//       };
//     case "PENDING":
//       return {
//         icon: Clock,
//         color: "from-yellow-500 to-amber-600",
//         text: "E dey come...",
//         bg: "bg-yellow-100",
//       };
//     case "FAILED":
//       return {
//         icon: AlertCircle,
//         color: "from-red-500 to-rose-600",
//         text: "E no work o",
//         bg: "bg-red-100",
//       };
//     default:
//       return {
//         icon: Clock,
//         color: "from-gray-500 to-slate-600",
//         text: "E dey process",
//         bg: "bg-gray-100",
//       };
//   }
// };

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
// };

// export default function RecentTasksPage() {
//   return (
//     <>
//       {/* Hero Banner – Naija Energy */}
//       <section className="relative py-24 px-6 bg-gradient-to-b from-green-50 via-white to-yellow-50 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzhr3xz9b/image/upload/v1736000000/nigeria-subtle-pattern.png')] opacity-5" />

//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <motion.h1
//             className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-green-700 mb-8"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             See Wetin You Don Do Recently
//           </motion.h1>
//           <motion.p
//             className="text-2xl md:text-3xl text-gray-800 max-w-4xl mx-auto font-medium"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             All your transfers, airtime, bill payments — everything dey here
//             sharp sharp.
//           </motion.p>
//         </div>
//       </section>

//       {/* Recent Tasks List – Card Grid Style */}
//       <section className="py-20 px-6">
//         <div className="max-w-5xl mx-auto">
//           <div className="space-y-8">
//             {recentTasks.map((task, i) => {
//               const statusConfig = getStatusConfig(task.status);
//               const StatusIcon = statusConfig.icon;
//               const isOutgoing =
//                 task.type !== "AIRTIME" || task.recipient !== "Self";

//               return (
//                 <motion.div
//                   key={task.id}
//                   variants={fadeInUp}
//                   initial="initial"
//                   whileInView="whileInView"
//                   viewport={{ once: true }}
//                   className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-green-100 hover:-translate-y-4 transition-all duration-500"
//                 >
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-6">
//                       <div
//                         className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${statusConfig.color} p-4 shadow-2xl group-hover:scale-110 transition-all duration-500`}
//                       >
//                         <StatusIcon className="w-full h-full text-white" />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-800">
//                           {task.type === "TRANSFER" && "Money Transfer"}
//                           {task.type === "AIRTIME" && "Airtime Top-up"}
//                           {task.type === "BILL_PAY" && "Bill Payment"}
//                         </h3>
//                         <p className="text-lg text-gray-600 mt-1">
//                           To:{" "}
//                           <span className="font-semibold">
//                             {task.recipient}
//                           </span>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="text-right">
//                       <div className="flex items-center gap-3">
//                         {isOutgoing ? (
//                           <ArrowUpRight className="w-8 h-8 text-red-600" />
//                         ) : (
//                           <ArrowDownRight className="w-8 h-8 text-green-600" />
//                         )}
//                         <p
//                           className={`text-3xl font-black ${
//                             isOutgoing ? "text-red-600" : "text-green-600"
//                           }`}
//                         >
//                           -₦{task.amount.toLocaleString()}
//                         </p>
//                       </div>
//                       <p
//                         className={`text-lg font-medium mt-2 px-4 py-1 rounded-full ${statusConfig.bg}`}
//                       >
//                         {statusConfig.text}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between text-gray-600">
//                     <p className="text-lg">{task.desc || "No description"}</p>
//                     <p className="text-lg font-medium">
//                       {format(task.date, "dd MMM yyyy • h:mm a")}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Empty state fallback (if no tasks) */}
//           {recentTasks.length === 0 && (
//             <div className="text-center py-20">
//               <Wallet className="w-24 h-24 text-gray-300 mx-auto mb-8" />
//               <h3 className="text-3xl font-bold text-gray-600 mb-4">
//                 No transactions yet o!
//               </h3>
//               <p className="text-xl text-gray-500">
//                 When you send money, buy airtime or pay bill, dem go show here.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA – Pure Naija Vibes */}
//       <section className="py-32 px-6 bg-gradient-to-r from-green-600 via-yellow-500 to-green-700">
//         <motion.div className="max-w-5xl mx-auto text-center text-white">
//           <motion.h2
//             className="text-5xl md:text-7xl font-black mb-10 leading-tight"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             Money Wey You Control.
//             <br />
//             Peace of Mind Wey Full Ground.
//           </motion.h2>

//           <motion.p className="text-2xl md:text-3xl mb-12 font-medium opacity-95">
//             Voice banking wey work like magic — safe, fast, and sweet.
//           </motion.p>

//           <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <motion.button
//               className="px-16 py-7 text-2xl font-bold bg-white text-green-700 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Send Money Now
//             </motion.button>
//             <motion.button
//               className="px-12 py-6 text-xl hover:bg-white font-bold border-4 border-white text-white rounded-full hover:text-black transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//             >
//               Speak to Padi
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Wallet,
  Send,
  Phone,
  Receipt,
} from "lucide-react";
import { format } from "date-fns";

const recentTasks = [
  {
    id: 1,
    type: "TRANSFER",
    amount: 5000,
    currency: "NGN",
    recipient: "Tunde Bakare",
    status: "SUCCESS",
    date: new Date("2025-12-12T14:30:00"),
    desc: "Send money give my guy for beer",
    icon: Send,
  },
  {
    id: 2,
    type: "AIRTIME",
    amount: 2000,
    currency: "NGN",
    recipient: "Self (08012345678)",
    status: "SUCCESS",
    date: new Date("2025-12-11T09:15:00"),
    desc: "Buy airtime sharp sharp",
    icon: Phone,
  },
  {
    id: 3,
    type: "BILL_PAY",
    amount: 15000,
    currency: "NGN",
    recipient: "PHCN (Electricity)",
    status: "PENDING",
    date: new Date("2025-12-10T18:45:00"),
    desc: "Pay NEPA bill before dem cut light",
    icon: Receipt,
  },
  {
    id: 4,
    type: "TRANSFER",
    amount: 10000,
    currency: "NGN",
    recipient: "Mama Basira",
    status: "FAILED",
    date: new Date("2025-12-09T11:20:00"),
    desc: "Send money for market",
    icon: Send,
  },
  {
    id: 5,
    type: "AIRTIME",
    amount: 500,
    currency: "NGN",
    recipient: "Nkechi (08098765432)",
    status: "SUCCESS",
    date: new Date("2025-12-08T22:10:00"),
    desc: "Small credit for night call",
    icon: Phone,
  },
];

const getStatusConfig = (status) => {
  switch (status) {
    case "SUCCESS":
      return {
        icon: CheckCircle,
        gradient: "from-green-500 to-emerald-600",
        text: "E don land!",
        badgeBg: "bg-green-100 text-green-800",
        ring: "ring-green-200",
      };
    case "PENDING":
      return {
        icon: Clock,
        gradient: "from-yellow-500 to-amber-600",
        text: "E dey come...",
        badgeBg: "bg-yellow-100 text-amber-800",
        ring: "ring-yellow-200",
      };
    case "FAILED":
      return {
        icon: AlertCircle,
        gradient: "from-red-500 to-rose-600",
        text: "E no work o!",
        badgeBg: "bg-red-100 text-red-800",
        ring: "ring-red-200",
      };
    default:
      return {
        icon: Clock,
        gradient: "from-gray-500 to-slate-600",
        text: "Processing...",
        badgeBg: "bg-gray-100 text-gray-800",
        ring: "ring-gray-200",
      };
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RecentTasksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzhr3xz9b/image/upload/v1736000000/nigeria-subtle-pattern.png')] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-green-700 leading-tight"
          >
            Your Recent Moves
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-2xl md:text-3xl text-gray-800 font-medium max-w-4xl mx-auto"
          >
            All your transfers, airtime top-ups, and bill payments — everything
            dey here, clear and sharp.
          </motion.p>
        </div>
      </section>

      {/* Transactions List */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          {recentTasks.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {recentTasks.map((task) => {
                const statusConfig = getStatusConfig(task.status);
                const StatusIcon = statusConfig.icon;
                const TaskIcon = task.icon;
                const isOutgoing =
                  task.type !== "AIRTIME" || !task.recipient.includes("Self");

                return (
                  <motion.article
                    key={task.id}
                    variants={item}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden"
                  >
                    {/* Subtle ring effect */}
                    <div
                      className={`absolute inset-0 ring-4 ring-inset ${statusConfig.ring} opacity-20 group-hover:opacity-40 transition-opacity`}
                    />

                    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                      <div className="flex items-center gap-6">
                        {/* Task Type Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-3 shadow-lg">
                          <TaskIcon className="w-full h-full text-white" />
                        </div>

                        {/* Status Icon */}
                        <div
                          className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${statusConfig.gradient} p-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <StatusIcon className="w-full h-full text-white" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {task.type === "TRANSFER" && "Money Transfer"}
                            {task.type === "AIRTIME" && "Airtime Top-up"}
                            {task.type === "BILL_PAY" && "Bill Payment"}
                          </h3>
                          <p className="text-lg text-gray-600 mt-1">
                            To:{" "}
                            <span className="font-semibold text-gray-800">
                              {task.recipient}
                            </span>
                          </p>
                          {task.desc && (
                            <p className="text-base text-gray-500 mt-3 italic">
                              "{task.desc}"
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end gap-4 mb-3">
                          {isOutgoing ? (
                            <ArrowUpRight className="w-9 h-9 text-red-600" />
                          ) : (
                            <ArrowDownRight className="w-9 h-9 text-green-600" />
                          )}
                          <p
                            className={`text-3xl font-black ${
                              isOutgoing ? "text-red-600" : "text-green-600"
                            }`}
                          >
                            {isOutgoing ? "-" : "+"}₦
                            {task.amount.toLocaleString()}
                          </p>
                        </div>

                        <div className="flex items-center justify-end gap-4">
                          <span
                            className={`px-5 py-2 rounded-full text-base font-semibold ${statusConfig.badgeBg}`}
                          >
                            {statusConfig.text}
                          </span>
                          <time className="text-base text-gray-600 font-medium">
                            {format(task.date, "dd MMM yyyy • h:mm a")}
                          </time>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-32">
              <Wallet className="w-28 h-28 text-gray-300 mx-auto mb-10" />
              <h3 className="text-4xl font-bold text-gray-700 mb-6">
                No transactions yet o!
              </h3>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Once you start sending money, buying airtime, or paying bills,
                everything go show here — clear and correct.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-green-600 via-yellow-500 to-green-700">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-white"
        >
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
            Money Wey You Control.
            <br />
            Peace of Mind Wey Full Ground.
          </h2>

          <p className="text-2xl md:text-3xl mb-16 font-medium opacity-90 max-w-4xl mx-auto">
            Voice banking wey fast, safe, and sweet — just talk, e go happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-20 py-8 text-2xl font-bold bg-white text-green-700 rounded-full shadow-2xl hover:shadow-green-400/50 transition-all duration-300"
            >
              Send Money Now
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              className="px-16 py-7 text-xl font-bold border-4 border-white text-white rounded-full transition-all duration-300"
            >
              Speak to Padi
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
