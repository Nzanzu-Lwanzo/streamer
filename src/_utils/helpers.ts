import type { Edge } from "edge.js";
import { IncomingMessage, ServerResponse } from "node:http";

export async function renderTemplate(
  edge: Edge,
  response: ServerResponse<IncomingMessage>,
  template: string
) {
  const html = await edge.render(template);
  response.setHeader("Content-Type", "text/html");
  return response.end(html);
}

export const GLOBAL_VARS = {
  PORT: 5000,
};
