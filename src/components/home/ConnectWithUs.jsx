import React from "react";
import { FaEnvelope, FaLinkedin, FaSlack } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <section className="connect-with-us">
      <div className="connect-container">
   
        <motion.h2
          className="connect-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Connect with us
        </motion.h2>

        <div className="connect-cards">
       
          <motion.div
            className="connect-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaEnvelope className="connect-icon" style={{ color: "#7e56da" }} />
            <div className="connect-text">
              <h4>Email</h4>
              <p>Drop us a line anytime</p>
              <span>contact@dataworkz.ai</span>
            </div>
          </motion.div>

          <motion.div
            className="connect-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaLinkedin className="connect-icon" style={{ color: "#7e56da" }} />
            <div className="connect-text">
              <h4>LinkedIn</h4>
              <p>Follow us for updates</p>
              <span>@dataworkz</span>
            </div>
          </motion.div>

          <motion.div
            className="connect-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaSlack className="connect-icon" style={{ color: "#7e56da" }} />
            <div className="connect-text">
              <h4>Slack</h4>
              <p>Join our community</p>
              <span>dataworkz.slack.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

