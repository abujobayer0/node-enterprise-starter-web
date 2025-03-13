import React from "react";
import { motion } from "framer-motion";
interface Props {
  isVisible: boolean;
  title: string;
}
const MotionBody = ({ isVisible, title }: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed"
    >
      {title}
    </motion.p>
  );
};

export default MotionBody;
