import React from "react";
import { motion } from "framer-motion";
import { Technologies } from "@/constants";
import MotionBadge from "../../../components/global/Motion.Badge";

interface Props {
  isVisible: boolean;
}
const MotionTechnologies = ({ isVisible }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-2 mb-10"
    >
      {Technologies.map((tech, index) => (
        <MotionBadge
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          text={tech}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
        />
      ))}
    </motion.div>
  );
};

export default MotionTechnologies;
