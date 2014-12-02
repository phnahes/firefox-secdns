#!/usr/bin/env python

from scapy.all import *
from datetime import datetime
import time
import datetime
import sys
import sqlite3

db = sqlite3.connect('/tmp/fuck.db')

filter_bpf = 'udp and port 53'

def select_DNS(pkt):
    pkt_time = pkt.sprintf('%sent.time%')
    try:
        #if DNSQR in pkt and pkt.dport == 53:
        # queries
	#   print "##### DNSQR #####"
        #   print pkt.show2()

        #elif DNSRR in pkt and pkt.sport == 53:
        if DNSRR in pkt and pkt.sport == 53:
           #print pkt.show()

	   aa = pkt.sprintf("%DNS.aa%")
	   domain = pkt[DNSQR].sprintf('%qname%')

	   if aa.find("1L") != -1:
	   	db.execute("INSERT INTO regs (name, aa) VALUES (?, ?)",(domain, aa))
           	db.commit()

           #print pkt.sprintf("%DNS.aa%")

    except:
        pass

# ------ START SNIFFER 
sniff(filter=filter_bpf, store=0,  prn=select_DNS)
