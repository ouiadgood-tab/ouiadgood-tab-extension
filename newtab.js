/* globals chrome */

const NEW_TAB_URL = 'https://oiuadgood.netlify.app/'
try {
  chrome.tabs.getCurrent((tab) => {
    chrome.tabs.update(tab.id, { url: NEW_TAB_URL })
  })
} catch (e) {
  // Fall back to client-side navigation.
  document.location.href = NEW_TAB_URL
}
