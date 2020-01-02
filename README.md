# hds - Happy Dump Server :smile:

HDS is designed to do two things:
1. Dump requests to stdout
2. Only respond with 200 OK responses to all requests


# Installation
```bash
npm install -g https://github.com/byumtc/hds.git
```

# Usage
```bash
usage: hds [-h] [-v] [--port PORT] [-a ADDRESS] [--log-headers] [--log-data]

Happy Dump Server

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  --port PORT, -p PORT  Port to listen on
  -a ADDRESS, --address ADDRESS
                        Address (interface) to listen on
  --log-headers         Log request headers
  --log-data            Log request data
```

# Examples
- Log all incoming HTTP traffic at 127.0.0.1:8000:
```bash
hds
```
- Log all incoming HTTP traffic, including headers, on port 1234:
```bash
hds --port 1234 --log-headers
```
- Log all incoming HTTP traffic, including headers and data, on port 54321:
```bash
hds --port 54321 --log-headers --log-data
```

# License
To do
