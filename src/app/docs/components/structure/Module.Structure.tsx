import React from "react";
import { motion } from "framer-motion";

const ModuleStructure = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800/80 shadow-md overflow-hidden"
    >
      <div className="px-4 py-3 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border-b border-zinc-800/80">
        <h3 className="text-lg font-medium text-white">Module Architecture</h3>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="text-zinc-300 whitespace-pre-wrap">
          {`Auth/
     └── auth.controller.ts
     └── auth.service.ts
     └── auth.model.ts
     └── auth.validation.ts
     └── auth.utils.ts
     └── auth.interface.ts
     └── auth.routes.ts

 User/
     └── user.controller.ts
     └── user.service.ts
     └── user.model.ts
     └── user.validation.ts
     └── user.utils.ts
     └── user.interface.ts
     └── user.routes.ts
`}
        </pre>
      </div>
    </motion.div>
  );
};

export default ModuleStructure;
