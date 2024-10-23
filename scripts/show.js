import { swipers } from "./utils/swipers.js";
import { videoPreview } from "./show/video-preview.js";
import { relatedAndDiscover } from "./show/realtedAndDiscover.js";
//import { loadVideosFetch } from "./data/data.js";

async function loadShowPage() {
  //await loadVideosFetch();

  swipers();
  videoPreview();
  relatedAndDiscover();
}

loadShowPage();
