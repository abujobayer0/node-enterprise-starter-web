import { infoData } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  isVisible,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.8, delay: 1 + delay }}
      className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-5 backdrop-blur-md"
    >
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface Props {
  isVisible: boolean;
}

const MotionStructureInfo = ({ isVisible }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {infoData.map((item, index) => (
        <InfoCard
          delay={index * 0.1}
          isVisible={isVisible}
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default MotionStructureInfo;
