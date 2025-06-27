import React from "react";
import {
  FaUser,
  FaPaperPlane,
  FaFlag,
  FaServer,
  FaBolt,
} from "react-icons/fa";
import logo from "../data/images/logo.png";
import { motion } from "framer-motion";

const comparisonData = [
  {
    label: "People",
    icon: <FaUser />,
    build: { strong: "9", sub: "FTEs" },
    dataworkz: { strong: "1", sub: "FTE (DevOps engineer)" },
  },
  {
    label: "Production",
    icon: <FaPaperPlane />,
    build: { strong: "6–9", sub: "months" },
    dataworkz: { strong: "15", sub: "days (after getting approval)" },
  },
  {
    label: "New use-case",
    icon: <FaFlag />,
    build: { strong: "3–6", sub: "months of development" },
    dataworkz: { strong: "<1", sub: "day" },
  },
  {
    label: "Infrastructure",
    icon: <FaServer />,
    build: { sub: "Built & Orchestrated" },
    dataworkz: { sub: "Scalable & Reliable" },
  },
  {
    label: "Efficiency",
    icon: <FaBolt />,
    build: {
      sub: (
        <>
          Diverse teams must self organise &<br />
          tackle steep learning curve
        </>
      ),
    },
    dataworkz: {
      sub: (
        <>
          End-to-end lifecycle support
          <br />
          Best-practices baked in
        </>
      ),
    },
  },
];

const Comparison = () => {
  return (
    <section className="comparison-section">
     
      <motion.h2
        className="comparison-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧠 BUILD-IT-YOURSELF VS DATAWORKZ
      </motion.h2>

      <motion.div
        className="comparison-table"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div></div>
        <div className="comparison-header build">Build-it-yourself</div>
        <div className="comparison-header dataworkz">
          <img src={logo} alt="logo" className="dataworkz-logo" />
          <div className="dataworkz-title">
            <strong>RAG builder in VPC</strong>
          </div>
        </div>

        {comparisonData.map((row, index) => (
          <React.Fragment key={index}>
            <div className="comparison-label">
              {row.icon} {row.label}
            </div>
            <div className="comparison-cell build">
              {row.build.strong && <strong>{row.build.strong}</strong>}
              {row.build.sub && <span>{row.build.sub}</span>}
            </div>
            <div className="comparison-cell dataworkz">
              {row.dataworkz.strong && <strong>{row.dataworkz.strong}</strong>}
              {row.dataworkz.sub && <span>{row.dataworkz.sub}</span>}
            </div>
          </React.Fragment>
        ))}
      </motion.div>

      <motion.button
        className="butto3"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Start your journey with Dataworkz <span style={{ fontSize: "18px" }}>➜</span>
      </motion.button>
    </section>
  );
};

export default Comparison;



