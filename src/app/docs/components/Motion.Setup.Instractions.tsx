import React from "react";
import { motion } from "framer-motion";

interface StepProps {
  stepNumber: number;
  instruction: string;
  codeSnippet?: string;
  isVisible: boolean;
  delay: number;
}

const SetupStep = ({
  stepNumber,
  instruction,
  codeSnippet,
  isVisible,
  delay,
}: StepProps) => (
  <motion.li
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
    transition={{ duration: 0.8, delay: 1 + delay }}
    className="flex items-start"
  >
    <span className="bg-indigo-600/20 text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
      {stepNumber}
    </span>
    <div>
      <p>
        {instruction}
        {codeSnippet && (
          <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            {codeSnippet}
          </code>
        )}
      </p>
    </div>
  </motion.li>
);

interface Props {
  isVisible: boolean;
}

const SetupInstructions = ({ isVisible }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
    transition={{ duration: 0.8, delay: 1 }}
    className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-5 backdrop-blur-md"
  >
    <h3 className="text-lg font-medium text-white mb-3">Setup Instructions</h3>
    <ol className="space-y-3 text-zinc-300">
      <SetupStep
        stepNumber={1}
        instruction="Rename "
        codeSnippet=".env.example > .env"
        delay={0.1}
        isVisible={isVisible}
      />
      <SetupStep
        stepNumber={2}
        instruction="Configure your MongoDB connection string in "
        codeSnippet="DATABASE_URL"
        delay={0.2}
        isVisible={isVisible}
      />
      <SetupStep
        stepNumber={3}
        delay={0.3}
        isVisible={isVisible}
        instruction="Set secure values for JWT secrets and admin credentials"
      />
      <SetupStep
        stepNumber={4}
        delay={0.4}
        isVisible={isVisible}
        instruction="Configure email settings if you plan to use password reset functionality"
      />
      <SetupStep
        stepNumber={5}
        delay={0.5}
        isVisible={isVisible}
        instruction="After connecting to the MongoDB server, the admin user will be auto-seeded"
      />
    </ol>
  </motion.div>
);

export default SetupInstructions;
