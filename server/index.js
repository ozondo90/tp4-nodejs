var http = require("http");
var serverHandler = require("./serverHandler")
var server = http.createServer(serverHandler);

module.exports = server;