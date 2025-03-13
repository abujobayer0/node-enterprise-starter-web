"use client";

import React, { useState, useEffect } from "react";
import MotionApiRoutes from "./components/Motion.ApiRoutes";
import MotionProjectStructure from "./components/Motion.Project.Structure";
import MotionKeyFeatures from "./components/Motion.Key.Features";
import MotionConfigureInstructions from "./components/Motion.Configure.Instructions";
import MotionHero from "./components/Motion.Hero";
import MotionHeader from "./components/Motion.Header";
import MotionMobileMenu from "./components/Motion.Mobile.Menu";
import MotionInstallation from "./components/Motion.Installation";

const DocPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeManager, setActiveManager] = useState("npx");
  const [activeSection, setActiveSection] = useState("installation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyCommand = () => {
    const commands: Record<string, string> = {
      npx: "npx node-enterprise-starter",
      yarn: "yarn dlx node-enterprise-starter",
      bunx: "bunx node-enterprise-starter",
      pnpm: "pnpm dlx node-enterprise-starter",
    };

    const command = commands[activeManager];
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-emerald-900/30" />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />

      <MotionHeader
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        isVisible={isVisible}
      />
      <MotionMobileMenu
        setActiveSection={setActiveSection}
        setMobileMenuOpen={setMobileMenuOpen}
        isVisible={isVisible}
        mobileMenuOpen={mobileMenuOpen}
      />

      <div className="px-4 md:px-6 py-12 md:py-20 max-w-7xl mx-auto relative z-10">
        <MotionHero isVisible={isVisible} />
        <MotionInstallation
          setActiveManager={setActiveManager}
          activeManager={activeManager}
          isVisible={isVisible}
          copied={copied}
          copyCommand={copyCommand}
        />
        <MotionConfigureInstructions isVisible={isVisible} />
        <MotionProjectStructure isVisible={isVisible} />
        <MotionApiRoutes isVisible={isVisible} />
        <MotionKeyFeatures isVisible={isVisible} />
      </div>
    </div>
  );
};
export default DocPage;
