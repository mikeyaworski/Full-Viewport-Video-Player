function inject(tabId) {
  chrome.scripting.insertCSS({
    target: { tabId, allFrames: true },
    files: ['styles/general.css']
  });

  chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    files: ['content-script.js']
  });
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.id) inject(tab.id);
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === 'toggle-video' && tab.id) {
    inject(tab.id);
  }
});
