"use client";
import React from "react";

export default function AnimatedGeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[#E8763A]/[0.12] blur-[150px] animate-drift-slow" />
      <div className="absolute -bottom-[150px] -left-[150px] w-[550px] h-[550px] rounded-full bg-[#6C5CE7]/[0.10] blur-[130px] animate-drift-slow-reverse" />
      <div className="absolute top-[35%] left-[45%] w-[450px] h-[450px] rounded-full bg-[#4CAF7D]/[0.08] blur-[120px] animate-drift-mid" />

      {/* Dot grid */}
      <svg className="w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <style jsx>{`
        @keyframes drift-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 30px); }
        }
        @keyframes drift-slow-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -40px); }
        }
        @keyframes drift-mid {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -50px); }
        }
        .animate-drift-slow { animation: drift-slow 20s ease-in-out infinite; }
        .animate-drift-slow-reverse { animation: drift-slow-reverse 24s ease-in-out infinite; }
        .animate-drift-mid { animation: drift-mid 18s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
