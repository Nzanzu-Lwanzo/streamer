import { Readable } from "node:stream";

class StreamReader extends Readable {
  count: number = 0;

  /**
   * Read data without any backpressure.
   * We would have to implement that ourselves using
   * streamer.pause with setTimeout, to control
   * how data is being consumed.
   */
  _read(size: number): void {
    this.push(`${this.count}`);
    this.count++;

    if (this.count >= 5) {
      this.push(null);
    }
  }
}
const classReader = new StreamReader();

export default classReader;
