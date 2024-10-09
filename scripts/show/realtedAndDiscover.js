import { videos } from "../data/data.js";

export function relatedAndDiscover() {
  const url = new URL(window.location.href);
  const videoType = url.searchParams.get('videoType');
  const videoCategory = url.searchParams.get('videoCategory');

  let relatedHTML = '';
  let discoverHTML = `
    <div class="section-title">Discover: ${videoCategory}</div>
        <div class="swiper-wrapper">
          ${swiperSlide()}
        </div>
  
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
  `;


  videos.forEach(video => {
    if (video.type === videoType) {
      relatedHTML += `
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

  function swiperSlide() {
    let html = '';
    videos.forEach(video => {
      if (video.category === videoCategory) {
        html += `
            <div class="horizontal-swiper-slide swiper-slide">
              <div class="card-container">
                <div class="image-container">
                  <img class="thumbnail" src="images/thumbs/tops-10/top-animations/top-a-1.png">
                  <button class="play-button">
                    <img src="images/icons/play.png">
                  </button>
                </div>
              </div>
    
              <div class="card-description">
                <div class="card-title">
                  <p>Blue-bot</p>
                  <p class="card-year">2023 &#183; animation</p>
                </div>
              </div>
            </div>
        `;
      }
    });

    return html;
  }

  document.querySelector('.js-related-wrapper')
    .innerHTML = relatedHTML;

  document.querySelector('.js-discover-section')
    .innerHTML = discoverHTML;
}