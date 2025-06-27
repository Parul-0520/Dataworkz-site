import React from "react";
import { motion } from "framer-motion";

const AllInOne = () => {
  return (
    <div className="all-in-one-wrapper">
      <motion.div
        className="all-in-one-pill"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>
          All-in-one <span className="gradient-text">Agentic RAG</span> as a Service
        </h2>
      </motion.div>
    </div>
  );
};

export default AllInOne;


