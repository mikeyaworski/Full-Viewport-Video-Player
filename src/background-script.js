chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: 'toggle' });
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === 'toggle-video') {
    chrome.tabs.sendMessage(tab.id, { action: 'toggle' });
  }
});