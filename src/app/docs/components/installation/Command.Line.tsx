import { Check, Copy } from "lucide-react";
import React from "react";

interface CommandLineCardProps {
  activeManager: string;
  copyCommand: () => void;
  copied: boolean;
}

const CommandLineCard = ({
  activeManager,
  copyCommand,
  copied,
}: CommandLineCardProps) => {
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-800/80 p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-indigo-500">$</span>
          <code className="text-base text-zinc-300 font-mono">
            {activeManager} node-enterprise-starter
          </code>
        </div>
        <button
          onClick={copyCommand}
          className="text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-indigo-600 p-2 rounded-md transition-all duration-200"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CommandLineCard;
