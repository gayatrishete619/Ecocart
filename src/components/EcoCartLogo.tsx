import React from "react";

export const EcoCartLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg 
    viewBox="0 0 160 140" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} transition-transform duration-300 group-hover:scale-105 select-none`}
  >
    <defs>
      <linearGradient id="ecoCartLeafGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#99D959"/>
        <stop offset="45%" stopColor="#73BE43"/>
        <stop offset="100%" stopColor="#4E972C"/>
      </linearGradient>
      <linearGradient id="ecoCartVineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1B5E39"/>
        <stop offset="60%" stopColor="#2D7A42"/>
        <stop offset="100%" stopColor="#4E972C"/>
      </linearGradient>
    </defs>

    {/* Left Cart Edge / Front Wall */}
    <path 
      d="M 36 62 L 44 92 C 45 96 49 99 54 99 L 98 99" 
      stroke="#1B5E39" 
      strokeWidth="6.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Back basket warm olive depth line */}
    <path 
      d="M 45 64 C 45 76 49 86 58 91" 
      stroke="#6F5E36" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      fill="none"
    />

    {/* Main Organic Leaf inside basket */}
    <path 
      d="M 58 96 C 50 86 48 64 60 42 C 74 23 92 23 96 25 C 101 42 101 64 89 83 C 80 97 64 99 58 96 Z" 
      fill="url(#ecoCartLeafGrad)"
    />
    
    {/* Main central white vein on leaf */}
    <path 
      d="M 59 96 C 65 80 76 56 95 26" 
      stroke="#FFFFFF" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />
    
    {/* Side veins on leaf */}
    <path d="M 68 82 C 74 80 80 81 85 85" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.95"/>
    <path d="M 73 67 C 80 62 86 65 91 70" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.95"/>
    <path d="M 79 53 C 86 48 91 50 96 56" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.95"/>
    <path d="M 65 74 C 60 72 58 67 56 62" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.95"/>
    <path d="M 72 60 C 67 55 65 51 63 47" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.95"/>

    {/* Cart Bottom olive horizontal strut */}
    <path 
      d="M 42 110 L 92 110" 
      stroke="#6F5E36" 
      strokeWidth="5" 
      strokeLinecap="round"
    />

    {/* Vine-like stem growing out of cart base and sweeping up to right */}
    <path 
      d="M 59 96 C 59 101 62 105 69 105 L 94 105 C 102 105 106 100 108 93 L 118 51 C 122 43 128 39 135 38" 
      stroke="url(#ecoCartVineGrad)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />

    {/* Small sprouting leaf at top of sweeping stem */}
    <path 
      d="M 135 38 C 136 32 142 29 149 29 C 149 36 144 41 138 42 C 135 42 134 40 135 38 Z" 
      fill="#52A433"
    />
    <path 
      d="M 136 38 C 141 34 146 32 148 30" 
      stroke="#FFFFFF" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      opacity="0.9"
    />

    {/* Left Cart Wheel Loop */}
    <path 
      d="M 50 110 C 50 110 51 121 59 121 C 66 121 66 113 59 113 C 55 113 55 117 57 119" 
      stroke="#1B5E39" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />

    {/* Right Cart Wheel Loop */}
    <path 
      d="M 90 110 C 90 110 91 121 99 121 C 106 121 106 113 99 113 C 95 113 95 117 97 119" 
      stroke="#1B5E39" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />
  </svg>
);
