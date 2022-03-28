// This file must be in root of directory

function logBackgroundScriptToConsole() {
  console.log('background script')
}

chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: logBackgroundScriptToConsole,
    })
  }
})
