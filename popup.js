document.addEventListener("DOMContentLoaded", () => {
  const scoreCircle = document.querySelector(".score-circle");
  const card = document.querySelector(".card");
  const viewBtn = document.getElementById("viewBtn");

  // Query the current active browser tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || tabs.length === 0) return;
    const activeTab = tabs[0];
    
    // Request active product analysis details from the tab's content script
    chrome.tabs.sendMessage(activeTab.id, { action: "getActiveProduct" }, (response) => {
      if (chrome.runtime.lastError || !response || !response.success) {
        // Fallback UI when extension is inactive or not on a supported marketplace page
        if (scoreCircle) scoreCircle.style.display = "none";
        if (card) {
          card.innerHTML = `
            <h3 class="card-title" style="text-align: center; margin-bottom: 12px; font-weight: 700; color: #94A3B8;">Welcome to EcoCart</h3>
            <p class="recommendation" style="font-size: 13px; text-align: center; color: #94A3B8; line-height: 1.5; margin: 0;">
              Please navigate to a supported online store (Amazon, Flipkart, Myntra, etc.) and view a product page to see real-time sustainability evaluations.
            </p>
          `;
        }
        if (viewBtn) {
          viewBtn.textContent = "Open EcoCart Hub";
          viewBtn.onclick = () => {
            chrome.tabs.create({ url: "http://localhost:3000" });
          };
        }
      } else {
        // Product detected and analyzed successfully!
        const { details, analysis } = response;
        
        // Update score display dynamically
        const numericScoreEl = scoreCircle ? scoreCircle.querySelector(".numeric-score") : null;
        const outerCircleEl = scoreCircle ? scoreCircle.querySelector(".circle-outer") : null;
        
        if (numericScoreEl) {
          numericScoreEl.textContent = analysis.score;
          const scoreColor = analysis.score >= 70 ? "#22C55E" : "#EAB308";
          numericScoreEl.style.color = scoreColor;
          if (outerCircleEl) {
            outerCircleEl.style.borderColor = scoreColor;
          }
        }
        
        // Populate the active product details
        if (card) {
          card.innerHTML = `
            <h3 class="card-title">Active Product Analysis</h3>
            <div style="font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #F8FAFC; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${details.title}">
              ${details.title}
            </div>
            <div class="metric-flex" style="margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 12px; color: #94A3B8;">Carbon Impact:</span>
              <span class="badge-teal" style="background-color: rgba(20, 184, 166, 0.15); color: #2DD4BF; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: bold;">
                ${analysis.carbon} kg CO2e
              </span>
            </div>
            <div class="metric-flex" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 12px; color: #94A3B8;">Greenwash Risk:</span>
              <span class="badge-green" style="background-color: ${analysis.score >= 70 ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)'}; color: ${analysis.score >= 70 ? '#4ADE80' : '#FBBF24'}; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: bold;">
                ${analysis.greenwashing}
              </span>
            </div>
          `;
        }
        
        // Hook action button
        if (viewBtn) {
          viewBtn.textContent = "Open Comprehensive Dashboard";
          viewBtn.onclick = () => {
            chrome.tabs.create({ url: "http://localhost:3000" });
          };
        }
      }
    });
  });
});
