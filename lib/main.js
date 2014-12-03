// 
// Name: secdns
// Description: 
//
//
//
// Author: Paulo Nahes
// 

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
//var url = require("sdk/url");
//var tabs = require("sdk/tabs");

const {Cc,Ci} = require("chrome");

var theFileIn = '/tmp/file.in';

// // To Write File
 var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
// var foStream = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
// var converter = Cc["@mozilla.org/intl/converter-output-stream;1"].createInstance(Ci.nsIConverterOutputStream);

// To Read File
var istream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);
var line = {}, lines = [], hasmore;

// Read Block
function read(){
  file.initWithPath( theFileIn );
  if(file.exists() == false){
      file.create( Ci.nsIFile.NORMAL_FILE_TYPE, 420);
  }
  istream.init(file, 0x01, 0444, 0);
  istream.QueryInterface(Ci.nsILineInputStream);
  
  do {
    hasmore = istream.readLine(line);
    lines.push(line.value); 
  } while(hasmore);
  
  istream.close();

//  if(lines.search("r7.com") != -1){
    console.log(lines);
//  }
}

// Changer Page Block
function pagemod(){
  pageMod.PageMod({
    include: "*",
    contentScriptFile: [data.url('element-getter.js'), data.url('js1.js'), data.url('css1.css')],
  });
}

read();
