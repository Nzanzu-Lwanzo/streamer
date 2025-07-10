import fetchText from "/fetchText.js";

// Register a Service Worker (might be needing it in the futre)
(async function () {
  if (!("serviceWorker" in navigator)) {
    console.warn(">>> Service Workers not supported");
  }

  if (!navigator.serviceWorker.controller) {
    await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      type: "module",
    });
  }

  return;
})();

// DOM Related stuff
const button = document.getElementById("stream-text-btn");
button.addEventListener("click", async () => await fetchText());
