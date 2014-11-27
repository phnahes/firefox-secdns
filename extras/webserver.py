#!/usr/bin/env python
''' simple python server example; 
    output format supported = html, raw or json '''
import sys
import json
import sqlite3
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer

db = sqlite3.connect('/tmp/fuck.db')

FORMATS = ('html','json','raw')
format = FORMATS[0]

html = "<html><body><H1>Python WebServer Working...</H1></body></html>"

class Handler(BaseHTTPRequestHandler):

    #handle GET command
    def do_GET(self):
        if format == 'html':
            self.send_response(200)
#            self.send_header("Content-type", "text/plain")
            self.send_header('Content-type','text-html')
            self.end_headers()
#            self.wfile.write("body")
            self.wfile.write(html)

	    db.execute("INSERT INTO regs (command, vers, path) VALUES (?, ?, ?)",(self.command, self.request_version, self.path))
	    db.commit()

        elif format == 'json':
            self.request.sendall(json.dumps({'path':self.path}))
        else:
            self.request.sendall("%s\t%s" %('path', self.path))
        return

def run(port=8000):

    print('http server is starting...')
    #ip and port of server
    server_address = ('127.0.0.1', port)
    httpd = HTTPServer(server_address, Handler)
    print('http server is running...listening on port %s' %port)
    httpd.serve_forever()

if __name__ == '__main__':
    from optparse import OptionParser
    op = OptionParser(__doc__)

    op.add_option("-p", default=8000, type="int", dest="port", 
                  help="port #")
    op.add_option("-f", default='json', dest="format", 
                  help="format available %s" %str(FORMATS))
    op.add_option("--no_filter", default=True, action='store_false', 
                  dest="filter", help="don't filter")

    opts, args = op.parse_args(sys.argv)

    format = opts.format
    run(opts.port)

