function bluePage() {
  document.body.style.backgroundColor = 'blue'
}

chrome.action.onClicked.addListener((tab) => {
  const isValidTab = tab && tab.url && tab.id

  if (isValidTab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: bluePage,
    })
  }
})
