chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "AI-translate",
    title: "translate",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "AI-translate") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text) => alert(text),
      args: [info.selectionText],
    });
  }
});
