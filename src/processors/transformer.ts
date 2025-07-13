import { Transform } from "node:stream";

const streamLogger = new Transform({
  transform(chunk, encoding, callback) {
    console.log(`>> STREAM PASSED THROUGH THE TRANSFORMER`);
  },
});

export default streamLogger;
