#!/usr/bin/env node
/* This is a simple server intended to do two things:
 *   1. Log all requests it gets to stdout
 *   2. Reply to all requests with 200 OK status
 */
'use strict';

const http = require("http");

function usage() {
	console.log(`Usage: logging-server [options]

options:
  --help        show this message and quit
  --port <port> run server on specified port (default is port 1234)
  --log-headers log HTTP request headers (does not by default)
`)
}

if (process.argv.indexOf("--help") !== -1) {
	usage();
	process.exit(0);
}
let port = 1234;
const portIndex = process.argv.indexOf("--port");
if (portIndex !== -1) {
	port = process.argv[portIndex + 1];
}

const logHeaders = process.argv.indexOf("--log-headers") !== -1;

const server = http.createServer((req, res) => {
	req.on('data', data => {
		if (logHeaders) {
			console.log(req.method, req.url, '\nHEADERS: ', req.headers);
			console.log('REQUEST DATA: ', data.toString());
		} else {
			console.log(req.method, req.url, data.toString());
		}
		console.log();
	});
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.end();
});

server.listen(port, '0.0.0.0', () => {
	console.log(`Started server listening at http://0.0.0.0:${port}`);
});
