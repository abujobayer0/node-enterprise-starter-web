import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface BadgeInterface {
  text: string;
  initial?: any;
  animate?: any;
  transition?: any;
}
const MotionBadge = ({
  text,
  initial,
  animate,
  transition,
}: BadgeInterface) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="mb-6"
    >
      <Badge
        variant="outline"
        className="bg-zinc-900/80 text-indigo-400 border-indigo-800/30 px-4 py-1 text-sm backdrop-blur-sm"
      >
        {text}
      </Badge>
    </motion.div>
  );
};

export default MotionBadge;
