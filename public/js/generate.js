import generatedTextStream from "/lib/generatedText.js";

// Click to stream text generated on the machine
let reader = null;
let intervalID = null;
const streamTextBtn = document.getElementById("stream-text-btn");
const listText = document.getElementById("list-of-generated-text");
const stopStreaming = document.getElementById("stop-stream");

streamTextBtn?.addEventListener("click", async () => {
  reader = generatedTextStream.getReader();

  intervalID = setInterval(async () => {
    const result = await reader.read();

    if (result.done) {
      clearInterval(intervalID);
      console.log(">>> Done streaming ... no more chunks in queue");
      return;
    }

    listText.innerHTML += `<li>${result.value?.toString()}</li>`;
  }, 1000);
});

stopStreaming?.addEventListener("click", () => {
  reader?.cancel();
  clearInterval(intervalID);
});
