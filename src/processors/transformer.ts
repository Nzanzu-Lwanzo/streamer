import { Transform } from "node:stream";

let chucks: any[] = [];

const streamLogger = new Transform({
  transform(chunk, encoding, callback) {
    console.log(`>> STREAM PASSED THROUGH THE TRANSFORMER`);
  },
});

export default streamLogger;
