import { routes } from "@/constants";
import { Code } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  isVisible: boolean;
}

const MotionApiRoutes = ({ isVisible }: Props) => {
  return (
    <motion.section
      id="api"
      className="mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mr-3">
          <Code className="h-5 w-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          API Routes
        </h2>
      </div>

      <motion.div
        className="bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800/80 shadow-lg shadow-black/20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border-b border-zinc-800/80">
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Route
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Auth Required
                </th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, i) => (
                <motion.tr
                  key={i}
                  className="border-b border-zinc-800/40 hover:bg-zinc-800/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                        route.method === "GET"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : route.method === "POST"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : route.method === "PATCH"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {route.method}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-indigo-300">
                    {route.route}
                  </td>
                  <td className="px-4 py-3 text-zinc-300 text-sm">
                    {route.desc}
                  </td>
                  <td className="px-4 py-3 text-zinc-300 text-sm">
                    {route.auth === "No" ? (
                      <span className="text-green-400">No</span>
                    ) : route.auth === "Yes (Admin)" ? (
                      <span className="text-amber-400">Yes (Admin)</span>
                    ) : (
                      <span className="text-blue-400">Yes</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MotionApiRoutes;
