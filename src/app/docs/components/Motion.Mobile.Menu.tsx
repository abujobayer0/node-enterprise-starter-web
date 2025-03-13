import { navigation } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  mobileMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  isVisible: boolean;
}

const MotionMobileMenu = ({
  mobileMenuOpen,
  setActiveSection,
  setMobileMenuOpen,
  isVisible,
}: Props) => {
  return (
    <>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden pt-16"
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xl font-medium text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default MotionMobileMenu;
