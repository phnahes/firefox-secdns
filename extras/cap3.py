#!/usr/bin/env python

from scapy.all import *
from datetime import datetime
import time
import datetime
import sys

############# MODIFY THIS PART IF NECESSARY ###############
filter_bpf = 'udp and port 53'

# ------ SELECT/FILTER MSGS
def select_DNS(pkt):
    pkt_time = pkt.sprintf('%sent.time%')
# ------ SELECT/FILTER DNS MSGS
    try:
        if DNSQR in pkt and pkt.dport == 53:
        # queries
#           print pkt.show2()
           print pkt.sprintf("%DNS.aa%")

           # 
        elif DNSRR in pkt and pkt.sport == 53:
        # responses
           #print pkt.show2()
           print pkt.sprintf("%DNS.aa%")
 # 
    except:
        pass
# ------ START SNIFFER 
sniff(filter=filter_bpf, store=0,  prn=select_DNS)
