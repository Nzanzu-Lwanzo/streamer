import fetchImage from "/lib/fetchImage.js";

const streamImageBtn = document.getElementById("stream-image-btn");
const image = document.getElementById("image");

streamImageBtn?.addEventListener("click", async () => {
  const stream = await fetchImage();
  const reader = stream.getReader();
});
