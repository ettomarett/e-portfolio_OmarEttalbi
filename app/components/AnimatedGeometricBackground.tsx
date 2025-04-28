"use client";
import React from "react";

export default function AnimatedGeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none animate-geometric-bg">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minHeight: "100vh" }}
      >
        <g>
          {/* Hexagon grid pattern */}
          <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
            <polygon points="30,2 58,15 58,41 30,54 2,41 2,15" fill="#23304a" fillOpacity="0.08" />
          </pattern>
          <rect width="1200" height="800" fill="url(#hex)" />
        </g>
      </svg>
      <style jsx>{`
        .animate-geometric-bg svg {
          animation: movePattern 16s linear infinite alternate;
        }
        @keyframes movePattern {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-30px) translateX(-30px); }
        }
      `}</style>
    </div>
  );
} 