import { pipeline } from "stream/promises";
import fileReader from "../readables/fromFile";
import writer from "../writables/fromClass";
import streamLogger from "./transformer";

export default async () => {
  return await pipeline(
    fileReader,
    streamLogger, // Transformer used to process the stream like a middleware (runs per stream not per chunk)
    writer
  );
};
