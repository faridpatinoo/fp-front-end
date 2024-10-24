import { videos, sections, logos } from "../data/data.js";

export function loadSections() {
  let mainHTML = '';

  sections.forEach(section => {
    if (section.category !== 'originals'
      && section.category !== 'Top 10') {
      mainHTML += `
        <div id="swiperRef" class="swiper mySwiper">
         <a href="section.html?videoCategory=${section.category}"> 
          <div class="section-title">${section.category}</div>
         </a>

          <div class="swiper-wrapper">
            ${swiperSlide(section)}
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div class="section-divider"></div>
      `;
    }

    if (section.category === 'originals') {
      mainHTML += `
        <div class="original-container">
          <a href="section.html?videoCategory=${section.category}" class="original-image-container">
            <img class="original-thumbnail" src="images/extra/originals-banner.png">
          </a>

          <div class="original-info">
            <div class="original-title">
              <p>
                <a href="section.html?videoCategory=${section.category}">FP+ Original Films</a>
              </p>
            </div>
            <div class="original-description">
              <p>Explore my unique video creations, showcasing my talent and dedication in producing original content, from short films to documentaries.</p>
            </div>
          </div>

          <div id="swiperRef" class="swiper mySwiper swiper-absolute swiper-originals">
            <div class="swiper-wrapper originals-swiper-wrapper">
              ${swiperSlide(section)}
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      `;
    }

    if (section.category === 'Top 10') {
      mainHTML += `
        <div id="swiperRef" class="swiper mySwiper">
          <div class="section-title">TOP 10</div>
          <div class="swiper-wrapper">
            ${swiperSlideTop10()}
          </div>
        
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

        <div class="divider-color"></div>
      `
    };
  });

  function swiperSlide(section) {
    videos.sort((a, b) => a.top - b.top);
    let html = '';

    videos.forEach(video => {
      if (video.top <= 10 && video.category === section.category) {
        html += `
          ${video.getCard(section)}
        `;
      }
    });

    logos.forEach(logo => {
      if (section.category === 'Search by Brand') {
        html += `
          <div class="${section.type}-swiper-slide swiper-slide">
            <div class="${section.type}-card-container card-container">
              <a href="section.html?videoBrand=${logo.brand}" class="image-container">
                <img class="thumbnail ${section.type}-thumbnail" src="${logo.logo}">
              </a>
            </div>
          </div>
        `
      }
    });

    return html;
  }

  function swiperSlideTop10() {
    videos.sort((a, b) => {
      if (a.isBestTop && b.isBestTop) {
        return a.isBestTop - b.isBestTop;
      } else if (a.isBestTop) {
        return -1;
      } else if (b.isBestTop) {
        return 1;
      } else {
        return 0;
      }
    });

    let html = '';

    videos.forEach(video => {
      if ((video.tags.includes('isBest'))) {
        html += `
          <div class="vertical-swiper-slide swiper-slide">
            <div class="vertical-card-container card-container">
              <a href="show.html?videoId=${video._id}&videoType=${video.type}&videoCategory=${video.category}" class="image-container">
                <img class="thumbnail thumbnail-border" src="${video.image}">
                <div class="top-number">
                  <span class="secret-number">${video.isBestTop}</span>
                </div>
              </a>
            </div>
          </div>
        `;
      }
    });

    return html;
  }

  document.querySelector('.js-section-container')
    .innerHTML = mainHTML;
}    