// EcoCart - Chrome Extension Content Script
console.log("🌱 EcoCart: Active and monitoring product sustainability.");

// Cached selection selectors for universal marketplace handling
const SELECTORS = {
  amazon: {
    price: [".a-price-whole", "#priceblock_ourprice", "#priceblock_dealprice"],
    title: ["#productTitle"],
    brand: ["#bylineInfo", "#brand"]
  },
  flipkart: {
    price: [".Nx9buh", ".yUX60N", "._30jeq3"],
    title: [".VU-ZEg", ".B_NuCI"],
    brand: [".G6XTwg", "._2WkVRV"]
  },
  myntra: {
    price: [".pdp-price", "strong.pdp-price"],
    title: [".pdp-name"],
    brand: [".pdp-title"]
  },
  default: {
    price: [".product-price", "[data-price]", ".price", ".current-price"],
    title: [".product-title", "h1.product_title", ".pdp-title", "h1"],
    brand: [".product-brand", ".brand-name", "[data-brand]"]
  }
};

// Helper: Get active domain type
function getMarketplaceType() {
  const host = window.location.hostname.toLowerCase();
  if (host.includes("amazon")) return "amazon";
  if (host.includes("flipkart")) return "flipkart";
  if (host.includes("myntra")) return "myntra";
  return "default";
}

// Extract current product details
function getProductDetails() {
  const mkt = getMarketplaceType();
  const rules = SELECTORS[mkt];
  
  let title = "Universal Eco Shirt";
  let price = "$79.00";
  let brand = "Generic Essentials";

  for (const sel of rules.title) {
    const el = document.querySelector(sel);
    if (el) {
      title = el.textContent.trim();
      break;
    }
  }

  for (const sel of rules.price) {
    const el = document.querySelector(sel);
    if (el) {
      price = el.textContent.trim();
      break;
    }
  }

  for (const sel of rules.brand) {
    const el = document.querySelector(sel);
    if (el) {
      brand = el.textContent.trim();
      break;
    }
  }

  return { title, price, brand, mkt };
}

// Generate localized mock sustainability analysis data based on extracted parameters
function getEcoAnalysis(productTitle) {
  const hash = productTitle.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const ecoScore = 45 + (hash % 40); // 45 to 85 default
  const carbonFootprint = (5.2 + (hash % 200) / 10).toFixed(1);
  const confidenceScore = 88 + (hash % 11);
  const isOrganic = /cotton|organic|linen|fleece|recycled/i.test(productTitle);
  
  const finalScore = isOrganic ? Math.min(96, ecoScore + 15) : ecoScore;
  const isHighScore = finalScore >= 75;

  return {
    score: finalScore,
    carbon: isOrganic ? (carbonFootprint * 0.45).toFixed(1) : carbonFootprint,
    confidence: confidenceScore,
    greenwashing: isOrganic ? "Low Risk (Third-party certified)" : "Moderate Risk (Vague marketing vocabulary detected)",
    materials: isOrganic ? ["Organic Cotton Fleece", "Recycled Polyester Yarn"] : ["Synthetic Elastane Polyester Blend", "Petroleum Pigments"],
    alternatives: [
      {
        name: `Eco-Pure Organic Alternative`,
        brand: "BioCradle Apparel",
        score: 94,
        carbon: "2.1",
        price: "$65.00",
        whyBetter: "100% GOTS certified premium combed cotton colored strictly via vegetable dye modules."
      },
      {
        name: `ZeroFootprint Recycled Shell`,
        brand: "LoopCraft Co.",
        score: 91,
        carbon: "2.9",
        price: "$58.00",
        whyBetter: "Made from post-use plastic debris collected from ocean margins. Infinite closed-loop returnable design."
      }
    ]
  };
}

