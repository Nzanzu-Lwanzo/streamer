function getRandomText() {
  return Math.random().toString(36).slice(2);
}

// Store all the generated texts
const texts = [];

const stream = new ReadableStream(
  {
    /**
     * Runs as soon as you instantiate a ReadableStream object
     */
    start(controller) {
      console.log(">>> Readable stream has been instantiated");
    },

    /**
     * Basically runs everytime you call <stream.getReader().read()>
     * or simply put try to read from the stream.
     * What we do is adding some data to the queue so you can get
     * on the other side.
     */
    pull(controller) {
      let text = getRandomText();

      if (texts.includes(text)) {
        controller.close();
      }

      texts.push(text);
      controller.enqueue(text);
      console.log(`>>> New text generated : ${text}`);
    },

    /**
     * Runs when you cancel the streaming by calling <stream.getReader().cancel()>
     * This stops reading data from the queue.
     */
    cancel() {
      console.log(">>> Canceling the streaming and clearing interval");
    },
  },
  { highWaterMark: 5 }
);

export default stream;
