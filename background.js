// EcoIntercept AI - Chrome Extension Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
  console.log("🌱 EcoIntercept Service Worker successfully active.");
});

// Listener for click action if necessary or messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getEcoCredentials") {
    // Return sample stats or orchestrate API calls
    sendResponse({ score: 92, status: "Verified" });
  }
  return true;
});
