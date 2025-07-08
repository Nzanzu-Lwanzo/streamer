import { pipeline } from "stream";
import fileReader from "../readables/fromFile";
import writer from "../writables/fromClass";
import streamLogger from "./transformer";

export default () =>
  pipeline(
    fileReader,
    streamLogger, // Transformer used to process the stream like a middleware (runs per stream not per chunk)
    writer,
    (error) => {
      console.log(`>> An error occurred : ${error?.message}`);
    }
  );
