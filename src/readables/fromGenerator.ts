import { Readable } from "node:stream";

async function* generator() {
  for (let number of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    yield `>> From generator -> ${number + 1}`;
  }
}

export default Readable.from(generator());
