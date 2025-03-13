import React from "react";
import { motion } from "framer-motion";
import { Metrics } from "@/constants";

interface Props {
  isVisible: boolean;
}
const MotionMetrics = ({ isVisible }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="flex flex-wrap justify-center gap-8 mb-16"
    >
      {Metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <Icon className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{metric.value}</p>
              <p className="text-sm text-zinc-400">{metric.label}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default MotionMetrics;
