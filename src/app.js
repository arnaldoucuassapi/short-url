const http = require("node:http");
const PORT = 3333;

const app = http.createServer();

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}!`);
});