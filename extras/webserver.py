#!/usr/bin/env python 
import contextlib
import SimpleHTTPServer
import SocketServer
import sqlite3

PORT = 8000

db = sqlite3.connect('/tmp/fuck.db')

class DBLoggingHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        db.execute("INSERT INTO crazysean (command, vers, path) VALUES (?, ?, ?)",
                        (self.command, self.request_version, self.path))
        db.commit()
        return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = DBLoggingHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
with contextlib.closing(db):
    httpd.serve_forever()
