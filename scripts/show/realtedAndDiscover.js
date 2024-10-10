import { videos } from "../data/data.js";

export function relatedAndDiscover() {
  const url = new URL(window.location.href);
  const videoId = Number(url.searchParams.get('videoId'));
  const videoType = url.searchParams.get('videoType');
  const videoCategory = url.searchParams.get('videoCategory');

  let relatedHTML = '';
  let discoverHTML = '';


  videos.sort(() => Math.random() - 0.5).forEach(video => {
    if (video.type === videoType && video.id !== videoId) {
      relatedHTML += `
        <a href="show.html?videoId=${video.id}&videoType=${video.type}&videoCategory=${video.category}"
        class="horizontal-swiper-slide swiper-slide">
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
              <p class="card-year">${video.year} &#183; ${video.type}
            </div>
          </div>
        </a>
      `;
    }

    if (video.category === videoCategory && video.id !== videoId) {
      discoverHTML += `
          <a href="show.html?videoId=${video.id}&videoType=${video.type}&videoCategory=${video.category}"
          class="horizontal-swiper-slide swiper-slide">
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
              </div>
            </div>
          </a>
      `;
    }
  });

  document.querySelector('.js-section-title')
    .innerHTML = `<a href="section.html?videoCategory=${videoCategory}">Discover: ${videoCategory}</a>`

  document.querySelector('.js-related-wrapper')
    .innerHTML = relatedHTML;

  document.querySelector('.js-discover-wrapper')
    .innerHTML = discoverHTML;
}