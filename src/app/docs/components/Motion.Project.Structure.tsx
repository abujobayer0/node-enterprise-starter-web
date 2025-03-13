import { Server } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import DirectoryStructure from "./structure/Directory.Structure";
import ModuleStructure from "./structure/Module.Structure";
import MotionStructureInfo from "./Motion.Structure.Info";

interface Props {
  isVisible: boolean;
}

const MotionProjectStructure = ({ isVisible }: Props) => {
  return (
    <motion.section
      id="structure"
      className="mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mr-3">
          <Server className="h-5 w-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Project Structure
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <DirectoryStructure />
        <ModuleStructure />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <MotionStructureInfo isVisible={isVisible} />
      </motion.div>
    </motion.section>
  );
};

export default MotionProjectStructure;
