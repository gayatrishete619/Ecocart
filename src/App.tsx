/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Download, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  CheckCheck, Check, AlertCircle, 
  HelpCircle, 
  Lightbulb, 
  RefreshCw, 
  BarChart3, 
  Database, 
  Globe, 
  Sparkles, 
  ShoppingBag, 
  Eye, 
  Terminal,
  Heart,
  ChevronRight,
  Info,
  BadgeAlert,
  ArrowBigUpDash,
  Menu,
  X,
  Play,
  Star,
  Leaf
, Shield, SearchCheck, Recycle, BarChart, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TRUSTED_STORES, 
  PROBLEM_CARDS, 
  STEP_GUIDES, 
  STATS, 
  COMPARISONS, 
  FAQS 
} from "./data";
import { EarthMascot } from "./components/EarthMascot";
import { ProductAnalysis } from "./types";

const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
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

const PremiumEcoScoreCircle = ({ score, size = 110, strokeWidth = 8, className = "" }: { score: number; size?: number; strokeWidth?: number; className?: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // animated stroke dash offset
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      const progressOffset = circumference - (score / 100) * circumference;
      setOffset(progressOffset);
    }, 150);
    return () => clearTimeout(timer);
  }, [score, circumference]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      {/* Glow shadow ring behind */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md animate-pulse-slow pointer-events-none" />
      
      {/* SVG Canvas */}
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="ecoScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="goldHighlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Outer subtle gold accent thin path */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius + 4}
          stroke="url(#goldHighlightGrad)"
          strokeWidth="1.5"
          fill="transparent"
          opacity="0.6"
        />

        {/* Gray/Green background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E2E8F0"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-45"
        />

        {/* Foreground dynamic progress track */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#ecoScoreGrad)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
          fill="transparent"
          style={{ filter: "drop-shadow(0px 0px 4px rgba(16,185,129,0.5))" }}
        />
      </svg>
      
      {/* Inner glass overlay details */}
      <div className="absolute inset-[6px] rounded-full bg-white/90 backdrop-blur-sm shadow-inner flex flex-col justify-center items-center border border-emerald-500/15 overflow-hidden">
        {/* Subtle glass diagonal reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent transform -skew-x-12 pointer-events-none select-none opacity-85" />
        
        <span className="text-3xl font-black font-display tracking-tighter text-slate-950 leading-none">
          {score}
        </span>
        <span className="text-[10px] text-emerald-800 font-extrabold tracking-widest font-mono uppercase mt-0.5">
          /100
        </span>
      </div>
    </div>
  );
};

export default function App() {
  // Loading Screen state
  const [loadingScreen, setLoadingScreen] = useState(true);

  // Chatbot State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { 
      sender: "bot", 
      text: "👋 Hi! I'm Eco 🌍\n\nI'm your AI sustainability assistant.\n\nI can help you understand:\n\n🌱 EcoScore\n\n♻️ Sustainability\n\n🌍 Carbon Footprint\n\n🛍️ Product Recommendations\n\n⚡ Extension Installation\n\nAsk me anything!" 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatInput, setChatInput] = useState("");

  const chatMessagesEndRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [chatMessages, isTyping, chatOpen]);

  // FAQ matching helper
  const findFAQResponse = (userQuery: string): string | null => {
    const q = userQuery.trim().toLowerCase();
    if (!q) return null;

    // Direct match with items in FAQS array
    const matchedFaq = FAQS.find((item) => {
      const itemQ = item.question.toLowerCase();
      return (
        q === itemQ ||
        q.includes(itemQ) ||
        itemQ.includes(q)
      );
    });
    if (matchedFaq) {
      return matchedFaq.answer;
    }

    // Static FAQ keyword & intent matching
    if (q.includes("privacy") || q.includes("private") || q.includes("data") || q.includes("shopping history")) {
      return "Absolutely. EcoCart is privacy-first by design. Our browser extension operates fully in client isolation. It does not track your account details, name, payment pathways, or search history. All analysis requests to our server proxy are completely anonymized.";
    }
    if (q.includes("what is ecocart") || q.includes("what's ecocart") || q === "ecocart") {
      return "EcoCart is an intelligent sustainability assistant and browser extension that analyzes retail products in real-time. It validates ecological claims, computes transparent EcoScores, and flags greenwashing risks.";
    }
    if (q.includes("install") || q.includes("extension") || q.includes("download") || q.includes("unpacked")) {
      return "Installing our extension is easy!\n\n1. Click the 'Download Extension' button on our page to fetch the ZIP archive.\n2. Extract the directory.\n3. Open chrome://extensions/ in Google Chrome and toggle 'Developer Mode' ON.\n4. Click 'Load unpacked' and select the extracted folder directory!";
    }
    if (q.includes("ecoscore") || q.includes("score")) {
      return "Our EcoScore engine runs a multi-tiered weighted matrix. It inspects material origin (recycled fibers vs virgin polymers), production electricity grids, fair trade labor certifications, packaging materials, product lifespan, and verifies claims to detect greenwashing.";
    }
    if (q.includes("store") || q.includes("website") || q.includes("platform") || q.includes("supported")) {
      return "EcoCart is built as a universal sustainability intelligence layer. Out of the box, it provides targeted DOM integration for major marketplaces including Amazon, Flipkart, Myntra, Ajio, Meesho, alongside any storefronts powered by Shopify or WooCommerce.";
    }
    if (q.includes("carbon") || q.includes("emission") || q.includes("lca")) {
      return "Our backend leverages climate-data pipelines compiled from primary environmental product declarations (EPDs) and greenhouse gas protocols. When you consult real-time analysis, the model references certified lifecycle databases to estimate emissions from raw materials, production, and shipping.";
    }
    if (q.includes("pay") || q.includes("free") || q.includes("cost") || q.includes("price")) {
      return "No. EcoCart is 100% free and open-source. Our mission is to democratize climate-impact transparency so millions of consumers can steer their shopping power towards environmentally aligned manufacturers without financial friction.";
    }
    if (q === "hi" || q === "hello" || q === "hey" || q.startsWith("hi ") || q.startsWith("hello ")) {
      return "Hello! 👋 I'm Eco 🌍, your climate-tech assistant. Ask me an FAQ question or type any product name (e.g., 'Nike sneakers', 'Apple iPhone') to analyze its sustainability!";
    }

    return null;
  };

  // Main submission handler for Chatbot
  const handleSendMessage = async (inputQuery: string) => {
    const cleanQuery = inputQuery.trim();
    if (!cleanQuery || isTyping) return;

    setChatInput("");
    setChatMessages((prev) => [...prev, { sender: "user", text: cleanQuery }]);
    setIsTyping(true);

    // 1. Check if user query matches static FAQ response
    const faqAnswer = findFAQResponse(cleanQuery);
    if (faqAnswer) {
      setTimeout(() => {
        setChatMessages((prev) => [...prev, { sender: "bot", text: faqAnswer }]);
        setIsTyping(false);
      }, 400);
      return;
    }

    // 2. Dynamic query -> Call /api/analyze backend
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName: cleanQuery }),
      });

      if (!res.ok) {
        let errorMsg = "Failed to analyze product.";
        try {
          const errData = await res.json();
          if (errData && errData.error) {
            errorMsg = errData.error;
          }
        } catch (_) {}
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: `⚠️ ${errorMsg}` },
        ]);
        return;
      }

      const data: ProductAnalysis = await res.json();

      if (!data || typeof data !== "object") {
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: "⚠️ Received an invalid response format from the server." },
        ]);
        return;
      }

      // Format analysis result cleanly
      let formattedText = `🌱 Sustainability Analysis for ${data.productName || cleanQuery}\n\n`;
      formattedText += `📊 EcoScore: ${data.ecoScore ?? "N/A"}/100\n`;
      formattedText += `🌍 Carbon Footprint: ${data.carbonKg ?? "N/A"} kg CO2e (${data.carbonLevel || "Unknown"} Level)\n`;
      if (data.greenwashingRisk) {
        formattedText += `🛡️ Greenwashing Risk: ${data.greenwashingRisk} Risk\n`;
      }
      if (data.greenwashingDetails) {
        formattedText += `ℹ️ ${data.greenwashingDetails}\n`;
      }

      if (Array.isArray(data.highlights) && data.highlights.length > 0) {
        formattedText += `\n✨ Highlights:\n`;
        data.highlights.forEach((h) => {
          formattedText += `• ${h}\n`;
        });
      }

      if (Array.isArray(data.insights) && data.insights.length > 0) {
        formattedText += `\n💡 Sustainability Insights:\n`;
        data.insights.forEach((ins) => {
          formattedText += `• ${ins}\n`;
        });
      }

      if (Array.isArray(data.alternatives) && data.alternatives.length > 0) {
        formattedText += `\n♻️ Recommended Alternatives:\n`;
        data.alternatives.forEach((alt) => {
          formattedText += `• ${alt.name || "Alternative"} (${alt.brand || "Eco Brand"}) - EcoScore: ${alt.ecoScore ?? "N/A"}/100, Carbon: ${alt.carbonKg ?? "N/A"} kg CO2e\n  Why better: ${alt.whyBetter || "Lower environmental footprint"}\n`;
        });
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: "bot", text: formattedText.trim() },
      ]);
    } catch (err: any) {
      console.error("Error connecting to /api/analyze:", err);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Network Error: Unable to connect to the backend server. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Scroll visibility states for the rounded pill floating navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Download states for the Hero CTA Button
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Dynamic Background Overrides
  const [problemBg, setProblemBg] = useState<string | null>(null);
  const [solutionBg, setSolutionBg] = useState<string | null>(null);
  const [impactBg, setImpactBg] = useState<string | null>(null);

  // Solution Flow Active Step
  const [activeSolutionStep, setActiveSolutionStep] = useState(0);

  // FAQ Accordion Active Index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Mobile menu open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selected educational product in the True Cost awareness section
  const [selectedEduProduct, setSelectedEduProduct] = useState("fleece");

  // Stats Tracker Simulation
  const [productsTracked, setProductsTracked] = useState(2410382);
  const [carbonSaved, setCarbonSaved] = useState(14812.4);

  // Active section state tracker for premium look & feel
  const [activeSection, setActiveSection] = useState<string>("");

  // IntersectionObserver effect to detect active sections
  useEffect(() => {
    const sections = [
      "problem-section",
      "solution-flow",
      "features-section",
      "installation-guide",
      "impact-section"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -45% 0px", // Nicely centered detector range
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Scroll direction and progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 80;
      
      setNavVisible(visible);
      setPrevScrollPos(currentScrollPos);

      // Progress bar percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollPos / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Fade out loading screen on mount
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoadingScreen(false);
    }, 1500);

    // Live counter ticking simulation for high conversion feel
    const interval = setInterval(() => {
      setProductsTracked(prev => prev + Math.floor(Math.random() * 2) + 1);
      setCarbonSaved(prev => prev + parseFloat((Math.random() * 0.1).toFixed(2)));
    }, 4000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(interval);
    };
  }, []);

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setDownloadSuccess(false);

    try {
      // Connect to the official ZIP file hosted on Google Drive using direct download URL
      const directDownloadUrl = "https://drive.google.com/uc?export=download&id=1AryeuLbCvHv-Zd2DB12OvGaL8HSdQq2s";
      
      const link = document.createElement("a");
      link.href = directDownloadUrl;
      link.setAttribute("download", "EcoCart.zip");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fast, responsive loading success feedback loop
      setTimeout(() => {
        setDownloadSuccess(true);
        setDownloading(false);
      }, 150);

      // Reset feedback back to original state after 4 seconds
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 4000);
    } catch (err) {
      console.error("Downloader integration failed: ", err);
      setDownloading(false);
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Score Color Helper
  const getScoreColor = (score: number) => {
    if (score >= 85) return { border: "border-green-500", text: "text-green-400", bg: "bg-green-500/10", glow: "shadow-green-500/20" };
    if (score >= 60) return { border: "border-yellow-500", text: "text-yellow-400", bg: "bg-yellow-500/10", glow: "shadow-yellow-500/20" };
    return { border: "border-rose-500", text: "text-rose-400", bg: "bg-rose-500/10", glow: "shadow-rose-500/20" };
  };

  // Risk Color Helper
  const getRiskBadgeColor = (risk: "Low" | "Medium" | "High") => {
    switch (risk) {
      case "Low":
        return "bg-green-500/10 text-green-400 border border-green-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
      case "High":
        return "bg-red-500/10 text-red-400 border border-red-500/20";
    }
  };

  return (
    <div id="root-viewport" className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-[#22C55E]/20 selection:text-[#0D9488]">
      
      {/* GLOW DECORATIONS */}
      <div className="eco-glow animate-pulse-slow" style={{ top: "-100px", right: "-100px" }} />
      <div className="eco-glow" style={{ bottom: "-100px", left: "-100px" }} />
      <div className="eco-glow" style={{ top: "800px", right: "50px", background: "radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)" }} />
      <div className="eco-glow" style={{ top: "2200px", left: "50px", background: "radial-gradient(circle, rgba(132, 204, 22, 0.08) 0%, transparent 70%)" }} />

      {/* STICKY/FLOATING SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#14B8A6] z-[100] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HEADER / NAVIGATION */}
      <nav 
        id="navbar" 
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[92%] max-w-5xl glass-nav border border-slate-200/50 backdrop-blur-md rounded-2xl transition-all duration-500 ease-in-out ${
          navVisible ? "top-3 sm:top-4 opacity-100 translate-y-0" : "-top-24 opacity-0 -translate-y-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15 sm:h-20">
            <div 
              className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer shrink-0" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <LogoIcon className="w-8 h-8 sm:w-11 sm:h-11 shrink-0" />
              <div>
                <span className="font-display font-bold text-base sm:text-xl text-slate-900 tracking-tight">EcoCart</span>
                <span className="block text-[6.5px] sm:text-[8px] font-sans tracking-[0.12em] sm:tracking-[0.2em] text-[#0B7A4C] uppercase font-bold leading-none mt-0.5 sm:mt-1 whitespace-nowrap">Detect. Analyze. Cart Sustainably.</span>
              </div>
            </div>
            
            {/* Desktop Navigation Link Menu items - 1024px+ only */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px]">
              {[
                { label: "Problem", sectionId: "problem-section" },
                { label: "Solution", sectionId: "solution-flow" },
                { label: "Features", sectionId: "features-section" },
                { label: "Installation Guide", sectionId: "installation-guide" },
                { label: "About", sectionId: "impact-section" },
              ].map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <button
                    key={link.sectionId}
                    onClick={() => handleScrollToSection(link.sectionId)}
                    className={`relative h-10 px-4 rounded-xl font-medium transition-all duration-350 cursor-pointer flex items-center justify-center select-none ${
                      isActive 
                        ? "text-emerald-700 font-semibold" 
                        : "text-slate-600 hover:text-emerald-600 hover:bg-slate-100/40"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-emerald-500/10 rounded-xl border border-emerald-500/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Desktop CTA Button - 1024px+ only */}
              <div className="hidden lg:block">
                <button 
                  id="header-cta-btn"
                  onClick={handleDownload}
                  className="relative inline-flex items-center gap-2 h-10 px-5 primary-btn rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer text-white tracking-wide select-none"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Try Extension</span>
                </button>
              </div>

              {/* Hamburger Button for Mobile/Tablet (<1024px) */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-emerald-700 transition-colors focus:outline-none cursor-pointer rounded-lg hover:bg-slate-100"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5.5 h-5.5 sm:w-6 sm:h-6" /> : <Menu className="w-5.5 h-5.5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Premium Full-Width Smooth Slide-Down Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop blur overlay beneath the bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 top-15 sm:top-20 bg-slate-900/15 backdrop-blur-sm z-[45] cursor-pointer"
                transition={{ duration: 0.25 }}
              />

              {/* Dropdown Container */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden absolute top-15 sm:top-20 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-xl overflow-hidden z-[50] rounded-b-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
              >
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 space-y-3">
                  {[
                    { label: "Problem", sectionId: "problem-section" },
                    { label: "Solution", sectionId: "solution-flow" },
                    { label: "Features", sectionId: "features-section" },
                    { label: "Installation Guide", sectionId: "installation-guide" },
                    { label: "About", sectionId: "impact-section" },
                  ].map((link) => {
                    const isActive = activeSection === link.sectionId;
                    return (
                      <button
                        key={link.sectionId}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setTimeout(() => handleScrollToSection(link.sectionId), 250);
                        }}
                        className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                          isActive 
                            ? "text-emerald-700 bg-emerald-500/5 font-extrabold border border-emerald-500/10" 
                            : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50 border border-transparent"
                        }`}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleDownload();
                      }}
                      className="w-full h-11 primary-btn text-white font-bold rounded-xl shadow-lg shadow-emerald-500/10 text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Try Extension</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* ================================================
          SECTION 1: HERO
          ================================================ */}
      <header id="hero-section" className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-36 md:pb-44 overflow-hidden isolate bg-white">
        
        {/* PREMIUM HIGH-RESOLUTION VECTOR ART BACKGROUND */}
        <div className="absolute inset-0 -z-10 select-none overflow-hidden pointer-events-none">
          {/* Base organic gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F5FBF8] via-[#FFFFFF] to-[#CFF7DF] opacity-90" />
          
          {/* Subtle gradient mesh glow blobs using the exact palette */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#A8D4FF]/20 via-[#6FD4C5]/10 to-transparent rounded-full filter blur-[120px] opacity-80 animate-pulse-slow" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#8FE3B0]/10 rounded-full filter blur-[100px] opacity-60" />
          <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[#A8D4FF]/10 rounded-full filter blur-[80px] opacity-40" />

          {/* CURVED SWEEPING WAVY LAYERS (BOTTOM OF HERO) */}
          <div className="absolute bottom-0 right-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg 
              viewBox="0 0 1440 320" 
              className="w-full h-auto min-h-[160px] md:min-h-[260px] scale-y-[1.15] origin-bottom opacity-90"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Layer 1 (Accent Blue transitioning to Accent Teal) */}
              <path 
                d="M0,240 C360,310 720,180 1080,270 C1240,310 1360,290 1440,240 L1440,320 L0,320 Z" 
                className="fill-[url(#eco-wave-grad-1)] opacity-30"
              />
              
              {/* Layer 2 (Accent Mint transitioning to Accent Green) */}
              <path 
                d="M0,180 C240,260 580,140 880,210 C1180,280 1320,180 1440,110 L1440,320 L0,320 Z" 
                className="fill-[url(#eco-wave-grad-2)] opacity-40"
              />
              
              {/* Layer 3 (Accent Teal transitioning to Accent Green - Crisp Front Layer) */}
              <path 
                d="M0,130 C320,200 640,10 960,80 C1120,110 1280,140 1440,170 L1440,320 L0,320 Z" 
                className="fill-[url(#eco-wave-grad-3)] opacity-45"
              />
              
              {/* Thin elegant flowing wave lines across the lower portion of the hero section */}
              <path 
                className="stroke-[#8FE3B0]/40 stroke-[1.5]" 
                d="M0,150 C320,220 640,30 960,100 C1120,130 1280,150 1440,180" 
                fill="none"
              />
              <path 
                className="stroke-[#6FD4C5]/30 stroke-[1]" 
                d="M0,210 C240,275 580,155 880,225 C1180,295 1320,195 1440,135" 
                fill="none"
              />
              <path 
                className="stroke-[#A8D4FF]/35 stroke-[1.2]" 
                d="M0,110 C400,180 700,-10 1000,60 C1180,100 1310,120 1440,90" 
                fill="none"
              />
              
              {/* Gradient defs matching user color palette */}
              <defs>
                <linearGradient id="eco-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A8D4FF" />
                  <stop offset="100%" stopColor="#6FD4C5" />
                </linearGradient>
                <linearGradient id="eco-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CFF7DF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8FE3B0" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8FE3B0" />
                </linearGradient>
                <linearGradient id="eco-wave-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5FBF8" stopOpacity="0.4" />
                  <stop offset="40%" stopColor="#6FD4C5" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8FE3B0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* SPARKLING STAR PARTICLES (Minimal eco-glows with precision) */}
          <div className="absolute top-[18%] left-[12%] w-1.5 h-1.5 bg-[#8FE3B0] rounded-full animate-pulse-slow opacity-60" />
          <div className="absolute top-[32%] right-[22%] w-2 h-2 bg-[#6FD4C5] rounded-full animate-pulse-slow opacity-50" />
          <div className="absolute top-[14%] right-[38%] text-[#8FE3B0]/40 text-[11px] animate-pulse-slow">✦</div>
          <div className="absolute top-[48%] left-[10%] text-[#6FD4C5]/30 text-base animate-pulse-slow">✦</div>
          <div className="absolute top-[22%] right-[11%] text-[#8FE3B0]/30 text-lg animate-pulse-slow">✦</div>
          <div className="absolute top-[58%] right-[32%] w-1.5 h-1.5 bg-[#A8D4FF] rounded-full animate-pulse-slow opacity-60" />

          {/* VERY SUBTLE FLOATING LEAVES (High resolution SVG vectors, soft feel) */}
          {/* Branch Top Right: Accent Green & Accent Mint gradient */}
          <div className="absolute top-[8%] right-[4%] md:right-[6%] w-20 h-20 md:w-28 md:h-28 opacity-65 z-10 animate-float-slow select-none pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 10 C80 20, 60 10, 50 25 C45 32, 48 45, 40 50 C30 55, 10 40, 5 60 C0 80, 20 90, 40 85 C60 80, 70 60, 80 40 C90 20, 95 15, 100 10 Z" fill="url(#leaf-brand-grad-new)" />
              <path d="M100 10 C70 40, 40 60, 40 85" className="stroke-white/30 stroke-[1]" />
              <defs>
                <linearGradient id="leaf-brand-grad-new" x1="100%" y1="10%" x2="0%" y2="90%">
                  <stop offset="0%" stopColor="#8FE3B0" />
                  <stop offset="60%" stopColor="#6FD4C5" />
                  <stop offset="100%" stopColor="#CFF7DF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Center-left Soft Leaf Drifter */}
          <div className="absolute top-[42%] left-[6%] md:left-[14%] w-10 h-10 md:w-14 md:h-14 opacity-50 z-10 animate-float-medium select-none pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[15deg]">
              <path d="M15,90 C35,75 55,70 65,50 C75,30 65,10 85,5 C70,25 55,45 35,55 C15,65 10,80 15,90 Z" fill="url(#leaf-drifter-new-1)" />
              <path d="M15,90 C45,65 65,35 85,5" className="stroke-white/40 stroke-[1.2]" />
              <defs>
                <linearGradient id="leaf-drifter-new-1" x1="15%" y1="90%" x2="85%" y2="5%">
                  <stop offset="0%" stopColor="#6FD4C5" />
                  <stop offset="100%" stopColor="#CFF7DF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Lower Right Soft Leaf */}
          <div className="absolute bottom-[24%] right-[10%] md:right-[18%] w-8 h-8 md:w-11 md:h-11 opacity-55 z-10 animate-float-slow select-none pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[35deg]">
              <path d="M10,85 C25,60 45,55 55,35 C65,15 55,5 75,0 C65,20 50,35 35,45 C20,55 10,75 10,85 Z" fill="url(#leaf-drifter-new-2)" />
              <path d="M10,85 C35,55 55,25 75,0" className="stroke-white/30 stroke-[1]" />
              <defs>
                <linearGradient id="leaf-drifter-new-2" x1="10%" y1="85%" x2="75%" y2="0%">
                  <stop offset="0%" stopColor="#8FE3B0" />
                  <stop offset="100%" stopColor="#CFF7DF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* HERO LEFT (CONTENT) */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="tracking-wide uppercase font-mono text-[10px]">Universal Commerce Layer</span>
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5.5xl md:text-6xl lg:text-6.5xl text-slate-900 tracking-tighter leading-[1.08] sm:leading-[1.05]">
                Shop smarter. <span className="text-gradient-primary">Buy greener.</span>
              </h1>
              
              <p className="text-slate-645 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                The modern e-commerce transparency extension. EcoCart instantly analyzes products, identifies greenwashing risk, and suggests circular variants in real-time.
              </p>
              
              {/* HERO CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button 
                  id="hero-primary-cta"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4.5 primary-btn text-white rounded-xl font-bold text-sm shadow-xl shadow-emerald-500/10 cursor-pointer disabled:opacity-90 transition-transform active:scale-95"
                >
                  {downloading ? (
                    <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
                  ) : downloadSuccess ? (
                    <CheckCheck className="w-4 h-4 text-emerald-300 animate-bounce shrink-0" />
                  ) : (
                    <Globe className="w-4 h-4 shrink-0" />
                  )}
                  <span>
                    {downloading 
                      ? "EcoCart.zip Downloading..." 
                      : downloadSuccess 
                        ? "Download Started" 
                        : "Download Extension — It's Free"}
                  </span>
                </button>
                
                <button 
                  id="hero-secondary-cta"
                  onClick={() => handleScrollToSection("solution-flow")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4.5 secondary-btn text-slate-800 rounded-xl font-bold text-sm cursor-pointer transition-transform active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-800 shrink-0" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* GRADING BADGES AND STARS (Fidelity to Screenshot 1) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-1">
                  {["A", "B", "C", "D"].map((letter) => (
                    <div 
                      key={letter} 
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs select-none shadow-sm ${
                        letter === "A" ? "bg-emerald-100 text-emerald-800" :
                        letter === "B" ? "bg-emerald-50 text-emerald-700" :
                        letter === "C" ? "bg-teal-100 text-teal-800" :
                        "bg-teal-50 text-teal-700"
                      }`}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Trusted by 50,000+ conscious shoppers</span>
                </div>
              </div>
 
              {/* FLOATING TRUST STAT */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 pt-4 border-t border-slate-200 max-w-md">
                <div>
                  <div id="live-tracked-counter" className="text-xl sm:text-2xl font-mono font-bold text-slate-900 text-gradient">
                    {productsTracked.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">Products Tracked</div>
                </div>
                <div className="hidden sm:block border-l border-slate-205 h-8" />
                <div>
                  <div id="live-carbon-counter" className="text-xl sm:text-2xl font-mono font-bold text-teal-600">
                    {carbonSaved.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kg
                  </div>
                  <div className="text-xs text-slate-500">CO2 Emissions Diverted</div>
                </div>
              </div>
            </div>

            {/* HERO RIGHT (VISUAL HERO CARD - GLASSMORPHISM MOCKUP) */}
            <div className="lg:col-span-6 relative flex justify-center w-full mt-4 lg:mt-0">
              {/* Premium ambient light effects behind extension preview */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-gradient-to-tr from-emerald-400/20 via-teal-400/15 to-amber-300/10 rounded-full blur-[85px] pointer-events-none animate-pulse-slow" />
              <div className="absolute top-[20%] right-[10%] w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] bg-emerald-300/25 rounded-full blur-[65px] pointer-events-none" />
              
              {/* Premium browser tab container with floating animation */}
              <motion.div 
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[460px] bg-white/80 backdrop-blur-xl p-4 sm:p-5.5 border-2 border-emerald-500/15 rounded-[28px] sm:rounded-[32px] shadow-[0_30px_70px_rgba(16,185,129,0.08)] hover:border-emerald-400/30 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(16,185,129,0.12)] animate-float-slow"
              >
                
                {/* Browser frame titlebar mocks */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/60">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 px-2 sm:px-3 py-0.5 bg-slate-100 rounded border border-slate-200/80 truncate max-w-[200px] sm:max-w-none">
                    amazon.com/patagonia-fleece-jacket
                  </div>
                  <div className="w-4 h-4 shrink-0" />
                </div>

                {/* Simulated Amazon Product Details */}
                <div className="grid grid-cols-12 gap-3 mb-4 opacity-50 select-none">
                  <div className="col-span-4 aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-3xl sm:text-4xl">
                    🧥
                  </div>
                  <div className="col-span-8 flex flex-col justify-center space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-11/12" />
                    <div className="h-3 bg-slate-200 rounded w-2/3" />
                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                  </div>
                </div>

                {/* Extension Overlay Slide out card (The centerpiece!) */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 sm:p-7 rounded-[24px] sm:rounded-[32px] border-2 border-emerald-500/20 shadow-[0_20px_50px_rgba(16,185,129,0.12)] hover:border-emerald-400/40 hover:shadow-[0_25px_60px_rgba(16,185,129,0.18)] transition-all duration-300">
                  <div className="flex justify-between items-start mb-4 sm:mb-5">
                    <div className="flex gap-2 sm:gap-2.5 items-center">
                      <div className="p-1.5 sm:p-2 bg-emerald-500/10 text-emerald-600 rounded-xl shadow-inner shrink-0">
                        <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black font-display text-slate-950 uppercase tracking-wider">EcoCart Active</h4>
                        <p className="text-[9px] sm:text-[10px] text-slate-650 font-semibold">Verifying Product Credentials</p>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono px-2 sm:px-2.5 py-0.5 rounded-full font-extrabold shadow-sm shrink-0">100% Verified</span>
                  </div>

                  <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center mb-4 sm:mb-5">
                    {/* Circle Score */}
                    <div className="col-span-5 flex justify-center">
                      <PremiumEcoScoreCircle score={92} size={78} strokeWidth={7} className="shadow-xl sm:hidden" />
                      <PremiumEcoScoreCircle score={92} size={88} strokeWidth={8} className="shadow-xl hidden sm:block" />
                    </div>
                    
                    {/* Key stats */}
                    <div className="col-span-7 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-slate-200/80 pb-1">
                        <span className="text-slate-600 font-medium">Carbon:</span>
                        <span className="font-bold text-emerald-600 font-mono text-[11px] sm:text-xs">Low (8.5 kg)</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-1">
                        <span className="text-slate-600 font-medium">Greenwash:</span>
                        <span className="font-bold text-emerald-600 font-mono text-[11px] sm:text-xs">Zero Detected</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">Alternatives:</span>
                        <span className="font-bold text-teal-600 font-mono text-[11px] sm:text-xs">3 Found</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights snippet */}
                  <div className="p-2.5 sm:p-3 bg-slate-50 rounded-lg border border-slate-100 text-[9.5px] sm:text-[10px] text-slate-600 leading-relaxed">
                    <p className="font-bold text-emerald-600 mb-0.5 sm:mb-1 flex items-center gap-1 font-display">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" /> Material Highlight:
                    </p>
                    Analyzed product has 100% recycled polyester fiber blends. Diverting up to 34% of traditional manufacturing heat release.
                  </div>
                </div>

                {/* Floating mini element */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 glass p-3 sm:p-4 border-slate-200/80 z-0 shadow-2xl rotate-3 sm:rotate-6 scale-90 sm:scale-100">
                  <div className="text-[11px] sm:text-xs text-slate-500 mb-1 sm:mb-2">Weekly Savings</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono">-14.2kg CO2e</div>
                  <div className="mt-2 sm:mt-4 w-full h-8 sm:h-12 bg-slate-100 rounded-md relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-500/15"></div>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </header>

      {/* ================================================
          SECTION 2: SUPPORTED STORES (BRAND SHOWCASE MARQUEE)
          ================================================ */}
      <section id="trust-section" className="py-20 bg-gradient-to-b from-[#FCFEFD] via-[#EEF9F1]/80 to-[#FCFEFD] relative overflow-hidden isolate border-b border-emerald-500/10">
        
        {/* Organic green slime-shaped backgrounds & soft glowing overlays */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-gradient-to-b from-[#FCFEFD] via-[#EEF9F1]/80 to-[#FCFEFD]">
          <div className="absolute top-[10%] left-[20%] w-[320px] h-[320px] bg-[#8FE3B0]/15 rounded-full filter blur-[70px] opacity-70 animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] bg-[#6FD4C5]/12 rounded-full filter blur-[60px] opacity-80" />
        </div>

        {/* Organic Green Slime/Wavy Divider Line at the bottom */}
        <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
          <svg viewBox="0 0 1440 70" fill="none" className="w-full h-auto min-h-[35px] opacity-90" preserveAspectRatio="none">
            <path 
              d="M0,32 C280,72 560,12 840,56 C1120,100 1280,48 1440,24 L1440,70 L0,70 Z" 
              fill="#10B981" 
              className="fill-emerald-500/15"
            />
            <path 
              d="M0,45 C320,85 640,25 960,65 C1200,105 1320,60 1440,40 L1440,70 L0,70 Z" 
              fill="#059669" 
              className="fill-emerald-600/20"
            />
            <path 
              d="M0,55 C240,15 480,75 720,35 C960,-5 1200,45 1440,15 L1440,70 L0,70 Z" 
              fill="#22C55E"
              className="fill-lime-450/10"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          
          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-950 tracking-tight text-gradient">
              Works Across Your Favorite Stores
            </h2>
            <p className="text-slate-900 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
              EcoCart seamlessly analyzes purchases across leading e-commerce platforms.
            </p>
          </div>

          {/* Infinite Moving Marquee Outer Container */}
          <div className="relative w-full py-6 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-[#FCFEFD] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-[#FCFEFD] after:to-transparent after:z-10">
            <div className="animate-marquee-continuous flex items-center gap-6 whitespace-nowrap">
              {/* Loop the items twice to ensure smooth seamless infinite loop */}
              {[1, 2].map((loopIdx) => (
                <div key={loopIdx} className="flex gap-6 items-center shrink-0">
                  {[
                    { name: "Amazon", color: "from-[#FF9900]/12 to-amber-500/[0.04] text-[#E08500] border-amber-500/30", glyph: "⌗" },
                    { name: "Flipkart", color: "from-[#2874F0]/12 to-[#2874F0]/[0.04] text-[#1E5CC2] border-[#2874F0]/30", glyph: "✦" },
                    { name: "Myntra", color: "from-[#FF3F6C]/12 to-pink-500/[0.04] text-[#D61F4D] border-pink-500/30", glyph: "❋" },
                    { name: "JioMart", color: "from-[#00529B]/12 to-[#00529B]/[0.04] text-[#00417B] border-[#00529B]/30", glyph: "🛒" },
                    { name: "Shopify", color: "from-[#95BF47]/12 to-[#7AAB1E]/[0.04] text-[#638C15] border-[#95BF47]/30", glyph: "🛍️" },
                    { name: "Ajio", color: "from-[#0F172A]/12 to-slate-800/[0.04] text-slate-950 border-slate-400", glyph: "◈" },
                    { name: "Meesho", color: "from-[#F43F5E]/12 to-rose-500/[0.04] text-[#CC2543] border-rose-500/30", glyph: "♥" },
                    { name: "Tata CLiQ", color: "from-[#DA251C]/12 to-red-500/[0.04] text-[#B8160E] border-red-500/30", glyph: "✸" },
                    { name: "Nykaa", color: "from-[#FC2779]/12 to-pink-600/[0.04] text-[#D1125A] border-pink-400/30", glyph: "🎀" },
                    { name: "Etsy", color: "from-[#D57200]/12 to-orange-500/[0.04] text-[#B05B00] border-orange-500/30", glyph: "✿" }
                  ].map((store, itemIdx) => (
                    <div 
                      key={`${loopIdx}-${itemIdx}-${store.name}`}
                      className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border-2 bg-gradient-to-r ${store.color} shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:border-emerald-500/40 cursor-default select-none`}
                    >
                      <span className="text-base font-extrabold opacity-95">{store.glyph}</span>
                      <span className="font-display font-black text-sm sm:text-base tracking-tight">
                        {store.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-mono text-slate-800 font-bold">
            <span className="flex items-center gap-1.5">
              <CheckCheck className="w-4 h-4 text-emerald-700 font-bold" /> Works with Shopify Stores
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCheck className="w-4 h-4 text-emerald-700 font-bold" /> Simple Uncompressed Code
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCheck className="w-4 h-4 text-emerald-700 font-bold" /> Strict Zero User Tracking
            </span>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 3: PROBLEM
          ================================================ */}
      <section id="problem-section" className="py-28 md:py-36 bg-gradient-to-b from-[#FCFEFD] via-[#F4FAF6] to-white relative overflow-hidden isolate border-b border-emerald-500/10">
        
        {/* Background override or default */}
        {problemBg ? (
          <div 
            className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-cover bg-center opacity-[0.09] transition-all duration-1000"
            style={{ backgroundImage: `url(${problemBg})` }}
          />
        ) : null}

        {/* Lush green backdrop glows */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#E6F4EA] via-[#8FE3B0]/10 to-transparent rounded-full filter blur-[100px] opacity-90 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#E8F5E9] via-[#6FD4C5]/8 to-transparent rounded-full filter blur-[80px] opacity-70" />
          <div className="absolute top-[25%] left-[15%] w-2 h-2 bg-emerald-400 rounded-full opacity-30 animate-ping" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-100/80 px-3 py-1 rounded-full inline-block">The Dark Side of Checkout</div>
            <h2 className="font-display font-black text-3.5xl sm:text-5.5xl text-slate-950 tracking-tighter leading-tight">
              Online Shopping Hides Environmental Costs
            </h2>
            <p className="text-slate-900 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-semibold">
              E-Commerce algorithms are optimized to trigger immediate impulse buys, hiding toxic petrochemical processing, microplastics release, and carbon emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEM_CARDS.map((card, i) => (
              <div 
                key={card.id} 
                className="group relative glass glass-interactive p-8 md:p-10 bg-white/95 border-emerald-500/10 hover:bg-[#EEF9F1]/40 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-350 transform hover:-translate-y-1.5 rounded-3xl"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity pointer-events-none" />
                
                <div className="relative space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-emerald-200 shadow-sm">
                    {i === 0 && <Database className="w-6 h-6" />}
                    {i === 1 && <AlertTriangle className="w-6 h-6" />}
                    {i === 2 && <BarChart3 className="w-6 h-6" />}
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2.5xl text-slate-950 tracking-tight transition-colors group-hover:text-emerald-900">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-semibold">
                    {card.description}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-200/80 flex gap-2.5 items-start">
                    <span className="text-[10px] font-mono text-emerald-850 bg-emerald-100 border-2 border-emerald-200 px-2 py-0.5 rounded-md font-black select-none">FACT</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-extrabold leading-snug">{card.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Problem comparison footer cards */}
          <div className="mt-14 glass p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 items-center shadow-lg">
            <div>
              <p className="text-slate-500 uppercase tracking-widest font-mono text-[10px] mb-2 font-bold">What you are shown:</p>
              <div className="flex gap-2 flex-wrap text-xs">
                <span className="bg-red-50 border border-red-105 px-3 py-1.5 rounded-lg text-red-700 font-semibold shadow-sm">💵 Low Price Hooks</span>
                <span className="bg-red-50 border border-red-105 px-3 py-1.5 rounded-lg text-red-700 font-semibold shadow-sm">⭐️ Star Ratings</span>
                <span className="bg-red-50 border border-red-105 px-3 py-1.5 rounded-lg text-red-700 font-semibold shadow-sm">📦 Overnight Delivery</span>
              </div>
            </div>
            <div>
              <p className="text-[#0D9488] uppercase tracking-widest font-mono text-[10px] mb-2 font-black">What EcoCart uncovers:</p>
              <div className="flex gap-2 flex-wrap text-xs">
                <span className="bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg text-emerald-850 font-bold shadow-sm">🌱 Raw Sustainability Score</span>
                <span className="bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-lg text-teal-850 font-bold shadow-sm font-mono">💨 Carbon Footprint Metrics</span>
                <span className="bg-lime-50 border border-lime-100 px-3 py-1.5 rounded-lg text-lime-850 font-bold shadow-sm">🔍 Greenwashing Risks</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 4: SOLUTION (VISUAL FLOW PIPELINE)
          ================================================ */}
      <section id="solution-flow" className="py-24 relative overflow-hidden isolate bg-[#F7FCF9]">
        
        {/* Background override or default */}
        {solutionBg ? (
          <div 
            className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-cover bg-center opacity-[0.09] transition-all duration-1000"
            style={{ backgroundImage: `url(${solutionBg})` }}
          />
        ) : null}

        {/* Light mint background with subtle glows */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-[#F7FCF9]">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#8FE3B0]/6 rounded-full filter blur-[60px] opacity-75" />
          <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-[#CFF7DF]/8 rounded-full filter blur-[70px] opacity-80" />
          <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-[#8FE3B0] rounded-full opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#0D9488] font-semibold">The Antidote To Blind Purchases</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Meet EcoCart
            </h2>
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              An intelligent, universal carbon overlay operating silently in your browser background.
            </p>
          </div>

          {/* Solution Flow steps */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
            
            {/* Visual connecting line */}
            <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-emerald-500/10 via-[#14B8A6]/20 to-emerald-500/10 z-0" />

            {[
              { label: "Visit Product Page", desc: "Browse your favorite e-commerce platforms.", emoji: "🛒", icon: ShoppingBag },
              { label: "Analyze Product", desc: "Automated retrieval of raw materials & supply chains.", emoji: "⚡", icon: Terminal },
              { label: "Generate EcoScore", desc: "Dynamic scores from 0-100 are calculated.", emoji: "📊", icon: BarChart3 },
              { label: "Detect Greenwashing", desc: "Flags misleading text or dubious claims.", emoji: "🛡️", icon: ShieldCheck },
              { label: "Suggest Alternatives", desc: "See better, low-carbon variants.", emoji: "💡", icon: Lightbulb },
              { label: "Better Decisions", desc: "Buy with verified climate awareness.", emoji: "🌍", icon: Globe }
            ].map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={step.label}
                  onClick={() => setActiveSolutionStep(idx)}
                  className={`relative z-10 p-4 transition-all cursor-pointer select-none group rounded-2xl ${
                    activeSolutionStep === idx 
                      ? "glass-accent shadow-lg shadow-emerald-500/[0.04]" 
                      : "glass hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="mx-auto mb-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-transform group-hover:scale-105">
                    {activeSolutionStep === idx ? (
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-50 text-[#14B8A6] flex items-center justify-center border border-slate-200/65 font-mono">
                        {idx + 1}
                      </div>
                    )}
                  </div>
                  
                  <h4 className={`text-sm font-extrabold leading-snug ${activeSolutionStep === idx ? "text-emerald-700" : "text-slate-650"}`}>
                    {step.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 sm:hidden md:block">Step {idx + 1}</p>
                </div>
              );
            })}
          </div>

          {/* Active Flow Step Details cards */}
          <div className="mt-8 glass p-6.5 max-w-3xl mx-auto flex gap-6 items-center flex-col md:flex-row shadow-lg border border-slate-200/60">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              {activeSolutionStep === 0 && <ShoppingBag className="w-7 h-7" />}
              {activeSolutionStep === 1 && <Terminal className="w-7 h-7" />}
              {activeSolutionStep === 2 && <BarChart3 className="w-7 h-7" />}
              {activeSolutionStep === 3 && <ShieldCheck className="w-7 h-7" />}
              {activeSolutionStep === 4 && <Lightbulb className="w-7 h-7" />}
              {activeSolutionStep === 5 && <Globe className="w-7 h-7" />}
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#0D9488] uppercase tracking-widest font-black">Deep Dive: Phase {activeSolutionStep + 1}</span>
              <h3 className="font-display font-extrabold text-xl text-slate-900 leading-tight">
                {[
                  "Integrating with Checkout Views",
                  "Anonymized Scraping & Material Retrieval",
                  "AI Multi-Criteria Scoring Algorithms",
                  "Text Pattern & Certificate Audit Checks",
                  "Pioneering Regenerative Recs Engine",
                  "Guaranteed Carbon Mitigation"
                ][activeSolutionStep]}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
                {[
                  "EcoCart tracks URL anchors seamlessly. When navigating into listing galleries on sites such as Amazon or Flipkart, our listener awakens to evaluate raw elements.",
                  "We fetch underlying fiber details, production grids, logistics configurations, and factory registries automatically. None of your local details are transmitted.",
                  "EcoScore compiles materials, assembly electricity grids, fair trade metrics, packaging compositions, and lifecycle estimates into a weighted score from 0 to 100.",
                  "Our language engine crawls claims for vague words like 'eco-conscious blends' without certified tracing IDs, immediately applying high-risk flags if deceptive indicators are met.",
                  "If a product contains high synthetic polymer concentrations, EcoCart recommends active, accessible, high-performance variants made of plant-based or organic compostable fibers.",
                  "Consumers can bypass fast-fashion chains, redirecting capital to climate-tech and circular design pioneers. Saving tons of CO2 globally inside the retail sphere."
                ][activeSolutionStep]}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 5: FEATURES (FIDELITY TO SCREENSHOT 2)
          ================================================ */}
      <section id="features-section" className="py-24 relative overflow-hidden isolate bg-white">
        
        {/* Variation D: White background with delicate eco-tech line patterns & soft green accents */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#EEF9F1]/40 rounded-full filter blur-[120px]" />
          
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="eco-grid-features" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.2" fill="#8FE3B0" />
                <path d="M30 0 L30 60 M0 30 L60 30" stroke="#8FE3B0" strokeWidth="0.5" strokeDasharray="3 3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eco-grid-features)" />
          </svg>
          
          <div className="absolute top-0 left-[15%] h-full w-[1px] bg-gradient-to-b from-transparent via-[#8FE3B0]/10 to-transparent" />
          <div className="absolute bottom-0 right-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-[#6FD4C5]/8 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#0D9488] font-black bg-emerald-100/60 px-3.5 py-1 rounded-full inline-block">CONSCIOUS CAPABILITIES</div>
            <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-950 tracking-tight">
              Everything you need to shop sustainably
            </h2>
            <p className="text-slate-900 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              Our intelligent shopping layers combine environmental verification, greenwash auditing, and instant product alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "AI EcoScore",
                desc: "Get an instant 0-100 sustainability rating for any product you browse.",
                icon: Leaf
              },
              {
                title: "Greenwashing Detection",
                desc: "AI flags misleading eco-claims and unsubstantiated green marketing.",
                icon: ShieldCheck
              },
              {
                title: "Carbon Impact Estimation",
                desc: "See estimated carbon footprint before you add to cart.",
                icon: Globe
              },
              {
                title: "Better Alternatives",
                desc: "Discover greener products with higher scores and lower impact.",
                icon: Lightbulb
              },
              {
                title: "Track Your Impact",
                desc: "Monitor your sustainable purchases and environmental savings over time.",
                icon: BarChart3
              }
            ].map((feature, idx, arr) => {
              const IconComponent = feature.icon;
              const isLast = idx === arr.length - 1;
              return (
                <div 
                  key={feature.title}
                  className={`relative overflow-hidden bg-white/90 backdrop-blur-xl p-8 sm:p-9 border-2 border-emerald-500/10 rounded-[28px] hover:border-emerald-400 hover:shadow-[0_22px_45px_rgba(16,185,129,0.1)] hover:bg-white transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between shadow-xl ${
                    isLast ? "md:col-span-2 md:flex-row md:items-center md:gap-8" : ""
                  }`}
                >
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform -skew-x-12 pointer-events-none select-none opacity-60" />
                  
                  {/* Soft gold and green accent border highlights */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/40 via-amber-400/30 to-emerald-500/40 opacity-70" />
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/[0.02] rounded-full pointer-events-none" />
                  
                  <div className={`space-y-4 ${isLast ? "md:flex-1" : ""}`}>
                    <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm">
                      <IconComponent className="w-6.5 h-6.5" />
                    </div>
                    
                    <h3 className="font-display font-black text-slate-950 text-xl tracking-tight mt-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-semibold">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 6.5: EDUCATIONAL AWARENESS SECTION (UNVEILING THE HIDDEN COSTS)
          ================================================ */}
      <section id="educational-awareness" className="py-24 bg-white relative overflow-hidden isolate">
        
        {/* Variation A: White background with soft wave accents */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-white">
          <div className="absolute inset-x-0 bottom-0 h-28 overflow-hidden opacity-[0.06]">
            <svg viewBox="0 0 1440 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,50 C320,100 640,-10 960,70 C1120,90 1280,40 1440,60 L1440,100 L0,100 Z" fill="#6FD4C5" />
              <path d="M0,40 C300,90 700,20 1100,80 L1440,50" stroke="#8FE3B0" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute inset-x-0 top-0 h-28 overflow-hidden opacity-[0.05] transform rotate-180">
            <svg viewBox="0 0 1440 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,50 C320,100 640,-10 960,70 C1120,90 1280,40 1440,60 L1440,100 L0,100 Z" fill="#8FE3B0" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header section with required typography */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-200/50 text-amber-800 text-[10px] uppercase font-mono tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Environmental Awareness Insight
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Online Shopping Hides Environmental Costs
            </h2>
            <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              E-commerce platforms are designed for convenience and impulse buying. Most shoppers never see the carbon emissions, packaging waste, and environmental impact created by each purchase. <span className="text-emerald-700 font-bold font-display">EcoCart</span> reveals those hidden costs before you check out.
            </p>
          </div>

          {/* Interactive Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left selector col - 4/12 */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Select a Standard Cart Item</span>
              
              <div className="space-y-3">
                {[
                  {
                    id: "fleece",
                    title: "The Fast Fashion Fleece",
                    category: "POLYMER TEXTILES",
                    emoji: "🧥",
                    color: "border-emerald-500/25 text-emerald-700 bg-emerald-50/20"
                  },
                  {
                    id: "tech",
                    title: "The Upgraded Smartphone",
                    category: "CONSUMER ELECTRONICS",
                    emoji: "📱",
                    color: "border-sky-500/25 text-sky-700 bg-sky-50/20"
                  },
                  {
                    id: "shoes",
                    title: "Synthetically Dyed Sneakers",
                    category: "ATHLETIC SPORTSWEAR",
                    emoji: "👟",
                    color: "border-amber-500/25 text-amber-700 bg-amber-50/20"
                  }
                ].map((item) => {
                  const isActive = selectedEduProduct === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedEduProduct(item.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                        isActive 
                          ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20" 
                          : "bg-white/40 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 ${
                        isActive ? "scale-110 rotate-3 bg-emerald-500/10" : "bg-slate-100 group-hover:scale-105"
                      }`}>
                        {item.emoji}
                      </div>
                      <div className="flex-1">
                        <span className="block text-[8px] font-mono text-slate-500 tracking-wider uppercase font-semibold">{item.category}</span>
                        <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">{item.title}</h4>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                        isActive ? "bg-emerald-500 border-transparent text-white" : "border-slate-200 text-slate-400 group-hover:border-slate-350"
                      }`}>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic educational tip badge */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 text-[11px] text-slate-500 flex items-start gap-2">
                <span className="text-amber-500 text-sm font-bold mt-0.5">ℹ</span>
                <p>Click on any product above to visualize the invisible carbon ledger that our extension reveals before checkout.</p>
              </div>

            </div>

            {/* Right presentation col - 8/12 */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Card A: Convenience Facade (Traditional storefront sight) */}
              <motion.div 
                key={`traditional-${selectedEduProduct}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-7 border-slate-200/80 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                {/* Decorative facade shine */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-300/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-mono tracking-widest text-blue-600 font-bold uppercase bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      Standard Retailer View
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Designed to convert</span>
                  </div>

                  <h4 className="font-display font-extrabold text-xl text-slate-900 mb-2">
                    {selectedEduProduct === "fleece" && "Recycled Retro Snap Fleece"}
                    {selectedEduProduct === "tech" && "Titanium Infinite Phone"}
                    {selectedEduProduct === "shoes" && "Air cushion Eco Runner"}
                  </h4>

                  {/* Simulated stars */}
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      {selectedEduProduct === "fleece" && "4.8 ★ (12,410 Reviews)"}
                      {selectedEduProduct === "tech" && "4.9 ★ (8,901 Reviews)"}
                      {selectedEduProduct === "shoes" && "4.7 ★ (412 Reviews)"}
                    </span>
                  </div>

                  {/* Standard details */}
                  <div className="space-y-3.5 text-xs text-slate-650">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-medium">Cart Price:</span>
                      <span className="font-bold text-slate-900">
                        {selectedEduProduct === "fleece" && "$49.99"}
                        {selectedEduProduct === "tech" && "$999.00"}
                        {selectedEduProduct === "shoes" && "$120.00"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-medium">Logistics Speed:</span>
                      <span className="font-bold text-blue-600 flex items-center gap-1">
                        ⚡ Free Next-Day shipping
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Checkout State:</span>
                      <span className="text-slate-500 text-[11px]">Invisible sustainability metrics</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed italic bg-slate-50/50 p-3 rounded-xl">
                  {selectedEduProduct === "fleece" && "“Looks premium and feels incredibly soft. Ideal for modern urban travel and camping.”"}
                  {selectedEduProduct === "tech" && "“The camera is flawless. High-speed transfers make content creation smoother than ever.”"}
                  {selectedEduProduct === "shoes" && "“Feather-light sole. Great color matching for responsive casual athletic training.”"}
                </div>
              </motion.div>

              {/* Card B: What Actually Happens (Revealed Carbon Ledger) */}
              <motion.div 
                key={`intercept-${selectedEduProduct}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="border-2 border-emerald-500/30 bg-gradient-to-b from-white to-emerald-50/[0.04] p-7 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden shadow-lg shadow-emerald-500/[0.02]"
              >
                {/* Brand glow overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-mono tracking-widest text-[#0D9488] font-black uppercase bg-[#0D9488]/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                      EcoCart AI layer
                    </span>
                    <span className="text-xs text-[#0D9488] font-bold font-mono">Unveiling Truth</span>
                  </div>

                  <h4 className="font-display font-extrabold text-xl text-slate-900 mb-2 flex items-center gap-2">
                    <LogoIcon className="w-5.5 h-5.5" />
                    Real Environmental Toll
                  </h4>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-50 border border-red-200 text-red-600 rounded-md font-bold uppercase">
                      Classified Footprint High
                    </span>
                  </div>

                  {/* Hidden costs breakdown */}
                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between border-b border-emerald-100/50 pb-2">
                      <span className="text-slate-500 font-medium">Carbon Expense:</span>
                      <span className="font-bold text-red-600 font-mono text-sm">
                        {selectedEduProduct === "fleece" && "32.4 kg CO₂e"}
                        {selectedEduProduct === "tech" && "79.2 kg CO₂e"}
                        {selectedEduProduct === "shoes" && "14.8 kg CO₂e"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100/50 pb-2">
                      <span className="text-slate-500 font-medium">Chemical Degradation:</span>
                      <span className="font-bold text-slate-900">
                        {selectedEduProduct === "fleece" && "8,200L Dye Runoff"}
                        {selectedEduProduct === "tech" && "E-Waste Ore Sludge"}
                        {selectedEduProduct === "shoes" && "Petro-adhesive Leach"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Synthetic Byproducts:</span>
                      <span className="font-bold text-slate-800">
                        {selectedEduProduct === "fleece" && "250g Microplastics"}
                        {selectedEduProduct === "tech" && "180g Mining Tailings"}
                        {selectedEduProduct === "shoes" && "400yr Landfill Decay"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-emerald-100 text-[11px] text-slate-650 leading-relaxed bg-emerald-500/5 p-4 rounded-xl relative">
                  <p className="font-semibold text-emerald-800 font-display mb-1">EcoCart Intelligence Insight:</p>
                  <p>
                    {selectedEduProduct === "fleece" && "Polyester utilizes petroleum oil extraction. EcoCart will recommend plant-based tencel alternatives saving up to 74% carbon."}
                    {selectedEduProduct === "tech" && "Silica purification grids utilize heavy cleanroom thermal ovens. Recommending verified refurbished editions saving almost 60kg emission burdens."}
                    {selectedEduProduct === "shoes" && "Synthetic footwear binders use high-toxic vulcanization glues. Recommending circular canvas shoes with natural organic rubber soles."}
                  </p>
                </div>

              </motion.div>
              
            </div>

          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 6: HOW IT WORKS SECTION (VIBRANT CHROMIUM GUIDE)
          ================================================ */}
      <section id="installation-guide" className="py-24 relative overflow-hidden isolate bg-gradient-to-b from-white via-[#EEF9F1]/40 to-[#F4FAF6] border-b border-emerald-500/10">
        
        {/* Lush green background glows */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full filter blur-[110px] opacity-70" />
          <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full filter blur-[90px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#0D9488] font-extrabold bg-[#E6F4EA] px-3.5 py-1 rounded-full inline-block">Developer Unpacked Installation</div>
            <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-950 tracking-tight">
              Simple 6-Step Installation Guide
            </h2>
            <p className="text-slate-900 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
              Load our raw unpackaged extension directory on Google Chrome in less than 60 seconds without complex keys or stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEP_GUIDES.map((step) => (
              <div 
                key={step.number}
                className="group relative bg-white/95 border-2 border-slate-150/80 p-7 rounded-[28px] space-y-5 hover:border-amber-400 hover:shadow-[0_15px_40px_rgba(245,158,11,0.22)] hover:bg-[#FFFDF6] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Golden/Amber glow on hover at the top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/[0.04] rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-750 flex items-center justify-center font-mono font-black text-sm border-2 border-amber-300/40 group-hover:bg-amber-150 group-hover:text-amber-850 group-hover:border-amber-400/60 transition-all duration-300">
                      0{step.number}
                    </div>
                    {step.codeSnippet && (
                      <span className="text-[10px] font-mono bg-amber-100 border border-amber-300/60 text-amber-900 px-3 py-1 rounded-lg leading-none font-extrabold shadow-sm">
                        {step.codeSnippet}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display font-black text-slate-950 text-xl group-hover:text-amber-950 transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-semibold group-hover:text-slate-950 transition-colors">
                    {step.description}
                  </p>
                </div>
                
                <div className="space-y-3 pt-3">
                  {/* Glowing border line at the bottom of the content that expands on hover */}
                  <div className="h-[2.5px] w-12 bg-gradient-to-r from-amber-450 via-amber-500 to-yellow-600 rounded-full group-hover:w-full transition-all duration-500 ease-out shadow-sm" />
                  
                  {step.number === 1 && (
                    <button 
                      onClick={handleDownload}
                      className="w-full h-11 primary-btn text-white font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Package</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Chrome Warning terminal badge */}
          <div className="mt-12 glass p-5 max-w-2xl mx-auto flex gap-3 text-xs sm:text-sm items-center bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-sm">
            <Terminal className="w-5.5 h-5.5 text-emerald-600 shrink-0" />
            <span className="text-slate-900 font-mono text-xs sm:text-sm font-semibold">
              <span className="text-emerald-700 font-black">env_log //</span> EcoCart Chrome Extension conforms strictly to Chromium Manifest V3 rules. Completely lightweight and secure.
            </span>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 8: IMPACT SECTION
          ================================================ */}
      <section id="impact-section" className="py-24 relative overflow-hidden isolate bg-white">
        
        {/* Background override or default */}
        {impactBg ? (
          <div 
            className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-cover bg-center opacity-[0.09] transition-all duration-1000"
            style={{ backgroundImage: `url(${impactBg})` }}
          />
        ) : null}

        {/* Soft blue-green glow */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-white">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#F3FCFC] rounded-full filter blur-[100px] opacity-90 animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[3%] w-[450px] h-[450px] bg-[#EEF9F1] rounded-full filter blur-[110px] opacity-85" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[#6FD4C5]/5 to-[#8FE3B0]/5 rounded-full filter blur-[70px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#0D9488] font-black bg-emerald-100/60 px-3 py-1 rounded-full inline-block">Collective Global Progress</div>
            <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-950 tracking-tight">
              Our Tracked Environmental Savings
            </h2>
            <p className="text-slate-900 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              Each product swapped for a regenerative circular alternative cuts down petrochemical heat and toxicity factors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div 
                key={stat.label}
                className="relative overflow-hidden bg-white/80 backdrop-blur-md p-8 border-2 border-emerald-500/10 rounded-[28px] hover:border-emerald-400 hover:shadow-[0_22px_45px_rgba(16,185,129,0.12)] hover:bg-white transition-all duration-300 transform hover:-translate-y-1.5 md:text-center flex flex-col justify-between shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/[0.02] rounded-full pointer-events-none" />
                
                <div className="space-y-4">
                  <h3 className="font-display font-black text-4xl sm:text-4.5xl text-slate-950 tracking-tight">
                    {i === 0 ? productsTracked.toLocaleString() : i === 1 ? `${carbonSaved.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}t` : stat.value}
                  </h3>
                  
                  <h4 className="font-display font-black text-xs sm:text-sm text-emerald-850 uppercase tracking-widest leading-relaxed">
                    {stat.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 9: COMPARE ROW TABLE
          ================================================ */}
      <section id="compare-section" className="py-20 sm:py-28 md:py-36 lg:py-44 relative overflow-hidden isolate">
        
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/eco-background.png')" }}
          >
             <div className="absolute inset-0 bg-white/[0.06] mix-blend-overlay" />
          </div>
          {/* Fallback gradients if image is missing */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FCFCFA] via-[#F5FFF8] to-[#FFF7E8] -z-20" />
          <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-[#A7F3D0] rounded-full blur-[140px] opacity-40 mix-blend-multiply -z-20" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#6EE7B7] rounded-full blur-[120px] opacity-30 mix-blend-multiply -z-20" />
          <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-[#86EFAC] rounded-full blur-[150px] opacity-20 -z-20" />
          
          {/* Slow floating eco icons */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [-12, -10, -12] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] opacity-10 hover:opacity-20 transition-opacity duration-700 text-emerald-900"
          >
            <Leaf className="w-32 h-32" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [45, 48, 45] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] right-[10%] opacity-10 hover:opacity-20 transition-opacity duration-700 text-emerald-900"
          >
            <Globe className="w-40 h-40" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[30%] opacity-[0.08] hover:opacity-15 transition-opacity duration-700 text-emerald-900"
          >
            <Sparkles className="w-24 h-24" />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-[40%] w-full -z-20">
            <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-full text-[#A7F3D0]">
              <path fill="currentColor" fillOpacity="0.2" d="M0,200 C300,300 700,100 1440,250 L1440,400 L0,400 Z" />
              <path fill="currentColor" fillOpacity="0.4" d="M0,250 C400,350 800,150 1440,300 L1440,400 L0,400 Z" />
              <path fill="currentColor" fillOpacity="0.6" d="M0,300 C500,400 900,200 1440,350 L1440,400 L0,400 Z" />
            </svg>
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-[1200px] w-full mx-auto mb-16 sm:mb-24 md:mb-28 space-y-4 sm:space-y-6 flex flex-col items-center"
          >
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-emerald-700 font-extrabold bg-[rgba(255,255,255,0.6)] backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full inline-block shadow-[0_4px_20px_rgba(34,197,94,0.15)] border border-white/50 hover:shadow-[0_4px_25px_rgba(34,197,94,0.3)] hover:bg-[rgba(255,255,255,0.8)] transition-all duration-300 cursor-default">
              Structural Paradigm Shift
            </div>
            
            {/* Section Title */}
            <h2 
              className="text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111827] tracking-[-0.02em] leading-[1.1] max-w-[1000px]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              Traditional VS <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">EcoCart</span> Shopping
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-medium mt-2 sm:mt-4">
              See how integrating an environmental intelligence layer directly changes our purchasing metrics.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block w-full max-w-[1180px] relative group/tableContainer"
          >
            {/* Animated Golden + Emerald Neon Border */}
            <div className="absolute inset-0 rounded-[38px] overflow-hidden opacity-80 group-hover/tableContainer:opacity-100 transition-opacity duration-700 z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[250%] bg-[conic-gradient(from_0deg,transparent_60%,#F8D86B_75%,#22C55E_85%,#A7F3D0_95%,#FFE08A_100%)] opacity-70 blur-[4px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F8D86B] via-[#22C55E] to-[#A7F3D0] opacity-30 mix-blend-overlay" />
            </div>

            {/* Glowing Effects */}
            <div className="absolute inset-0 rounded-[38px] shadow-[0_0_35px_rgba(34,197,94,0.22)] group-hover/tableContainer:shadow-[0_0_50px_rgba(34,197,94,0.35)] transition-shadow duration-700 pointer-events-none" />
            <div className="absolute inset-0 shadow-[0_40px_120px_rgba(0,0,0,0.08)] pointer-events-none rounded-[38px]" />

            {/* Inner Glass Container */}
            <div className="relative z-10 m-[2px] bg-[rgba(255,255,255,0.78)] backdrop-blur-[30px] rounded-[36px] overflow-hidden group-hover/tableContainer:bg-[rgba(255,255,255,0.85)] transition-colors duration-700">
              
              {/* Soft inner glow on container top edge */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20" />

              <table className="w-full text-left border-collapse relative z-10">
                <thead>
                  <tr className="bg-[rgba(255,255,255,0.4)] backdrop-blur-md h-[78px] border-b border-white/20">
                    <th className="px-10 py-0 text-[13px] tracking-widest text-slate-800 font-extrabold uppercase font-mono w-[30%] align-middle">
                      Utility Attribute
                    </th>
                    <th className="px-10 py-0 text-[13px] tracking-widest text-slate-500 font-bold uppercase font-mono w-[35%] align-middle">
                      Traditional Checkout
                    </th>
                    <th className="px-10 py-0 text-[13px] tracking-[0.1em] font-extrabold uppercase bg-emerald-500/[0.04] border-x-4 border-emerald-400/30 w-[35%] relative overflow-hidden align-middle">
                      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 to-transparent pointer-events-none" />
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 drop-shadow-sm font-mono">
                        EcoCart
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/40">
                  {COMPARISONS.map((row, index) => {
                    const Icon = 
                      row.metric === "Environmental Transparency" ? Shield :
                      row.metric === "Carbon Footprint Calculation" ? Leaf :
                      row.metric === "Greenwashing Verification" ? SearchCheck :
                      row.metric === "Eco-Friendly Alternatives" ? Recycle :
                      row.metric === "Lifecycle Highlight Analysis" ? BarChart : Lock;

                    return (
                      <motion.tr 
                        key={row.metric} 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                        className="group/row relative transition-all duration-350 ease-out cursor-pointer hover:bg-gradient-to-r hover:from-emerald-50/50 hover:via-white/70 hover:to-emerald-50/50 hover:-translate-y-[6px] hover:shadow-[0_15px_40px_rgba(34,197,94,0.12)]"
                      >
                        
                        
                        <td className="px-10 py-8 font-display font-bold text-slate-800 text-[20px] leading-snug relative z-10 group-hover/row:text-slate-950 transition-colors duration-350 align-middle">
                          <div className="absolute inset-0 border border-transparent group-hover/row:border-emerald-300/60 rounded-[24px] pointer-events-none transition-colors duration-350" />
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100/50 backdrop-blur-sm border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover/row:scale-110 group-hover/row:rotate-6 group-hover/row:shadow-[0_0_25px_rgba(34,197,94,0.4)] group-hover/row:bg-emerald-100 transition-all duration-350 ease-out">
                              <Icon className="w-5.5 h-5.5" strokeWidth={2.5} />
                            </div>
                            <span>{row.metric}</span>
                          </div>
                        </td>
                        
                        <td className="px-10 py-8 text-slate-500 font-medium text-[16px] leading-relaxed relative z-10 group-hover/row:text-slate-700 transition-all duration-350 bg-white/30 align-middle">
                          <div className="flex items-start gap-3 transform group-hover/row:-translate-y-0.5 transition-transform duration-350">
                            <AlertCircle className="w-5 h-5 shrink-0 text-slate-400 group-hover/row:text-slate-500 transition-colors duration-350 mt-0.5" />
                            <span>{row.traditional}</span>
                          </div>
                        </td>
                        
                        <td className="px-10 py-8 text-[#065F46] font-semibold bg-gradient-to-br from-emerald-500/[0.06] to-teal-500/[0.02] text-[16px] leading-relaxed relative z-10 group-hover/row:bg-emerald-50/80 transition-colors duration-350 align-middle">
                          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#F8D86B] to-[#22C55E]" />
                          <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover/row:opacity-100 transition-opacity duration-350 pointer-events-none shadow-[inset_0_0_40px_rgba(34,197,94,0.1)]" />
                          <div className="flex items-start gap-4 relative z-10">
                            <div className="w-7 h-7 shrink-0 rounded-full bg-white/80 backdrop-blur-sm border-2 border-emerald-400 flex items-center justify-center text-emerald-600 shadow-[0_0_12px_rgba(34,197,94,0.3)] group-hover/row:scale-110 group-hover/row:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-350 mt-0.5">
                              <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.8 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className="group-hover/row:animate-[pulse_0.4s_ease-out_1]"
                              >
                                <Check className="w-4 h-4" strokeWidth={3.5} />
                              </motion.div>
                            </div>
                            <span className="group-hover/row:text-[#022c20] transition-colors duration-350 text-[17px] font-bold tracking-tight">{row.ecoCart}</span>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* MOBILE VIEW: Premium Comparison Cards */}
          <div className="md:hidden space-y-8 w-full">
            {COMPARISONS.map((row, index) => {
              const Icon = 
                row.metric === "Environmental Transparency" ? Shield :
                row.metric === "Carbon Footprint Calculation" ? Leaf :
                row.metric === "Greenwashing Verification" ? SearchCheck :
                row.metric === "Eco-Friendly Alternatives" ? Recycle :
                row.metric === "Lifecycle Highlight Analysis" ? BarChart : Lock;

              return (
                <motion.div 
                  key={row.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-[rgba(255,255,255,0.85)] backdrop-blur-[25px] border border-emerald-500/20 rounded-[32px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative overflow-hidden group/mobileCard hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(34,197,94,0.15)] transition-all duration-350"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-300/30 to-transparent rounded-full blur-3xl -z-10 group-hover/mobileCard:from-emerald-400/40 transition-colors duration-500" />
                  
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm group-hover/mobileCard:scale-110 group-hover/mobileCard:bg-emerald-100 transition-all duration-350">
                      <Icon className="w-5.5 h-5.5" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-display font-extrabold text-[#111827] text-[20px] sm:text-[22px] leading-tight">{row.metric}</h3>
                  </div>
                  
                  <div className="space-y-5 relative z-10">
                    <div className="bg-white/60 rounded-[24px] p-5 sm:p-6 border border-slate-200 shadow-sm transition-transform duration-350 group-hover/mobileCard:translate-x-1">
                      <div className="text-[12px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">Traditional Checkout</div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 shrink-0 text-slate-400 mt-0.5" />
                        <span className="text-slate-600 font-medium text-[15px] leading-relaxed">{row.traditional}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50/90 to-teal-50/50 rounded-[24px] p-5 sm:p-6 border border-emerald-200 shadow-[0_8px_30px_rgba(34,197,94,0.08)] relative overflow-hidden transition-transform duration-350 group-hover/mobileCard:translate-x-1">
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#F8D86B] to-[#22C55E]" />
                      <div className="relative z-10">
                        <div className="text-[12px] font-mono font-bold text-emerald-700 uppercase tracking-widest mb-3">EcoCart</div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 shrink-0 rounded-full bg-white border-2 border-emerald-400 flex items-center justify-center text-emerald-600 shadow-[0_0_12px_rgba(34,197,94,0.3)] mt-0.5 group-hover/mobileCard:scale-110 transition-transform duration-350">
                            <Check className="w-3.5 h-3.5" strokeWidth={3.5} />
                          </div>
                          <span className="text-[#065F46] font-bold text-[16px] leading-relaxed">{row.ecoCart}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
      {/* ================================================
          SECTION 9B: THE FUTURE OF CONSCIOUS SHOPPING
          ================================================ */}
      <section className="py-24 bg-gradient-to-b from-white via-[#EEF9F1] to-[#FCFEFD] relative overflow-hidden isolate border-b border-emerald-500/10">
        
        {/* Lush minty & emerald glows for extra greenery */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
          <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#8FE3B0]/15 rounded-full filter blur-[90px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#CFF7DF]/20 rounded-full filter blur-[100px]" />
          <div className="absolute top-[30%] right-[15%] w-2.5 h-2.5 bg-emerald-400 rounded-full opacity-30 animate-ping" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-950 tracking-tight">
              The Future of Conscious Shopping
            </h2>
            <p className="text-slate-900 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
              We bridge the gap between intent and action, turning blind purchases into certified carbon offsets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto relative">
            
            {/* Center Decorative Leaf Connector */}
            <div className="hidden lg:flex absolute left-1/2 top-11 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-500 animate-pulse" />
            </div>

            {/* WITHOUT ECOCART */}
            <div className="bg-white/95 p-8 border-2 border-red-200 rounded-3xl flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(239,68,68,0.06)] hover:border-red-300 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 border border-red-200 shadow-sm">
                    <AlertTriangle className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-slate-950 text-lg sm:text-xl">Without EcoCart</h3>
                    <p className="text-[10px] text-red-700 font-mono tracking-wider font-bold">BLIND PURCHASING PARADIGM</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {[
                    "Price, ratings, and reviews are your only guide when comparing products.",
                    "Highly susceptible to deceptive greenwashing claims and vague buzzwords.",
                    "Completely blind to the true carbon footprint and lifecycle impact of your cart.",
                    "Extremely difficult to discover or compare genuine sustainable alternatives."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 text-left">
                      <div className="w-6 h-6 rounded-full bg-red-50/80 flex items-center justify-center border border-red-155 text-red-700 mt-0.5 shrink-0 flex-none select-none">
                        <span className="text-xs font-bold leading-none">×</span>
                      </div>
                      <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-semibold">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-200/60">
                <span className="text-xs font-mono font-bold text-red-700 bg-red-50/80 px-3 py-1 rounded-md border border-red-200/50">Blind Buying Process</span>
              </div>
            </div>

            {/* WITH ECOCART */}
            <div className="bg-white/95 p-8 border-2 border-emerald-500/20 rounded-3xl flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(16,185,129,0.18)] hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200 shadow-sm">
                    <Leaf className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-slate-950 text-lg sm:text-xl">With EcoCart</h3>
                    <p className="text-[10px] text-emerald-700 font-mono tracking-wider font-bold">CONSCIOUS INTELLIGENCE LAYER</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {[
                    "Instant AI EcoScores from 0 to 100 injected directly onto your product viewport.",
                    "Continuous real-time verification filters out dubious and misleading claims.",
                    "Clear, transparent estimated carbon emissions displayed upfront as you browse.",
                    "Intelligent, contextual suggestions highlight greener, verified variants instantly."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 text-left">
                      <div className="w-6 h-6 rounded-full bg-emerald-50/85 flex items-center justify-center border-2 border-emerald-300 text-emerald-700 mt-0.5 shrink-0 flex-none animate-pulse">
                        <CheckCheck className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-slate-950 text-sm sm:text-base leading-relaxed font-black">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-200/60">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">Regenerative Shopping Flow</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 10: FAQ SECTION
          ================================================ */}
      <section id="faq-section" className="py-24 relative overflow-hidden isolate bg-white">
        
        {/* Variation C: White background with soft blue gradient corner glow */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-white">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#F5F9FF] via-[#A8D4FF]/4 to-transparent rounded-full filter blur-[100px] opacity-90" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#F5F9FF] via-[#6FD4C5]/3 to-transparent rounded-full filter blur-[80px] opacity-70" />
          <div className="absolute top-[20%] left-[12%] w-1.5 h-1.5 bg-[#A8D4FF] rounded-full opacity-10 animate-pulse-slow" />
          <div className="absolute bottom-[30%] right-[12%] w-1.5 h-1.5 bg-[#6FD4C5] rounded-full opacity-[0.08]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#0D9488] font-semibold">Frequently Asked Questions</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Sustainability Clearance Hub
            </h2>
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Clarify your operational and data queries regarding how EcoCart processes metrics.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="glass rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 text-sm font-semibold text-slate-900 hover:text-emerald-700 focus:outline-none"
                >
                  <span className="font-display">{faq.question}</span>
                  <span className={`w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-xs text-slate-500 transform transition-transform duration-200 ${activeFaq === idx ? "rotate-90 text-emerald-600 font-bold" : ""}`}>
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-700 leading-normal text-sm sm:text-base border-t border-slate-150 bg-slate-50/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 11: FINAL CTA
          ================================================ */}
      <section id="final-cta" className="py-24 bg-gradient-to-t from-emerald-50 to-transparent relative overflow-hidden">
        
        {/* Glow behind */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass text-xs text-emerald-700 font-mono rounded-full font-bold">
            <span>Ready for Instant Deployment</span>
          </div>
          
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none max-w-2xl mx-auto">
            Start Shopping Sustainably Today
          </h2>
          
          <p className="text-slate-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Download EcoCart and make informed purchasing decisions. Bypassing synthetic greenwashing has never been more fluid.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
            <button 
              id="cta-primary-btn"
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 primary-btn text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-95 transition-transform"
            >
              <Download className="w-4 h-4" />
              <span>Download Extension</span>
            </button>
            
            <button 
              id="cta-secondary-btn"
              onClick={() => handleScrollToSection("installation-guide")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 secondary-btn text-slate-850 rounded-xl font-bold text-sm cursor-pointer active:scale-95 transition-transform"
            >
              <Terminal className="w-4 h-4" />
              <span>Installation Guide</span>
            </button>
          </div>

          <div className="pt-6 text-[10px] text-slate-500 font-mono">
            EcoCart © 2026 • 100% Secure • ZIP Contains Inline Fully Verified Javascript Code
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* BRAND */}
            <div className="space-y-4 col-span-1 sm:col-span-2">
              <div className="flex items-center gap-3">
                <LogoIcon className="w-9 h-9 shrink-0" />
                <div>
                  <span className="font-display font-bold text-base text-slate-900 tracking-tight">EcoCart</span>
                  <span className="block text-[7px] font-sans tracking-[0.2em] text-[#0B7A4C] uppercase font-bold leading-none mt-0.5 whitespace-nowrap">Detect. Analyze. Cart Sustainably.</span>
                </div>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 max-w-sm">
                A universal carbon footprints lookup table and greenwash protection plugin operating natively within the digital purchasing architecture.
              </p>
              <p className="text-[10px] text-slate-500">
                Helping modern shoppers make circular, ethical buying decisions across the globe. Powered by advanced Gemini AI algorithms.
              </p>
            </div>

            {/* LINKS COL 1 */}
            <div className="space-y-3">
              <h5 className="font-display font-semibold text-slate-900 text-[11px] uppercase tracking-widest text-teal-700 font-bold">Navigation</h5>
              <ul className="space-y-2 text-[11px] text-slate-600">
                <li><button onClick={() => handleScrollToSection("problem-section")} className="hover:text-emerald-700 transition-colors">The Problem</button></li>
                <li><button onClick={() => handleScrollToSection("solution-flow")} className="hover:text-emerald-700 transition-colors">Operational Solution</button></li>
                <li><button onClick={() => handleScrollToSection("features-section")} className="hover:text-emerald-700 transition-colors">Core Features</button></li>
                <li><button onClick={() => handleScrollToSection("installation-guide")} className="hover:text-emerald-700 transition-colors">Unpacked Loading</button></li>
              </ul>
            </div>

            {/* LINKS COL 2 */}
            <div className="space-y-3">
              <h5 className="font-display font-semibold text-slate-900 text-[11px] uppercase tracking-widest text-teal-700 font-bold">Resources</h5>
              <ul className="space-y-2 text-[11px] text-slate-600">
                <li><button onClick={() => handleScrollToSection("faq-section")} className="hover:text-emerald-700 transition-colors">FAQ Registry</button></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Privacy Charter</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Audit Methodology</a></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <div>
              EcoCart © 2026. Made with carbon-neutral design guidelines.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-emerald-700 transition-colors">Sitemap</a>
              <span>•</span>
              <a href="#" className="hover:text-emerald-750" style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
                <span>Certified Climate Solution</span> <Heart className="w-2.5 h-2.5 fill-current text-rose-505" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING CHATBOT / MASCOT WIDGET */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
        {/* Chat Window */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.85, y: 30, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="mb-4 w-[calc(100vw-32px)] sm:w-[380px] max-w-[380px] h-[min(520px,calc(100dvh-115px))] bg-white/85 backdrop-blur-xl border-2 border-emerald-500/15 rounded-[24px] shadow-[0_25px_60px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600/90 via-emerald-600 to-teal-700/90 backdrop-blur-md p-4 text-white flex items-center justify-between border-b border-emerald-500/10">
                <div className="flex items-center gap-3">
                  <EarthMascot size={38} isFloating={false} isInteractive={false} isWaving={true} />
                  <div>
                    <h4 className="font-display font-black text-sm leading-tight flex items-center gap-1">
                      Eco <span className="text-xs">🌍</span>
                    </h4>
                    <span className="text-[10px] text-emerald-100/95 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AI Sustainability Guide
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setChatOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white/80 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message History */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-white/95 via-emerald-50/20 to-white/95 scroll-smooth">
                {chatMessages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex gap-2 items-start ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.sender === "bot" && (
                      <div className="shrink-0 mt-0.5">
                        <EarthMascot size={26} isFloating={false} isInteractive={false} isWaving={false} />
                      </div>
                    )}
                    <motion.div 
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`max-w-[78%] rounded-[20px] p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-semibold shadow-sm border ${
                        msg.sender === "user" 
                          ? "bg-emerald-600 text-white rounded-br-none border-emerald-500 shadow-emerald-600/10" 
                          : "bg-white text-slate-900 rounded-bl-none border-emerald-100 shadow-slate-200/50"
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-2 items-center justify-start">
                    <div className="shrink-0">
                      <EarthMascot size={26} isFloating={false} isInteractive={false} isWaving={false} />
                    </div>
                    <div className="bg-white text-slate-500 border border-emerald-100 rounded-[20px] rounded-bl-none px-4 py-3 text-xs flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
                <div ref={chatMessagesEndRef} />
              </div>

              {/* Suggestions */}
              <div className="p-2.5 border-t border-emerald-500/10 bg-white/90 flex gap-2 overflow-x-auto select-none no-scrollbar">
                {[
                  "What is EcoCart?",
                  "How do I install the extension?",
                  "What is EcoScore?",
                  "Which shopping websites are supported?",
                  "How is Carbon Impact calculated?",
                  "Is my data private?"
                ].map((sug) => (
                  <button
                    key={sug}
                    onClick={() => handleSendMessage(sug)}
                    disabled={isTyping}
                    className="text-[10px] sm:text-xs font-bold bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-500/10 hover:border-emerald-300 text-emerald-800 rounded-full px-3.5 py-1.5 cursor-pointer whitespace-nowrap transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sug}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(chatInput);
                }} 
                className="p-3 border-t border-emerald-500/10 bg-white flex gap-2"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask Eco a question or analyze a product..."
                  disabled={isTyping}
                  className="flex-1 bg-slate-50 border-2 border-slate-200/60 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 focus:outline-none rounded-xl px-3.5 py-2 text-xs font-semibold disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isTyping || !chatInput.trim()}
                  className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center cursor-pointer hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/10 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center cursor-pointer group transition-all duration-300"
        >
          {/* Soft ambient green glow */}
          <div className="absolute inset-2 sm:inset-4 rounded-full bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/30 transition-all duration-300 animate-pulse" />
          
          <EarthMascot 
            size={chatOpen ? 60 : 90} 
            isFloating={!chatOpen} 
            isInteractive={false} 
            isWaving={false} 
            className="relative z-10 drop-shadow-2xl"
          />

          {/* Tooltip: Hi! I'm Eco 🌍 */}
          <div className="hidden sm:flex absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-950/90 text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-slate-800 items-center gap-1 backdrop-blur-sm z-30">
            <span>Hi! I'm Eco</span> 🌍
          </div>
        </motion.button>
      </div>

      {/* ================================================
          PREMIUM INITIAL LOADING SCREEN OVERLAY
          ================================================ */}
      <AnimatePresence>
        {loadingScreen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#FCFEFD] z-[9999] flex flex-col items-center justify-center text-center p-6 overflow-hidden"
          >
            {/* Green accent radial gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-100/40 blur-[120px]" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-50/50 blur-[120px]" />
            </div>

            <div className="space-y-16 max-w-2xl relative z-10 scale-110 md:scale-125">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative flex justify-center"
              >
                <div className="absolute inset-0 bg-emerald-500/15 rounded-full blur-3xl animate-pulse-slow w-64 h-64 -left-8 -top-8" />
                <div className="absolute inset-0 bg-emerald-300/10 rounded-full blur-2xl w-48 h-48 left-8 top-8" />
                <LogoIcon className="w-48 h-48 md:w-56 md:h-56 relative z-10 animate-float text-emerald-600 drop-shadow-2xl" />
              </motion.div>
              
              <div className="space-y-6">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-display font-extrabold text-5xl md:text-6xl text-slate-900 tracking-tight"
                >
                  EcoCart
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg font-mono tracking-[0.2em] text-[#0B7A4C] uppercase font-bold"
                >
                  Detect. Analyze. Cart Sustainably.
                </motion.p>
              </div>

              <div className="w-80 h-2 md:w-96 md:h-3 bg-emerald-50 rounded-full mx-auto overflow-hidden relative shadow-inner">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-40 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.5 }}
                className="text-sm md:text-base text-emerald-800/70 font-mono font-medium"
              >
                Auditing supply carbon metrics...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
