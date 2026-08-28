import React from "react";
import { motion } from "motion/react";

interface EarthMascotProps {
  size?: number;
  className?: string;
  isFloating?: boolean;
  isInteractive?: boolean;
  isWaving?: boolean;
}

export const EarthMascot: React.FC<EarthMascotProps> = ({
  size = 64,
  className = "",
  isFloating = true,
  isInteractive = true,
  isWaving = true,
}) => {
  // Eye blinking animation variants
  const eyeVariants = {
    blink: {
      scaleY: [1, 1, 1, 0.1, 1, 1, 1, 1, 1, 0.1, 1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Waving arm animation variants
  const armVariants = {
    wave: {
      rotate: [0, -12, 18, -12, 18, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
    idle: {
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Cloud drifting variants
  const cloudVariantsLeft = {
    drift: {
      x: [-2, 2, -2],
      y: [-1, 1, -1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const cloudVariantsRight = {
    drift: {
      x: [2, -2, 2],
      y: [1, -1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      animate={
        isFloating
          ? {
              y: [0, -4, 0],
            }
          : {}
      }
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={
        isInteractive
          ? {
              scale: 1.08,
              rotate: 3,
              transition: { duration: 0.3 },
            }
          : {}
      }
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Earth sphere radial 3D gradient */}
          <radialGradient id="earthGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#5bc0fe" />
            <stop offset="60%" stopColor="#0288d1" />
            <stop offset="100%" stopColor="#01579b" />
          </radialGradient>

          {/* Continents gradient */}
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="50%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Leaves gradient */}
          <linearGradient id="leafGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="leafGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>

          {/* Cloud gradient */}
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>

          {/* Earth circular clipping mask */}
          <clipPath id="earthClip">
            <circle cx="60" cy="65" r="40" />
          </clipPath>

          {/* Soft shadow under elements */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 2. Earth Main Sphere Body */}
        <circle
          cx="60"
          cy="65"
          r="40"
          fill="url(#earthGrad)"
          stroke="#013c66"
          strokeWidth="1.5"
        />

        {/* 3. Continents (Clipped to Sphere) */}
        <g clipPath="url(#earthClip)">
          {/* North America / Greenland shape */}
          <path
            d="M 30 35 Q 38 25 50 32 Q 58 35 55 45 Q 48 48 42 42 Q 35 48 30 35 Z"
            fill="url(#landGrad)"
            opacity="0.95"
          />
          {/* South America shape */}
          <path
            d="M 32 52 Q 22 62 30 75 Q 38 88 48 85 Q 46 72 40 68 Q 45 58 32 52 Z"
            fill="url(#landGrad)"
            opacity="0.95"
          />
          {/* Eurasia shape */}
          <path
            d="M 68 32 Q 85 28 92 40 Q 82 48 78 40 Q 72 48 68 32 Z"
            fill="url(#landGrad)"
            opacity="0.95"
          />
          {/* Africa shape */}
          <path
            d="M 62 50 Q 78 45 85 58 Q 78 78 68 82 Q 58 75 58 62 Q 54 55 62 50 Z"
            fill="url(#landGrad)"
            opacity="0.95"
          />
          {/* Australia shape */}
          <path
            d="M 88 78 Q 98 75 94 85 Q 84 88 88 78 Z"
            fill="url(#landGrad)"
            opacity="0.95"
          />
        </g>

        {/* 4. Cute leaves sprouting from the top */}
        <g transform="translate(60, 25)">
          {/* Stem */}
          <path
            d="M 0 1 Q -1 -6 -3 -11"
            stroke="#15803d"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Leaf */}
          <path
            d="M -2 -11 Q -15 -18 -12 -5 Q -6 0 -2 -11 Z"
            fill="url(#leafGradLeft)"
            stroke="#166534"
            strokeWidth="1"
          />
          {/* Left Leaf details */}
          <path
            d="M -2 -11 Q -7 -8 -10 -7"
            stroke="#15803d"
            strokeWidth="0.7"
            fill="none"
          />

          {/* Right Leaf */}
          <path
            d="M -2 -11 Q 12 -20 12 -7 Q 6 0 -2 -11 Z"
            fill="url(#leafGradRight)"
            stroke="#166534"
            strokeWidth="1"
          />
          {/* Right Leaf details */}
          <path
            d="M -2 -11 Q 5 -8 8 -7"
            stroke="#15803d"
            strokeWidth="0.7"
            fill="none"
          />
        </g>

        {/* 6. Happy Animated Face */}
        <g id="face">
          {/* Soft Pink Blushing Cheeks */}
          <circle cx="38" cy="72" r="5" fill="#f87171" opacity="0.65" />
          <circle cx="82" cy="72" r="5" fill="#f87171" opacity="0.65" />

          {/* Left Sparkly Eye (Blinks) */}
          <motion.ellipse
            cx="47"
            cy="65"
            rx="5.5"
            ry="6"
            fill="#1e293b"
            variants={eyeVariants}
            animate="blink"
            style={{ originX: "47px", originY: "65px" }}
          />
          {/* Left Eye Sparkles */}
          <circle cx="45" cy="62.5" r="1.8" fill="#ffffff" />
          <circle cx="49" cy="67" r="0.9" fill="#ffffff" />

          {/* Right Sparkly Eye (Blinks) */}
          <motion.ellipse
            cx="73"
            cy="65"
            rx="5.5"
            ry="6"
            fill="#1e293b"
            variants={eyeVariants}
            animate="blink"
            style={{ originX: "73px", originY: "65px" }}
          />
          {/* Right Eye Sparkles */}
          <circle cx="71" cy="62.5" r="1.8" fill="#ffffff" />
          <circle cx="75" cy="67" r="0.9" fill="#ffffff" />

          {/* Cheerful Mouth */}
          <path
            d="M 54 70 Q 60 78 66 70 Q 60 71 54 70 Z"
            fill="#991b1b"
            stroke="#1e293b"
            strokeWidth="1"
          />
          {/* Tongue inside mouth */}
          <path
            d="M 56 73 Q 60 77 64 73 C 63 76 57 76 56 73"
            fill="#fca5a5"
          />
        </g>

        {/* 7. Cute Tiny Fluffy Clouds surrounding Earth */}
        {/* Cloud Top Left */}
        <motion.g
          transform="translate(24, 38)"
          variants={cloudVariantsLeft}
          animate="drift"
        >
          <path
            d="M -10 0 C -10 -4 -6 -8 -2 -8 C 0 -8 2 -6 3 -4 C 4 -6 8 -6 10 -4 C 12 -2 12 2 10 4 C 8 4 -8 4 -10 0"
            fill="url(#cloudGrad)"
            opacity="0.92"
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        </motion.g>

        {/* Cloud Top Right */}
        <motion.g
          transform="translate(90, 36)"
          variants={cloudVariantsRight}
          animate="drift"
        >
          <path
            d="M -8 0 C -8 -3 -5 -6 -2 -6 C 0 -6 1.5 -4.5 2 -3 C 3 -4.5 6 -4.5 8 -3 C 9.5 -1.5 9.5 1.5 8 3 C 6 3 -6 3 -8 0"
            fill="url(#cloudGrad)"
            opacity="0.92"
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        </motion.g>

        {/* Cloud Bottom Left */}
        <motion.g
          transform="translate(20, 88)"
          variants={cloudVariantsRight}
          animate="drift"
        >
          <path
            d="M -8 0 C -8 -3 -5 -6 -2 -6 C 0 -6 1.5 -4.5 2 -3 C 3 -4.5 6 -4.5 8 -3 C 9.5 -1.5 9.5 1.5 8 3 C 6 3 -6 3 -8 0"
            fill="url(#cloudGrad)"
            opacity="0.9"
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        </motion.g>

        {/* Cloud Bottom Right */}
        <motion.g
          transform="translate(94, 90)"
          variants={cloudVariantsLeft}
          animate="drift"
        >
          <path
            d="M -10 0 C -10 -4 -6 -8 -2 -8 C 0 -8 2 -6 3 -4 C 4 -6 8 -6 10 -4 C 12 -2 12 2 10 4 C 8 4 -8 4 -10 0"
            fill="url(#cloudGrad)"
            opacity="0.9"
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};
