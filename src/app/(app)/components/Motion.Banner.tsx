import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const Banner = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-lg py-3 px-4 shadow-lg shadow-black/30 border-b border-indigo-800/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Badge
            variant="outline"
            className="bg-indigo-800/50 border-indigo-600/30 text-indigo-300"
          >
            NEW
          </Badge>
          <span className="text-indigo-100 text-sm md:text-base hidden md:inline">
            Enterprise-grade Node.js starter template — Ready for production
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href={"/docs"}>
            <Button
              className="bg-white/10 cursor-pointer hover:bg-white/20 text-white border-none backdrop-blur-sm px-4 py-1 h-8 text-xs md:text-sm"
              size="sm"
            >
              Documentation <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
