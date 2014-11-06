const {Cc,Ci} = require("chrome")
const prefs = require("simple-prefs");



// Obtem LocalIP

//var dnsService = Cc["@mozilla.org/network/dns-service;1"]
//	.getService(Ci.nsIDNSService);
//var ip = dnsService.resolve(dnsService.myHostName, false).getNextAddrAsString();
//
//console.log(ip);

//
//function getLocalIP(bypassCache) {
//        var dnsService =  Cc["@mozilla.org/network/dns-service;1"].getService(Ci.nsIDNSService);
//        //var host = dnsService.myHostName;
//        var record = dnsService.resolve(dnsService.myHostName, bypassCache);
//        record.getNextAddrAsString();  // Ignore 1st entry because we want the 2nd one
//        return record.getNextAddrAsString();   
//}

let DnsService = Cc["@mozilla.org/network/dns-service;1"]
                 .createInstance(Ci.nsIDNSService);

let Thread = Cc["@mozilla.org/thread-manager;1"]
             .getService(Ci.nsIThreadManager).currentThread;

let host = "www.mozilla.org";

let Listener = {
  onLookupComplete: function(request, record, status) {
    let address = record.getNextAddrAsString();
    console.log(host + " = " + address);
  }
};

DnsService.asyncResolve(host, 0, Listener, Thread);
