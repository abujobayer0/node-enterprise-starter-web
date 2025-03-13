import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  isVisible: boolean;
  delay: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  bgColor,
  textColor,
  delay,
  isVisible,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.6 + delay }}
      className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-5 backdrop-blur-md"
    >
      <div className={`p-2 rounded-lg ${bgColor} inline-block mb-3`}>
        {icon}
      </div>
      <h3 className={`text-lg font-medium text-white mb-2 ${textColor}`}>
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
