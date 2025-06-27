import React from "react";
import logo from "../data/images/logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
  
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Agent Hub</li>
            <li>RAG Builder</li>
            <li>Data Studio</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Learn</h4>
          <ul>
            <li>Agentic RAG vs Conventional RAG</li>
            <li>What is Graph RAG</li>
          </ul>
        </div>

<div className="footer-column footer-resource-contact">

  <div className="resource-block">
    <h4>Resources</h4>
    <ul>
      <li>Security</li>
      <li>Partners</li>
      <li>Pricing</li>
      <li>Join Slack community</li>
    </ul>
  </div>

  <div className="contact-block">
    <h4>Contact us</h4>
    <address>
      691, S Milpitas Blvd,<br />
      St 217, Milpitas<br />
      95035
    </address>
  </div>
</div>

        <div className="footer-column logo-column">
          <img src={logo} alt="Dataworkz Logo" />
          <p>
            Accelerate GenAI adoption with rapid experimentation and iteration using Agentic RAG
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy-left">
          Copyright © 2025 Dataworkz – Conversational Data Preparation
        </p>
        <p className="footer-copy-right">DataWorkz</p>
      </div>
    </footer>
  );
};

export default Footer;