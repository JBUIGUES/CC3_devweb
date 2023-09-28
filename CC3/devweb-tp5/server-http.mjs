import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const urlParts = request.url.split("/");

    if (urlParts[1] === "" || urlParts[1] === "index.html") {
      const contents = await fs.readFile("devweb-tp5/static/index.html", "utf8");
      response.writeHead(200);
      return response.end(contents);
    }

    if (urlParts[1] === "random" && urlParts[2] && !isNaN(urlParts[2])) {
      const nb = parseInt(urlParts[2]);
      const randomNumbers = [];
      for (let i = 0; i < nb; i++) {
        randomNumbers.push(Math.floor(100 * Math.random()));
      }
      response.writeHead(200);
      return response.end(`<html><p>${randomNumbers.join(", ")}</p></html>`);
    }

    response.writeHead(404);
    return response.end(`<html><p>404: NOT FOUND</p></html>`);
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

console.log("NODE_ENV =", process.env.NODE_ENV);
