import { Badge } from "@/components/ui/badge";
import { navigation } from "@/constants";
import { Menu, X } from "lucide-react";
import React from "react";
import GitStarButton from "./Motion.Github.Button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  setActiveSection: (section: string) => void;
  activeSection: string;
  setMobileMenuOpen: (isOpen: boolean) => void;
  mobileMenuOpen: boolean;
  isVisible: boolean;
}

const MotionHeader = ({
  setActiveSection,
  activeSection,
  setMobileMenuOpen,
  mobileMenuOpen,
  isVisible,
}: Props) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-lg py-3 px-4 shadow-lg shadow-black/30 border-b border-indigo-800/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center space-x-3">
            <span className="text-white font-medium hidden md:inline">
              Node Enterprise Starter
            </span>
            <Badge
              variant="outline"
              className="bg-indigo-800/50 border-indigo-600/30 text-indigo-300"
            >
              DOCS
            </Badge>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.id);

                document
                  .querySelector(item.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GitStarButton />
          {/* Mobile menu button */}
          <Button
            className="md:hidden bg-zinc-800/80 hover:bg-zinc-700/80 text-white h-8 w-8 p-0 flex items-center justify-center"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default MotionHeader;
