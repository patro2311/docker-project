function injectScript(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["content.js"]
    }).catch(() => {
        // Ignore pages where injection is not allowed
    });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        injectScript(tabId);
    }
});

chrome.tabs.onCreated.addListener((tab) => {
    if (tab.id) {
        injectScript(tab.id);
    }
});
