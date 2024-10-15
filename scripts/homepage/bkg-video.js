import { videos } from "../data/data.js";

export function loadBackgoundVideo() {
  let html = '';

  videos.sort((a, b) => {
    if (a.brand > b.brand) {
      return 1;
    } else if (a.brand < b.brand) {
      return -1;
    } else {
      return 0;
    }
  })

  videos.forEach(video => {
    if (video.tags.includes('isBackground')) {
      html += `
        <div class="swiper-slide background-swiper-slide">
          <div class="background-video">
            <img src="${video.image}"/>
              <div class="bkg-video-info">
                <div class="bkg-video-title">${video.title}</div>
                <div class="bkg-video-description">
                  ${video.description}
                </div>
                <a href="show.html?videoId=${video.id}&videoType=${video.type}&videoCategory=${video.category}">
                  <button class="bkg-video-button">Watch Now</button>
                </a>
            </div>
          </div>
        </div>
      `;
    }
  });

  document.querySelector('.js-bkg-swiper-wrapper')
    .innerHTML = html;
}