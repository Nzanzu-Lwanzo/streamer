import fetchText from "/lib/fetchText.js";

// Click to stream file from server
const streamFileBtn = document.getElementById("stream-file-btn");
streamFileBtn?.addEventListener("click", async () => await fetchText());
