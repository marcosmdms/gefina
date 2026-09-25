import { createServer } from "http";
import { readFileSync } from "fs";

const server = createServer((req, res) => {
  const html = readFileSync("index.html");

  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(html);
});

server.listen(3000, () => {
  console.log("Servidor: http://localhost:3000");
});