# 🌿 EcoCart — Detect. Analyze. Cart Sustainably.

[![Framework](https://img.shields.io/badge/Framework-React_18--Vite-61DAFB.svg?style=for-the-badge&logo=react)](https://react.dev)
[![Backend](https://img.shields.io/badge/Backend-Express.js-000000.svg?style=for-the-badge&logo=express)](https://expressjs.com)
[![Model](https://img.shields.io/badge/AI_Model-Gemini_3.5_Flash-4A90E2.svg?style=for-the-badge&logo=google-gemini)](https://ai.google.dev/)

> **🏆 Sustainable E-Commerce:** An AI-powered full-stack workspace and dynamic browser extension designed to expose greenwashing tactics in real-time, helping shoppers make genuinely sustainable choices.

---

## 💡 The Problem & Our Solution

### The Greenwashing Epidemic 💸
E-commerce brands frequently use misleading terms like *"all-natural"*, *"eco-friendly"*, and *"biodegradable"* without verified certification. This deceptive practice—known as **greenwashing**—tricks eco-conscious consumers into paying premiums for products that continue to harm the planet.

### The EcoCart Solution ⚡
**EcoCart** acts as a guardrail for green shopping. It combines a **rich web workspace** with a **packaged Chrome Extension** that analyzes product listings directly on e-commerce pages. By analyzing product data, ingredient/materials logs, and carbon claims using **Gemini**, it strips away the marketing fluff and reveals the true environmental cost of your purchases.

---

## 🎨 Key Features

*   **🔍 Instant Product Verification:** Paste any product link or descriptive text to receive an objective, multi-point eco-authenticity scorecard.
*   **🧩 Custom Chrome Extension Builder:** Downloader builds a dynamic, pre-configured browser extension (`EcoCart.zip`) customized with your preferred analysis parameters.
*   **⚡ AI-Powered Greenwashing Detector:** Flags 7 major greenwashing sins (Vagueness, No Proof, Hidden Trade-offs, Fibbing, Lesser of Two Evils, etc.) using Gemini LLM.
*   **🌱 Carbon & Material Decoders:** Instantly translates complex chemical compositions or carbon claims into clear, human-readable impact summaries.
*   **🔄 Instant Eco-Alternatives:** Proposes verified, non-greenwashed alternatives with direct links if the analyzed product is flagged as highly misleading.

---

## 🏗️ System Architecture

EcoCart is designed with a robust, modern full-stack decoupled pipeline to handle serverless deployments effortlessly.

```text
                  ┌──────────────────────────────────────────────┐
                  │              Browser / Client                │
                  │  (React 18 SPA + Custom Chrome Extension)    │
                  └──────────────┬───────────────────▲───────────┘
                                 │                   │
                     User Inputs │                   │ Analysis Results,
                     & API Calls │                   │ Custom ZIP Download
                                 ▼                   │
                  ┌──────────────────────────────────┴───────────┐
                  │             Vercel Serverless                │
                  │           (Express API Layer)                │
                  └──────────────┬───────────────────▲───────────┘
                                 │                   │
              Identify Claims &  │                   │ Structure JSON
              Analyze Semantics  │                   │ Responses
                                 ▼                   │
                  ┌──────────────────────────────────┴───────────┐
                  │             Google Gemini API                │
                  │            (Gemini 3.5 Flash)                │
                  └──────────────────────────────────────────────┘
```

### Architectural Breakdown:
1.  **Frontend (React 18 & Vite):** A fluid, highly responsive single-page application built using Tailwind CSS. It communicates asynchronously with our serverless API endpoints to render analytics dashboards, run simulation benchmarks, and bundle customizable browser extensions.
2.  **Backend (Express API Server):** Configured for serverless hosting on Vercel. It implements high-performance endpoints `/api/analyze` and `/api/download-extension` to guard secrets and maintain processing offload.
3.  **The AI Core (Gemini 3.5 Flash):** Interrogates product metadata. By operating with customized system instructions and outputting clean JSON structures, it yields highly structured eco-score cards.
4.  **Chrome Extension Pipeline:** Generates a real-time configured manifest, background workers, and page injectors. When downloaded, it directly intercepts e-commerce sites to highlight materials inline.

---

## 🛠️ Technology Stack

*   **Core Languages:** TypeScript, HTML5, CSS3 (Tailwind CSS)
*   **Frontend Library:** React 18 with Vite build tooling
*   **Backend Server:** Express.js (Node.js)
*   **Artificial Intelligence:** Gemini 3.5 SDK (`@google/genai`)
*   **Hosting & CI/CD:** Vercel (Serverless Functions)
*   **Extension Generation:** Dynamic `adm-zip` compression stream

---

## 📋 Installation & Local Setup

Get EcoCart running locally on your machine in under 2 minutes:

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18.x or higher)
*   An [API Key from Google AI Studio](https://aistudio.google.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/AtharvCodingHub-888/ECOINTERCEPT-AI-GREENER-SHOPPING.git
cd ECOINTERCEPT-AI-GREENER-SHOPPING
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

### 4. Run the Development Server
```bash
npm run dev
```
The server will boot and serve the client at `http://localhost:3000`.

---

## 📦 Vercel Deployment Architecture

To host this hybrid Full-Stack / Vite SPA on Vercel as serverless functions, the project utilizes a optimized `/api` routing map (`vercel.json`):

```json
{
  "version": 2,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/index.ts"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The server dynamically loads Vite middleware during local development but bypasses it during high-concurrency production runs, binding to Vercel's edge network for incredibly fast cold-starts.

---

## 🧩 Installing the Generated Chrome Extension

1.  Open the web dashboard and click **Download Extension**.
2.  Extract the downloaded `EcoCart.zip` file onto your computer.
3.  Open Google Chrome and navigate to `chrome://extensions/`.
4.  Enable **Developer Mode** by toggling the switch in the upper-right corner.
5.  Click the **Load unpacked** button in the upper-left corner.
6.  Select the directory where you extracted the `EcoCart` folder.
7.  *Voila!* You can now browse your favorite shopping sites with EcoCart active.

---

## 🛡️ License & Acknowledgments
Distributed under the MIT License. Developed with pride for the sustainability hackathon track. Powered by Google Gemini and designed to secure a transparent, greener tomorrow. 🌿
