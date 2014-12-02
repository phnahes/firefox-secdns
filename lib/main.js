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

// function getCurrentURL(){
// 
//     var currentWindow = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator).getMostRecentWindow("navigator:browser");
// 
//     var currBrowser = currentWindow.getBrowser();
//     var currURL = currBrowser.currentURI.spec;
// 
//     return currURL;
// }

// Changer Page Block
function pagemod(){
  pageMod.PageMod({
    include: "*",
    contentScriptFile: [data.url('element-getter.js'), data.url('js1.js'), data.url('css1.css')],
  });
}

pagemod()


