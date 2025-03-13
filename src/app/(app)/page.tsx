"use client";

import { commands } from "@/constants";
import { useState, useEffect } from "react";
import Banner from "./components/Motion.Banner";
import MotionBody from "../../components/global/Motion.Body";
import MotionTabs from "./components/Motion.Tabs";
import MotionBadge from "../../components/global/Motion.Badge";
import MotionHeader from "../../components/global/Motion.Header";
import MotionMetrics from "./components/Motion.Metrics";
import MotionFeatures from "./components/Motion.Features";
import MotionTechnologies from "./components/Motion.Technologies";
import MotionCta from "./components/Motion.Cta";
import MotionLinks from "./components/Motion.Links";

export default function HeroSection() {
  const [activeManager, setActiveManager] = useState<string>("npx");
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyCommand = () => {
    const command = commands[activeManager];
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full overflow-hidden bg-black min-h-screen text-white border-b border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-emerald-900/30" />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />

      <Banner isVisible={isVisible} />
      <div className="px-4 md:px-6 flex flex-col items-center text-center relative z-10 py-24 md:py-32 max-w-7xl mx-auto">
        <MotionBadge
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          text={"Enterprise-Grade • Production-Ready • Open Source"}
        />
        <MotionHeader title="node-enterprise-starter" isVisible={isVisible} />
        <MotionBody
          isVisible={isVisible}
          title=" Scalable, production-ready Node.js architecture with TypeScript, Express, MongoDB, and secure email authentication. Stop configuring—start building."
        />
        <MotionTechnologies isVisible={isVisible} />
        <MotionTabs
          isVisible={isVisible}
          setActiveManager={setActiveManager}
          copied={copied}
          copyCommand={copyCommand}
          activeManager={activeManager}
        />
        <MotionMetrics isVisible={isVisible} />
        <MotionFeatures isVisible={isVisible} />
        <MotionCta isVisible={isVisible} />
        <MotionLinks isVisible={isVisible} />
      </div>
    </div>
  );
}
