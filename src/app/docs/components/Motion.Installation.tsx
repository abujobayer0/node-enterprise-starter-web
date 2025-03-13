import { Rocket, Terminal, Coffee } from "lucide-react";
import React from "react";
import ManagerButton from "./installation/Manager";
import CommandLineCard from "./installation/Command.Line";
import FeatureCard from "./installation/Feature.Card";
import { motion } from "framer-motion";

interface Props {
  setActiveManager: (manager: string) => void;
  activeManager: string;
  copyCommand: () => void;
  copied: boolean;
  isVisible: boolean;
}

const MotionInstallation = ({
  setActiveManager,
  activeManager,
  copyCommand,
  copied,
  isVisible,
}: Props) => {
  return (
    <motion.section id="installation" className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center mb-6"
      >
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mr-3">
          <Rocket className="h-5 w-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Quick Installation
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 border border-zinc-800/80 shadow-lg shadow-black/20 mb-8"
      >
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <p className="text-zinc-300 mr-2 text-sm md:text-base">
            Choose your package manager:
          </p>
          {["npx", "yarn", "pnpm", "bunx"].map((manager) => (
            <ManagerButton
              key={manager}
              manager={manager}
              activeManager={activeManager}
              setActiveManager={setActiveManager}
            />
          ))}
        </div>

        <CommandLineCard
          activeManager={activeManager}
          copyCommand={copyCommand}
          copied={copied}
        />

        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-indigo-500/40 pl-4">
            <h3 className="text-lg font-medium text-white mb-2">
              Interactive CLI prompts:
            </h3>
            <div className="space-y-2 text-zinc-300">
              <p>
                <span className="text-indigo-400">1.</span> Enter your project
                name
              </p>
              <p>
                <span className="text-indigo-400">2.</span> Select your package
                manager
              </p>
              <p>
                <span className="text-indigo-400">3.</span> Wait for the setup
                to complete
              </p>
            </div>
          </div>
        </div>

        <CommandLineCard
          activeManager="npm"
          copyCommand={copyCommand}
          copied={copied}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <FeatureCard
          isVisible={isVisible}
          delay={0.1}
          icon={<Terminal className="h-5 w-5 text-indigo-400" />}
          title="Interactive CLI"
          description="User-friendly command line interface that guides you through the setup process step by step."
          bgColor="bg-indigo-500/10"
          textColor="text-indigo-400"
        />
        <FeatureCard
          isVisible={isVisible}
          delay={0.2}
          icon={<Rocket className="h-5 w-5 text-emerald-400" />}
          title="Instant Startup"
          description="Get your development server up and running in seconds with all dependencies pre-configured."
          bgColor="bg-emerald-500/10"
          textColor="text-emerald-400"
        />
        <FeatureCard
          isVisible={isVisible}
          delay={0.3}
          icon={<Coffee className="h-5 w-5 text-purple-400" />}
          title="Zero Config"
          description="No complex configuration required. Just install and start building your application logic."
          bgColor="bg-purple-500/10"
          textColor="text-purple-400"
        />
      </motion.div>
    </motion.section>
  );
};

export default MotionInstallation;
