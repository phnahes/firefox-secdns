var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

const {Cc,Ci} = require("chrome");

var theFileIn = '/tmp/file.in';
var theFileOut = '/tmp/file.in';

// To Write File
var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
var foStream = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
var converter = Cc["@mozilla.org/intl/converter-output-stream;1"].createInstance(Ci.nsIConverterOutputStream);

// To Read File
var istream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);
var line = {}, lines = [], hasmore;

// Write Block
file.initWithPath( theFileOut );
if(file.exists() == false) //check to see if file exists
{
    file.create( Ci.nsIFile.NORMAL_FILE_TYPE, 420);
}
foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 

converter.init(foStream,"UTF-8", 0, 0);
converter.writeString('Hi, Escrevi no arquivo!');
converter.close(); // this closes foStream

// Read Block
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
console.log(lines);

// Changer Page Block
pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url('element-getter.js')]
});

