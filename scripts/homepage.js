import { swipers } from "./utils/swipers.js";
import { loadBackgoundVideo } from "./homepage/bkg-video.js";
import { loadSections } from "./homepage/main-section.js";
import { loadVideosFetch } from "./data/data.js";

async function loadFPhomepage() {
  await loadVideosFetch();

  loadBackgoundVideo();
  loadSections();
  swipers();
}

loadFPhomepage();

