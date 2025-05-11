function toggleVideo() {
  document.querySelector('ytd-player')?.classList.toggle('full-viewport-video-wrapper');
  document.querySelector('video')?.classList.toggle('full-viewport-video-player');
  document.querySelector('body')?.classList.toggle('full-viewport-video-player-scroll-window');
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === 'toggle') toggleVideo();
});
