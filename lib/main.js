// 
// Name: secdns
// Description: 
//
//
//
// Author: Paulo Nahes
// 
 
const {Cc,Ci} = require("chrome");


var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
var istream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);

var theFileIn = '/tmp/file.in';
var line = {}, lines = [], hasmore;

var data = require('sdk/self').data;


//read files
function readFile(){
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
//  console.log(lines);
  return lines.toString();
};


require('sdk/page-mod').PageMod({
  include: ["*"],
  contentScriptFile: [data.url('element-getter.js')],
  attachTo: ["existing", "top"],
  onAttach: function(worker) {
    //worker.port.emit('attached', "testando essa merda");
    worker.port.emit('attached', readFile());
  }
});


/*
var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("get-text.js")
});

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  text_entry.show();
}


*/
