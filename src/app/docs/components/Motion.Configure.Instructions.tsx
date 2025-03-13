import { envConfig } from "@/constants";
import { FileText, Settings } from "lucide-react";
import React from "react";
import SetupInstructions from "./Motion.Setup.Instractions";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isVisible: boolean;
}

const MotionConfigureInstructions = ({ isVisible }: Props) => {
  return (
    <section id="configuration" className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center mb-6"
      >
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mr-3">
          <Settings className="h-5 w-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Environment Configuration
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800/80 shadow-lg shadow-black/20 mb-6 overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border-b border-zinc-800/80">
          <div className="flex items-center">
            <FileText className="h-4 w-4 text-indigo-400 mr-2" />
            <span className="text-zinc-300 font-medium">.env.example</span>
          </div>
        </div>

        <div className="p-1">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {envConfig.map((env, i) => (
                  <tr
                    key={i}
                    className="border-b border-zinc-800/40 hover:bg-zinc-800/30"
                  >
                    <td className="px-4 py-3 font-mono whitespace-nowrap text-indigo-400">
                      {env.key}
                    </td>
                    <td className="px-4 py-3 font-mono whitespace-nowrap text-emerald-400">
                      {env.value}
                    </td>
                    <td className="px-4 py-3 text-zinc-400">{env.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
      <SetupInstructions isVisible={isVisible} />
    </section>
  );
};

export default MotionConfigureInstructions;
