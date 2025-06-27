import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../data/images/custo1.jpg";
import img2 from "../data/images/custo2.jpg";
import img3 from "../data/images/custo3.jpg";

const customers = [
  {
    title: "Fortune 500 Financial Services",
    desc: "Empowering financial service advisors to instantly tap into internal knowledge base for seamless personalized customer experience.",
    image: img1,
    animation: { x: -80, y: 0 }, 
  },
  {
    title: "Medical Equipment Retailer",
    desc: "Transforming customer support experience, improving MTTR and enhancing staff productivity with AI service copilots.",
    image: img2,
    animation: { x: 0, y: 80 }, 
  },
  {
    title: "Lifesciences Insight Provider",
    desc: "Making data LLM ready by automating the process of connecting, transforming and combining data from multiple sources for unification of AI and BI.",
    image: img3,
    animation: { x: 80, y: 0 }, 
  },
];

const Customers = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="customers-section">

      <motion.h2
        className="customers-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        👤 CUSTOMERS
      </motion.h2>

      <div className="customers-grid">
        {customers.map((cust, index) => (
          <motion.div
            key={index}
            className="customer-card"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            initial={{ opacity: 0, x: cust.animation.x, y: cust.animation.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {hoverIndex === index ? (
              <div className="hover-image-full">
                <img src={cust.image} alt={cust.title} className="hover-image" />
                <button className="read-story-btn">Read Customer story</button>
              </div>
            ) : (
              <>
                <h3>{cust.title}</h3>
                <p>{cust.desc}</p>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ marginTop: "60px", textAlign: "center" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="gradient-border">
          <button className="butto2">
            Read Customer Stories <span style={{ fontSize: "18px" }}>➜</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Customers;

