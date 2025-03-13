import React from "react";
import { motion } from "framer-motion";

interface Props {
  isVisible: boolean;
  title: string;
}

const MotionHeader = ({ isVisible, title }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500">
        {title}
      </span>
    </motion.h1>
  );
};

export default MotionHeader;
