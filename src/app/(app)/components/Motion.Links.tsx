"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/constants";

interface Props {
  isVisible: boolean;
}
interface LinkItemProps {
  href: string;
  label: string;
}

const MotionLinks: React.FC<Props> = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
    >
      {links.map((link) => (
        <LinkItem key={link.label} href={link.href} label={link.label} />
      ))}
    </motion.div>
  );
};

const LinkItem: React.FC<LinkItemProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="hover:text-indigo-400 transition-colors duration-200"
    >
      {label}
    </a>
  );
};

export default MotionLinks;
