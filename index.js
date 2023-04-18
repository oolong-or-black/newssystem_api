const jsonServer = require("json-server"); // importing json-server Library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;  // you can user any port number

server.use(middlewares);
server.use(router);

server.listen(port);