"use client";

import { useEffect, useState } from "react";

export default function DisclaimerPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem("popupShown");

    if (!shown) {
      setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupShown", "true");
      }, 1000);
    }
  }, []);

  if (!show) return null;

  return (
    <div style={overlay}>
      <div style={box}>
        <h2 style={{ textAlign: "center", marginBottom: "12px" }}>
  Disclaimer Notice
</h2>
        <p style={{ lineHeight: "1.5", fontSize: "14px" }}>
          It has come to our attention that certain individuals are approaching universities and institutions under the name of Confab 360 Degree, claiming association with AICTE research projects, grants, and other schemes.
          We would like to clarify that Confab 360 Degree is not associated with or involved in any AICTE research projects, grants, or similar schemes.
          Confab 360 Degree is successfully conducting training programs approved under the AICTE-NEAT initiative and serves as a marketing partner for various technical applications, products, and innovations under the AICTE-NEAT Cell.
          If you receive any communication regarding research projects, grants, or similar schemes claiming to represent Confab 360 Degree, please treat it with caution and report it to us immediately
          at: confab360degree@gmail.com.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
  <button onClick={() => setShow(false)}>
    Close
  </button>
</div>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const box: React.CSSProperties = {
  background: "#fff",
  padding: "24px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "600px",
  maxHeight: "80vh",        // 🔥 prevents overflow
  overflowY: "auto",        // 🔥 scroll if long text
  textAlign: "justify",        // better for long content
  };