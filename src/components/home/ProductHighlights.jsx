import React, { useState } from "react";
import productImg from "../data/images/product.webp";
import { motion } from "framer-motion";

const tabs = [
  "Reasoning Engine",
  "Knowledge Graph",
  "Hybrid Search and Retrieval",
  "Agent for Building Agents",
];

const ProductHighlights = () => {
  const [activeTab, setActiveTab] = useState("Reasoning Engine");

  return (
    <section className="product-highlights">
    
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎁 PRODUCT HIGHLIGHTS
      </motion.h2>

      <motion.div
        className="tabs-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="highlight-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="tab-content">
          <div className="content-left">
            <h3>LLM-based Reasoning</h3>
            <p>Orchestrate complex workflows with multiple agents</p>
            <ul>
              <li>
                Break down complex questions into manageable tasks with LLM
                reasoning capabilities
              </li>
              <li>Enable multi-agent collaboration for complex tasks</li>
              <li>
                Provide fine-grained access to enterprise assets with dynamic
                tool selection
              </li>
            </ul>
          </div>

          <div className="content-right">
            <img
              src={productImg}
              alt="Reasoning Flow"
              className="highlight-image"
            />
          </div>
        </div>
      </motion.div>

      <motion.button
        className="butto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Explore RAG-as-a-service <span style={{ fontSize: "18px" }}>➜</span>
      </motion.button>
    </section>
  );
};

export default ProductHighlights;
