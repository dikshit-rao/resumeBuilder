import React from "react";

export default function ProgressIndicator({ steps, currentStep }) {
  return (
    <div style={{ marginBottom: "2rem", position: "relative", paddingTop: "0.5rem" }}>
      {/* Progress Line */}
      <div style={{ position: "absolute", top: "1.8rem", left: 0, width: "100%", height: "4px", backgroundColor: "#e0e0e0" }}></div>
      <div
        style={{
          position: "absolute",
          top: "1.8rem",
          left: 0,
          height: "4px",
          backgroundColor: "#07142b",
          transition: "width 0.3s ease-in-out",
          width: `${(currentStep / (steps.length - 1)) * 100}%`,
        }}
      ></div>

      {/* Steps */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        {steps.map((step, index) => (
          <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 10 }}>
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid",
                transition: "all 0.3s",
                backgroundColor: index <= currentStep ? "#07142b" : "white",
                color: index <= currentStep ? "white" : "#46464e",
                borderColor: index <= currentStep ? "#07142b" : "#46464e",
              }}
            >
              {index + 1}
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                marginTop: "0.5rem",
                color: "#46464e",
                position: "absolute",
                top: "3.5rem",
                width: "6rem",
                textAlign: "center",
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
