import { videos } from "../data/data.js";

export function relatedAndDiscover() {
  const url = new URL(window.location.href);
  const videoType = url.searchParams.get('videoType');
  const videoCategory = url.searchParams.get('videoCategory');

  console.log(videoType)

  let html = '';
  videos.forEach(video => {
    if (video.type === videoType) {
      html += `
        <div class="horizontal-swiper-slide swiper-slide">
          <div class="card-container">
            <div class="image-container">
              <img class="thumbnail" src="${video.image}">
              <button class="play-button">
                <img src="images/icons/play.png">
              </button>
            </div>
          </div>

          <div class="card-description">
            
            <div class="card-title">
              <p>${video.title}</p>
              <p class="card-year">${video.year} &#183; ${video.category}
            </div>
          </div>
        </div>
      `;
    }
  });

  document.querySelector('.js-related-wrapper')
    .innerHTML = html;
}