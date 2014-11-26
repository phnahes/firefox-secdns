#!/usr/bin/env python 
import SimpleHTTPServer
import SocketServer
import sqlite3

PORT = 8000

class DBLoggingHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        SimpleHTTPServer.SimpleHTTPRequestHandler.__init__(self, *args, **kwargs)
        self.db = sqlite3.connect('/tmp/fuckdb.sqlite')
    def do_GET(self):
        self.db.execute("INSERT INTO crazysean (command, vers, path) VALUES (?, ?, ?)",
                        (self.command, self.request_version, self.path))
        self.db.commit()
        return super(DBLoggingHandler, self).do_GET()

Handler = DBLoggingHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
