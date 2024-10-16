import { videos } from "../data/data.js";

export function videoPreview() {
  const url = new URL(window.location.href);
  const videoId = Number(url.searchParams.get('videoId'));

  let matchingVideo = videos.find(video => video.id === videoId);
  let html = '';

  if (matchingVideo) {
    html += `
      <div class="thumbnail-container">
          <img class="thumbnail-video-preview" src="${matchingVideo.image}" alt="${matchingVideo.title}"/>
        </div>
        <div class="brand-container">
          <div class="description-container">
            <button class="play-button-preview js-play-button-preview">
              <img src="images/icons/play.png" alt="Play Icon"/> Play
            </button>
            <div class="show-description">
              <p>${matchingVideo.description}</p>
            </div>
            <div class="description-category">
              <p class="type-${matchingVideo.type}">${matchingVideo.type}</p>
            </div>
          </div>
          <div class="brand-name">
            <p class="brand-class">${matchingVideo.category}</p>
            <p class="brand-title">${matchingVideo.title}</p>
          </div>
        </div>
    `;
  }

  document.querySelector('.js-preview-container')
    .innerHTML = html;

  document.querySelector('.js-play-button-preview')
    .addEventListener('click', () => {
      window.location.href = matchingVideo.video;
    });
}

