import React from "react";
import { Rocket, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { keyFeatures } from "@/constants";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}
interface Props {
  isVisible: boolean;
}

const MotionKeyFeatures = ({ isVisible }: Props) => {
  return (
    <motion.section
      id="features"
      className="mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mr-3">
          <Rocket className="h-5 w-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Key Features
        </h2>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {keyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/abujobayer0/node-enterprise-starter.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white text-sm md:text-base px-6 py-2"
            size="lg"
          >
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </Button>
        </a>
      </div>
    </motion.section>
  );
};

const FeatureCard: React.FC<FeatureProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}) => (
  <div className="bg-zinc-900/60 backdrop-blur-md rounded-xl border border-zinc-800/60 p-5 h-full">
    <div className={`p-2 rounded-lg ${bgColor} inline-block mb-3`}>
      <Icon className={`h-5 w-5 ${iconColor}`} />
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default MotionKeyFeatures;
