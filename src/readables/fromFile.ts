import { createReadStream } from "node:fs";
import path from "node:path";

let fileName = path.join(__dirname, "..", "_utils", "read.txt");
const fileReader = createReadStream(fileName);

export default fileReader;
