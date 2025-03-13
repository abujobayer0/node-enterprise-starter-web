import React from "react";
import { motion } from "framer-motion";
const DirectoryStructure = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800/80 shadow-md overflow-hidden"
    >
      <div className="px-4 py-3 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border-b border-zinc-800/80">
        <h3 className="text-lg font-medium text-white">Directory Structure</h3>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="text-zinc-300 whitespace-pre-wrap">
          {`node-enterprise-starter/
├── src/
│   ├── app/
│   │   ├── errors/
│   │   ├── middlewares/
│   │   ├── modules/
│   │   │   ├── Auth/
│   │   │   ├── User/
│   │   │   └── ...
│   │   ├── routes/
│   │   └── services/
│   │   ├── utils/
│   ├── config/
│   ├── shared/
│   │   ├── constants/
|   ├── app.ts
│   └── server.ts
├── .env
├── .env.example
├── tsconfig.json
└── package.json`}
        </pre>
      </div>
    </motion.div>
  );
};

export default DirectoryStructure;
