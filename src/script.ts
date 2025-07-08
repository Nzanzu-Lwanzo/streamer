import classReader from "./readables/fromClass";
import fileReader from "./readables/fromFile";
import fromGenerator from "./readables/fromGenerator";
import piperIO from "./processors/pipe";
import pipelineSync from "./processors/pipeline.sync";
import pipelineAsync from "./processors/pipeline.async";

// READ FROM A CLASS INHERITING Readable
classReader.on("data", (data: string) => {
  // Example of a manual backpressure
  console.log(`>> From class reader -> ${data.toString()}`);
  classReader.pause();
  setTimeout(() => {
    classReader.resume();
  }, 1000);
});

// READ FROM A FILE WITH createReadStream of node:fs
(async function () {
  for await (let chunk of fileReader) {
    // console.log(chunk.toString()); // -> Works but don't run it on any computer
  }
})();

// READ FROM A GENERATOR
(async () => {
  for await (let chunk of fromGenerator) {
    console.log(chunk);
  }
})();

// WRITE AND PIPES
// piperIO(); // -> Works but don't run it on any computer
// pipelineSync(); // -> Idem
// pipelineAsync(); // -> Idem
