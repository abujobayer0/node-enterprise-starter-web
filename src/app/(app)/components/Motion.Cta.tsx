import React from "react";
import { motion } from "framer-motion";
import GitStarButton from "@/app/docs/components/Motion.Github.Button";

interface Props {
  isVisible: boolean;
}

const MotionCta = ({ isVisible }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="w-full max-w-4xl bg-gradient-to-br from-indigo-900/70 via-purple-900/70 to-indigo-900/70 backdrop-blur-md rounded-xl p-8 border border-indigo-700/30 shadow-xl shadow-indigo-900/20  text-center"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        Ready to build your enterprise application?
      </h3>
      <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
        Get started with our production-ready template and focus on what matters
        — building your product, not setting up infrastructure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <GitStarButton />
      </div>
    </motion.div>
  );
};

export default MotionCta;
