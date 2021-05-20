const http = require("http");
const port = 4000;

const app = http.createServer((req, res) => {
  console.log("Hello Reader");
  res.end();
});

app.listen(port, () => {
  console.log(`Server is ready to listen to port: ${port}`);
});
