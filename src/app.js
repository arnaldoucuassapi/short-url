const http = require("node:http");
const DatabaseInMemory = require("./utils/database-memory");

const port = 3333;
const database = new DatabaseInMemory();

const app = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  
  const method = request.method;
  const route = request.url;
  
  if (method == "POST" && route == "/encurtar") {
    let data;

    request.on("data", (chunk) => {
      data = chunk;
    });

    request.on("end", () => {
      const body = JSON.parse(data);
      database.add(body);
    })

    response.statusCode = 201;

    return response.end();
  }

  if (method == "GET" && route == "/list") {
    const shorts = JSON.stringify(database.list());
    return response.end(shorts);
  }

  if (method == "GET" && route.startsWith("/")) {
    const linkKey = route.substring(1);
    
    const short = database.list()
      .filter((sh) => (sh.name === linkKey) || (sh.id === linkKey))[0];
    
    response.writeHead(302, {
      "Location": short ? short.link : "https://github.com/arnaldoucuassapi"
    });

    return response.end();
  }
});

app.listen(port, () => {
  console.log(`Server running in port ${port}!`);
});