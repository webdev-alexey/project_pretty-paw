const videoBGElems = document.querySelectorAll('.video-bg');

videoSources = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
`;

for(const videoElem of videoBGElems){
  videoElem.innerHTML = videoSources;
}
