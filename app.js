import http from "http";
import fs from "fs";

const htmlPath = "./index.html";
const jsPath = "./index.js";
const jsonPath = "./index.json";

const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Read the join.html file
    fs.readFile(htmlPath, "utf8", (err, data) => {
      // Set response header and send the file content
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.method === "POST" && req.url === "/saveData") {
    const id = document.getElementById("inputid").value;
    const pw = document.getElementById("inputpw").value;
    const mail = document.getElementById("inputmail").value;
    // JSON 형식으로 변환
    const userData = {
      id: id,
      pw: pw,
      mail: mail,
    };
    // 서버에 데이터 전송
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/saveData", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(userData));
  }
});

// Define port number
const port = 3217;

// Start the server
serv.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
