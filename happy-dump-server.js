#!/usr/bin/env node
/* hds - Happy Dump Server :)
 * This is a simple server intended to do two things:
 *   1. Log all requests it gets to stdout (dump)
 *   2. Reply to all requests with 200 OK status (happy)
 */
'use strict';

const http = require("http");
const ArgumentParser = require('argparse').ArgumentParser;

let parser = new ArgumentParser({
	version: '1.0.0',
	addHelp: true,
	description: 'Happy Dump Server'
});
parser.addArgument(
	['--port', '-p'],
	{
		help: 'Port to listen on',
		defaultValue: 8000
	}
);
parser.addArgument(
	['-a', '--address'],
	{
		help: 'Address (interface) to listen on',
		defaultValue: '127.0.0.1'
	}
);
parser.addArgument(
	['--log-headers'],
	{
		help: 'Log request headers',
		defaultValue: false,
		action: 'storeTrue'
	}
);
parser.addArgument(
	['--log-data'],
	{
		help: 'Log request data',
		defaultValue: false,
		action: 'storeTrue'
	}
);
let args = parser.parseArgs();

const server = http.createServer((req, res) => {
	console.log(req.method, req.url);
	if (args.log_headers) {
		console.log('HEADERS: ', req.headers);
	}
	req.on('data', data => {
		if (args.log_data) {
			console.log('REQUEST DATA: ', data.toString());
		}
	});
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.end();
});

server.listen(args.port, args.addr, () => {
	console.log(`Started server listening at http://${args.address}:${args.port}`);
});
