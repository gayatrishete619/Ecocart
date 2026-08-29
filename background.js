// EcoIntercept AI - Chrome Extension Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
  console.log("🌱 EcoIntercept Service Worker successfully active.");
});

// Listener for runtime messages from content script and popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeProduct") {
    const { productName } = request;
    
    // Call the local backend API server via async background relay to bypass CORS policies
    fetch("http://localhost:3000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ productName })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        sendResponse({ success: true, data });
      })
      .catch(error => {
        console.error("Error analyzing product in background script:", error);
        sendResponse({ success: false, error: error.message });
      });
      
    return true; // Keep response channel open for async response
  }
  
  if (request.action === "getEcoCredentials") {
    // Return sample stats or orchestrate API calls
    sendResponse({ score: 92, status: "Verified" });
  }
  return true;
});
