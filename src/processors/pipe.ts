import fileReader from "../readables/fromFile";
import writer from "../writables/fromClass";

/**
 * Read one stream and write into another.
 */
function piperIO() {
  fileReader.pipe(writer);
}

export default piperIO;
