import React from "react";
import { motion } from "framer-motion";
import { Features } from "@/constants";
import MotionFeature from "./Motion.Feature";

interface Props {
  isVisible: boolean;
}

const MotionFeatures = ({ isVisible }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 w-full max-w-5xl"
    >
      {Features.map(({ icon, text, color, delay }, index) => (
        <MotionFeature
          isVisible={isVisible}
          key={index}
          delay={delay}
          color={color}
          icon={icon}
          text={text}
        />
      ))}
    </motion.div>
  );
};

export default MotionFeatures;
