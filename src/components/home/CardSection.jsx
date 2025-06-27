import React from "react";
import { Apps } from "@mui/icons-material";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <Apps style={{ fontSize: 40, color: "#ec4899" }} />,
    title: "Advanced RAG",
    desc: "Leverage agent-based intelligence to support any RAG pattern, any data type and complex workflows",
    animation: { x: -80, y: 0 }, 
  },
  {
    icon: <Apps style={{ fontSize: 40, color: "#ec4899" }} />,
    title: "Composable AI stack",
    desc: "Configure and optimize each aspect of the RAG pipeline with just a few clicks",
    animation: { x: 0, y: 80 },
  },
  {
    icon: <Apps style={{ fontSize: 40, color: "#ec4899" }} />,
    title: "No-code RAG builder",
    desc: "Rapidly build, deploy and scale GenAI apps that connect to proprietary data",
    animation: { x: 80, y: 0 }, 
  },
];

const CardSection = () => {
  return (
    <section className="card-section">
      <div className="card-container">
        {cards.map((card, i) => (
          <motion.div
            className="card"
            key={i}
            initial={{ opacity: 0, x: card.animation.x, y: card.animation.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