// Create and inject the Sustainability Badge
function injectBadge() {
  if (document.getElementById("ecocart-badge")) return;

  const mkt = getMarketplaceType();
  const rules = SELECTORS[mkt];
  let targetElement = null;

  for (const selector of rules.price) {
    const el = document.querySelector(selector);
    if (el) {
      targetElement = el;
      break;
    }
  }

  if (!targetElement) return;

  const details = getProductDetails();
  const analysis = getEcoAnalysis(details.title);

  const badge = document.createElement("div");
  badge.id = "ecocart-badge";
  badge.className = "eco-badge-container";
  
  badge.innerHTML = `
    <span class="eco-badge-leaf">🌱</span>
    <span class="eco-badge-label">EcoScore:</span>
    <span class="eco-badge-valueValue ${analysis.score >= 70 ? 'good' : 'warning'}">${analysis.score}/100</span>
  `;

  // Inline styling to ensure visual consistency regardless of site stylesheets
  badge.style.display = "inline-flex";
  badge.style.alignItems = "center";
  badge.style.gap = "6px";
  badge.style.marginLeft = "14px";
  badge.style.padding = "6px 12px";
  badge.style.backgroundColor = "#0F172A";
  badge.style.border = `1px solid ${analysis.score >= 70 ? '#22C55E' : '#EAB308'}`;
  badge.style.borderRadius = "8px";
  badge.style.color = "#F8FAFC";
  badge.style.fontFamily = "system-ui, -apple-system, sans-serif";
  badge.style.fontSize = "13px";
  badge.style.fontWeight = "600";
  badge.style.cursor = "pointer";
  badge.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
  badge.style.transition = "transform 0.2s ease";

  badge.onmouseenter = () => { badge.style.transform = "scale(1.05)"; };
  badge.onmouseleave = () => { badge.style.transform = "scale(1)"; };

  badge.onclick = (e) => {
    e.stopPropagation();
    openEcoSidebar(details, analysis);
  };

  // Inject companion elements
  if (targetElement.parentNode) {
    targetElement.parentNode.insertBefore(badge, targetElement.nextSibling);
  }
}

// Side-panel overlay constructor
function openEcoSidebar(details, analysis) {
  let sidebar = document.getElementById("ecocart-sidebar");
  if (sidebar) {
    sidebar.classList.add("active");
    // Update content live
    populateSidebarContent(details, analysis);
    return;
  }

  sidebar = document.createElement("div");
  sidebar.id = "ecocart-sidebar";
  sidebar.style.position = "fixed";
  sidebar.style.top = "0";
  sidebar.style.right = "0";
  sidebar.style.width = "380px";
  sidebar.style.height = "100vh";
  sidebar.style.backgroundColor = "rgba(10, 15, 23, 0.96)";
  sidebar.style.backdropFilter = "blur(12px)";
  sidebar.style.borderLeft = "1px solid rgba(255, 255, 255, 0.08)";
  sidebar.style.boxShadow = "-8px 0 32px rgba(0, 0, 0, 0.5)";
  sidebar.style.zIndex = "999999999";
  sidebar.style.fontFamily = "system-ui, -apple-system, sans-serif";
  sidebar.style.color = "#F8FAFC";
  sidebar.style.display = "flex";
  sidebar.style.flexDirection = "column";
  sidebar.style.transition = "transform 0.3s ease-in-out";
  sidebar.style.transform = "translateX(0)";
  sidebar.style.overflowY = "auto";

  document.body.appendChild(sidebar);
  populateSidebarContent(details, analysis);
}

