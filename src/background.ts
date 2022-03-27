function reddenPage() {
  document.body.style.backgroundColor = 'red'
}

chrome.action.onClicked.addListener((tab) => {
  const isValidTab = tab && tab.url && tab.url.includes('chrome://')

  if (isValidTab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: reddenPage,
    })
  }
})
