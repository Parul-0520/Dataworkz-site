import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="hero">
      {home.map((val, i) => (
        <motion.div
          className="heroContent"
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="fontSize hero-title">{val.text}</h1>

          <h1 className="fontSize hero-title typewriter-line">
            <span className="typewriter-text">
              <Typewriter
                options={{
                  strings: [val.b, val.c, val.d, val.e, val.f],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <h1 className="fontSize hero-title">{val.text2}</h1>

          <h3>{val.desc}</h3>

          <button className="primaryBtn">
            Try For Free <span style={{ fontSize: "18px" }}>➜</span>
          </button>

          <p className="hero-subtext">No credit card required!</p>
        </motion.div>
      ))}
    </section>
  );
};
