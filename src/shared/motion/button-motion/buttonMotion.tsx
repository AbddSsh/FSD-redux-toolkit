import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const ButtonMotion = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      whileHover={{ opacity: 0.8, cursor: "pointer" }}
      whileTap={{ scale: 0.97 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default ButtonMotion;