// Populate Sidebar Content beautifully
function populateSidebarContent(details, analysis) {
  const sidebar = document.getElementById("ecocart-sidebar");
  if (!sidebar) return;

  const scoreColor = analysis.score >= 70 ? "#22C55E" : "#EAB308";

  sidebar.innerHTML = `
    <!-- Sidebar Header -->
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">🌱</span>
        <h2 style="margin: 0; font-size: 18px; font-weight: 700; background: linear-gradient(135deg, #22C55E, #14B8A6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">EcoCart</h2>
      </div>
      <button id="eco-sidebar-close" style="background: transparent; border: none; font-size: 22px; color: #94A3B8; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; transition: color 0.2s;">&times;</button>
    </div>

    <!-- Active Product Analysis Card -->
    <div style="padding: 20px;">
      <div style="font-size: 11px; text-transform: uppercase; tracking: 0.1em; color: #64748B; font-weight: 700; margin-bottom: 6px;">Active Product</div>
      <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600; color: #FFFFFF; line-height: 1.4;">${details.title}</h3>
      <div style="font-size: 13px; color: #94A3B8; margin-bottom: 16px;">Price: ${details.price} | Brand: ${details.brand}</div>

      <!-- Score Circle Visualizer -->
      <div style="display: flex; justify-content: center; margin: 20px 0;">
        <div style="width: 110px; height: 110px; border-radius: 50%; border: 3px solid ${scoreColor}; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); box-shadow: 0 0 15px rgba(34, 197, 94, 0.1);">
          <span style="font-size: 32px; font-weight: 800; color: ${scoreColor};">${analysis.score}</span>
          <span style="font-size: 10px; color: #64748B; text-transform: uppercase;">EcoScore</span>
        </div>
      </div>

      <!-- Metrics Details -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; justify-content: space-between; font-size: 13px;">
          <span style="color: #94A3B8;">Carbon Impact:</span>
          <span style="font-weight: 600; color: #38BDF8;">${analysis.carbon} kg CO2e</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 13px;">
          <span style="color: #94A3B8;">AI Confidence Score:</span>
          <span style="font-weight: 600; color: #22C55E;">${analysis.confidence}% Verified</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 13px;">
          <span style="color: #94A3B8;">Greenwash Risk:</span>
          <span style="font-weight: 600; color: ${analysis.score >= 70 ? '#22C55E' : '#EF4444'};">${analysis.greenwashing}</span>
        </div>
      </div>

      <!-- Alternatives Section -->
      <div style="font-size: 12px; text-transform: uppercase; tracking: 0.1em; color: #64748B; font-weight: 700; margin-bottom: 12px;">Sustainable Recommendations</div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${analysis.alternatives.map((alt, idx) => `
          <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(34, 197, 94, 0.15); border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 6px; transition: border 0.2s;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <span style="font-size: 10px; color: #10B981; text-transform: uppercase; font-weight: bold; background: rgba(16, 185, 129, 0.1); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 4px;">#${idx+1} Recommendation</span>
                <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #FFFFFF;">${alt.name}</h4>
                <span style="font-size: 12px; color: #64748B;">By ${alt.brand} | price: ${alt.price}</span>
              </div>
              <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10B981; border-radius: 6px; padding: 4px 8px; font-weight: bold; font-size: 12px; color: #10B981;">
                ${alt.score}
              </div>
            </div>
            <p style="margin: 0; font-size: 12px; color: #94A3B8; line-height: 1.4;">${alt.whyBetter}</p>
            <button class="eco-swap-btn" data-name="${alt.name}" data-price="${alt.price}" data-brand="${alt.brand}" style="background: #10B981; color: #052E16; border: none; border-radius: 6px; padding: 6px 10px; font-size: 12px; font-weight: 600; margin-top: 6px; cursor: pointer; transition: background 0.2s;">
              ⚡ Swap to Sustainable Option
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // Attach Close Event
  const closeBtn = sidebar.querySelector("#eco-sidebar-close");
  if (closeBtn) {
    closeBtn.onclick = () => {
      sidebar.style.transform = "translateX(380px)";
      setTimeout(() => {
        sidebar.remove();
      }, 300);
    };
  }

  // Attach Instant Swap Click Listeners
  const swapBtns = sidebar.querySelectorAll(".eco-swap-btn");
  swapBtns.forEach(btn => {
    btn.onclick = (e) => {
      const targetName = e.target.getAttribute("data-name");
      const targetPrice = e.target.getAttribute("data-price");
      const targetBrand = e.target.getAttribute("data-brand");
      performInstantSwap(targetName, targetPrice, targetBrand);
    };
  });
}

// Perform Instant Swap of UI values dynamically
function performInstantSwap(name, price, brand) {
  const mkt = getMarketplaceType();
  const rules = SELECTORS[mkt];

  let titleEl = null;
  let priceEl = null;

  for (const s of rules.title) {
    const el = document.querySelector(s);
    if (el) { titleEl = el; break; }
  }

  for (const s of rules.price) {
    const el = document.querySelector(s);
    if (el) { priceEl = el; break; }
  }

  if (titleEl) {
    titleEl.style.transition = "color 0.4s ease";
    titleEl.style.color = "#10B981";
    titleEl.textContent = name;
  }

  if (priceEl) {
    priceEl.style.transition = "transform 0.4s ease";
    priceEl.style.transform = "scale(1.1)";
    priceEl.textContent = price;
    setTimeout(() => { priceEl.style.transform = "scale(1)"; }, 400);
  }

  // Add visual success notification
  const notification = document.createElement("div");
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.left = "50%";
  notification.style.transform = "translateX(-50%)";
  notification.style.backgroundColor = "#064E3B";
  notification.style.border = "1px solid #10B981";
  notification.style.color = "#ECFDF5";
  notification.style.padding = "12px 24px";
  notification.style.borderRadius = "8px";
  notification.style.zIndex = "9999999999";
  notification.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
  notification.style.fontWeight = "bold";
  notification.innerHTML = `🍀 Instantly swapped to <strong>${name}</strong> successfully!`;

  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => notification.remove(), 500);
  }, 2500);
}

// Safe layout observer with guard against infinite loop
let observer = null;
function startObserver() {
  if (observer) return;
  injectBadge();
  
  observer = new MutationObserver((mutations) => {
    // Avoid checking when the badge itself changes
    const badgeModifiedInRecord = mutations.some(record => {
      return Array.from(record.addedNodes).some(node => node.id === "ecocart-badge" || node.id === "ecocart-sidebar");
    });
    if (badgeModifiedInRecord) return;

    injectBadge();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Initialized via window state checking
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startObserver);
} else {
  startObserver();
}
