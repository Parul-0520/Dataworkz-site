import React, { useState } from "react";
import { motion } from "framer-motion";
import productImg from "../data/images/gpt.jpg";

const tabs = [
  "Q&A Platform",
  "Intelligent Document Search",
  "Support & Service Chatbot",
  "Service Co-pilot",
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("Q&A Platform");

  return (
    <section className="product-highlights">
   
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎁 USE CASES
      </motion.h2>

      <motion.div
        className="tabs-wrapper"
        initial={{ opacity: 0, y: 60 }}
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
            <h3>Q&A Platform</h3>
            <p>
              Enable your employees to ask questions in natural language and
              instantly get the information they need.
              <br />
              <br />
              Whether it’s an IT issue, a HR benefit question or a new employee
              onboarding process, empower your employees to tap into your
              organization’s knowledge base and improve their productivity.
            </p>
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

      {/* Animate Button */}
      {/* <motion.button
        className="butto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Explore RAG-as-a-service <span style={{ fontSize: "18px" }}>➜</span>
      </motion.button> */}
    </section>
  );
};

export default UseCases;

