# hds - Happy Dump Server :smile:
v
HDS is designed to do two things:
1. Dump requests to stdout
2. Only respond with 200 OK responses to all requests


# Installation
```bash
npm install -g https://github.com/byumtc/logging-server.git
```

# Usage
```bash
Usage: logging-server [options]

options:
  --help        show this message and quit
  --port <port> run server on specified port (default is port 1234)
  --log-headers log HTTP request headers (does not by default)
```

# Examples
- Log all incoming HTTP traffic on port 8000:
```bash
logging-server --port 8000
```
- Log all incoming HTTP traffic, including headers, on port 8000:
```bash
logging-server --port 8000 --log-headers
```
- Example output WITHOUT headers (the default):
```
POST /log {"some-key": "some-value"}
```
- Example output WITH headers:
```
POST /log
HEADERS: {"user-agent": "Mozilla...whatever",
"content-type": "application/json",
"etc": "etc"}
DATA: {"some-key": "some-value"}
```

# License
