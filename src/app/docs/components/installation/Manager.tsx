import React from "react";

interface ManagerButtonProps {
  manager: string;
  activeManager: string;
  setActiveManager: (manager: string) => void;
}

const ManagerButton = ({
  manager,
  activeManager,
  setActiveManager,
}: ManagerButtonProps) => {
  return (
    <button
      onClick={() => setActiveManager(manager)}
      className={`px-3 cursor-pointer py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
        activeManager === manager
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50"
          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
      }`}
    >
      {manager}
    </button>
  );
};

export default ManagerButton;
