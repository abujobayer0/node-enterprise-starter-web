import MotionBadge from "@/components/global/Motion.Badge";
import MotionBody from "@/components/global/Motion.Body";
import MotionHeader from "@/components/global/Motion.Header";
import React from "react";

interface Props {
  isVisible: boolean;
}

const MotionHero = ({ isVisible }: Props) => {
  return (
    <div className="text-center mb-16">
      <div className="mb-6 inline-block">
        <MotionBadge
          text="Enterprise-Grade • Production-Ready • Open Source"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <MotionHeader title="node-enterprise-starter" isVisible={isVisible} />
      <MotionBody
        isVisible={isVisible}
        title="Comprehensive documentation to help you build scalable Node.js applications with our enterprise-ready boilerplate"
      />
    </div>
  );
};

export default MotionHero;
