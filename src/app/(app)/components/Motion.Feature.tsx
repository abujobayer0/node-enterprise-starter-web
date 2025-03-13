import React from "react";
import { motion } from "framer-motion";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
  delay: number;
  isVisible: boolean;
}
const MotionFeature = ({
  isVisible,
  delay,
  color,
  text,
  icon: Icon,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.6 + delay }}
      className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md hover:bg-zinc-800/50 hover:border-indigo-800/30 transition-all duration-300 group"
    >
      <div
        className={`p-3 rounded-lg ${color.replace(
          "text",
          "bg"
        )}/10 mb-3 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <span className="text-sm font-medium text-zinc-300 text-center">
        {text}
      </span>
    </motion.div>
  );
};

export default MotionFeature;
