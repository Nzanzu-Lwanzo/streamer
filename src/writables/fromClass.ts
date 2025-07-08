import { Writable } from "node:stream";
import path from "node:path";
import { writeFile } from "node:fs";

class StreamWriter extends Writable {
  filename: string = path.join(__dirname, "..", "_utils", "write.txt");

  constructor() {
    super({
      highWaterMark: 10, // 10 bytes is the maximum size this stream can write
    });
  }

  /**
   * When the water mark is reached, it returns false and stops.
   * To resume the writing, we need to listen to the `drain` event.
   */
  _write(
    chunk: any,
    encoding: BufferEncoding,
    callback: (error?: Error | null) => void
  ): void {
    console.log(`>> WRITE CHUNK SIZE : ${chunk.length}`);
    writeFile(this.filename, chunk, { encoding }, callback);
  }
}

const writer = new StreamWriter();

/**
 * Do this instead of calling the write so many times.
 */
writer.once("drain", (...args) => {
  console.log(args, " draining ...");
});

export default writer;
