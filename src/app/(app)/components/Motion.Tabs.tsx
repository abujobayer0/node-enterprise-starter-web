import React from "react";
import { motion } from "framer-motion";
import { PackageManagers } from "@/constants";
import { Check, Copy } from "lucide-react";
interface Props {
  isVisible: boolean;
  activeManager: string;
  copied: boolean;
  copyCommand: () => void;
  setActiveManager: (manager: string) => void;
}
const MotionTabs = ({
  isVisible,
  activeManager,
  setActiveManager,
  copied,
  copyCommand,
}: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-zinc-900/80 backdrop-blur-md rounded-lg p-2 flex items-center gap-1 mb-4 border border-zinc-800/80"
      >
        {PackageManagers.map((manager) => (
          <button
            key={manager}
            onClick={() => setActiveManager(manager)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeManager === manager
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
            }`}
          >
            {manager}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex w-full max-w-xl mb-12 relative"
      >
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-xl w-full p-4 text-left flex items-center justify-between shadow-lg shadow-black/20 group hover:border-indigo-800/50 transition-all duration-300">
          <div className="flex items-center gap-2">
            <span className="text-indigo-500">$</span>
            <code className="text-base text-zinc-300 font-mono">
              {activeManager} node-enterprise-starter
            </code>
          </div>
          <button
            onClick={copyCommand}
            className="text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-indigo-600 p-2 rounded-md transition-all duration-200"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default MotionTabs;
