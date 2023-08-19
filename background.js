'use strict'

let controls_visible = true

chrome.action.onClicked.addListener(tab => {
   const toggled_CSS = controls_visible
      ? chrome.scripting.insertCSS({ target: { tabId: tab.id }, files: ['content-style.css'] })
      : chrome.scripting.removeCSS({ target: { tabId: tab.id }, files: ['content-style.css'] })

   toggled_CSS.then(() => {
      controls_visible = !controls_visible
      controls_visible
         ? chrome.action.setIcon({ path: './icons/visible_16.png', tabId: tab.id })
         : chrome.action.setIcon({ path: './icons/hidden_16.png', tabId: tab.id })

   })
      .catch(() => null)
})