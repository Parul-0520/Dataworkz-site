import React from "react";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import socImage from "../data/images/soc2.jpg";
import { motion } from "framer-motion";

const Security = () => {
  return (
    <section className="security-section">
      <div className="sec-1">
        <PiBookmarkSimpleFill className="security-icon" />
        <span>SECURITY</span>
      </div>

      <div className="security-container">
      
        <div className="security-image-wrapper">
          <div className="security-image-bg">
            <img src={socImage} alt="SOC2 Certification" />
          </div>
        </div>

        <motion.div
          className="security-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="security-title">Your data is safe with us</h2>
          <p className="security-description">
            At Dataworkz, security is not just a feature; it's a fundamental part of our culture.
            Dataworkz has achieved SOC2 Type 2 certification, demonstrating our commitment to
            maintaining the highest standards of data security and privacy.
          </p>
          <div className="gradient-border">
            <button className="security-button">
              Request SOC2 Report <span className="arrow">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;


