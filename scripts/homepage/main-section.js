import { videos } from "../data/data.js";
import { sections } from "../data/data.js";
import { logos } from "../data/data.js";

export function loadSections() {
  let mainHTML = '';

  sections.forEach(section => {
    if (section.category !== 'originals'
      && section.category !== 'Top 10') {
      mainHTML += `
        <div id="swiperRef" class="swiper mySwiper">
         <a href="section.html"> 
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
          <div class="original-image-container">
            <img class="original-thumbnail" src="images/thumbs/Originals/originals-bkg.png">
          </div>

          <div class="original-info">
            <div class="original-title">
              <p>FP+ Original Films</p>
            </div>
            <div class="original-description">
              <p>Explore my unique video creations, showcasing my talent and dedication in producing original content, from short films to documentaries.</p>
            </div>
          </div>

          <div id="swiperRef" class="swiper mySwiper swiper-absolute swiper-originals">
            <!-- <div class="section-title"></div> -->
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
          <a href="show.html?videoId=${video.id}&videoType=${video.type}&videoCategory=${video.category}" class="${section.type}-swiper-slide swiper-slide js-swiper-slide">
            <div class="${section.type}-card-container card-container">
              <div class="image-container">
                <img class="thumbnail ${section.type}-thumbnail" src="${video.image}">
                <button class="play-button">
                  <img src="images/icons/play.png">
                </button>
              </div>
            </div>

            <div class="card-description">
              <p class="card-number">${video.top}</p>
              <div class="card-title">
                <p>${video.title}</p>
                <p class="card-year">${video.year} &#183; ${video.type}</p>
              </div>
            </div>
          </a>
        `;
      }
    });

    logos.forEach(logo => {
      if (section.category === 'Search by Brand') {
        html += `
          <div class="${section.type}-swiper-slide swiper-slide">
            <div class="${section.type}-card-container card-container">
              <div class="image-container">
                <img class="thumbnail ${section.type}-thumbnail" src="${logo.logo}">
              </div>
            </div>
          </div>
        `
      }
    });

    return html;
  }

  function swiperSlideTop10() {
    videos.sort((a, b) => {
      if (a.isBest && b.isBest) {
        return a.isBest.top - b.isBest.top;
      } else if (a.isBest) {
        return -1;
      } else if (b.isBest) {
        return 1;
      } else {
        return 0;
      }
    });

    let html = '';

    videos.forEach(video => {
      if (video.isBest) {
        html += `
          <div class="vertical-swiper-slide swiper-slide">
            <div class="vertical-card-container card-container">
              <div class="image-container">
                <img class="thumbnail thumbnail-border" src="${video.image}">
                <div class="top-number">
                  <span class="secret-number">${video.isBest.top}</span>
                </div>
              </div>
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