const http = require("http");
const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if (path == "/user") {
  } else if (path == "/feed/") {
  } else if (path == "/community/") {
  } else if (path == "/order/") {
  } else if (path == "/mypage/") {
  }

  res.setHeader("Content-Type", "text/html");
  res.end("OK");
});

server.listen("3000", () => console.log("OK 서버 시작!"));
