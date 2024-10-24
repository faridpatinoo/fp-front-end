import { videos } from "./data/data.js";
//import { loadVideosFetch } from "./data/data.js";

//async function loadSectionPage() {
//await loadVideosFetch();

sectionPage();
//}

//loadSectionPage();

function sectionPage() {
  const url = new URL(window.location.href);
  const videoCategory = url.searchParams.get('videoCategory');
  const videoBrand = url.searchParams.get('videoBrand')

  let sectionHTML = '';

  videos.forEach(video => {
    if (video.category === videoCategory || video.brand === videoBrand) {
      sectionHTML += `
      <a href="show.html?videoId=${video._id}&videoType=${video.type}&videoCategory=${video.category}">
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
    .innerHTML = videoCategory || videoBrand;

  document.querySelector('.js-container-section-grid')
    .innerHTML = sectionHTML
}