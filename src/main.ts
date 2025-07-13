import express from "express";
import path from "node:path";
import { Edge } from "edge.js";
import { GLOBAL_VARS, renderTemplate } from "./_utils/helpers";
import fileReader from "./readables/fromFile";
import { createReadStream } from "node:fs";

// Instances
const app = express();
const edge = new Edge().mount(path.join(__dirname, "..", "views"));

// Configuration
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
app.get("/", (req, res) => renderTemplate(edge, res, "index"));
app.get("/file", (req, res) => renderTemplate(edge, res, "file"));
app.get("/generate", (req, res) => renderTemplate(edge, res, "generate"));
app.get("/image", (req, res) => renderTemplate(edge, res, "image"));

app.get("/file/stream", (req, res) => {
  fileReader.on("data", function (chunk) {
    console.count(`>>> Chunk size : ${chunk.toString().length}`);
    res.write(chunk);
  });

  /** Free all the resources once the stream is done flowing */
  fileReader.on("end", () => fileReader.destroy());
});

app.get("/image/stream", (req, res) => {
  const reader = createReadStream(
    path.join(__dirname, "..", "public", "imgs", "heros.jpeg")
  );

  reader.on("data", (chunk) => res.write(chunk));
  reader.on("end", () => reader.destroy());
});

// Run server
app.listen(GLOBAL_VARS.PORT, () =>
  console.log(
    `>>> Streaming app is live at : http://localhost:${GLOBAL_VARS.PORT}`
  )
);
