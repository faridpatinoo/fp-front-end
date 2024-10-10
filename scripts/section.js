import { videos } from "./data/data.js";

const url = new URL(window.location.href);
const videoCategory = url.searchParams.get('videoCategory');

let sectionHTML = '';

videos.forEach(video => {
  if (video.category === videoCategory) {
    sectionHTML += `
      <a href="show.html">
        <div class="card">
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
              <p class="card-year">${video.year} &#183; ${video.type}</p>
            </div>
          </div>
        </div>
      </a>
    `;
  }
});

document.querySelector('.js-section-title')
  .innerHTML = `${videoCategory}`

document.querySelector('.js-container-section-grid')
  .innerHTML = sectionHTML