const str = '<div id="flip">Click to slide up panel</div><div id="panel">Hello world!</div>'

//const str_head_script = '$(document).ready(function(){  $("#flip").click(function(){    $("#panel").slideUp("slow");  });});'

//const str_head_style = '#panel,#flip{padding:5px;text-align:center;background-color:#e5eecc;border:solid 1px #c3c3c3;}#panel{padding:50px;}' 

var oScript = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
var oScript2 = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
var oStyle = document.createElement('style'), oHead = document.getElementsByTagName('head')[0];

//var oScript = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
//oScript.setAttribute('type', 'text/javascript');
//oScript2.setAttribute('type', 'text/javascript');

// If you want to set an external script:
oScript.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');
oScript2.setAttribute('src', './js1.js');
oStyle.setAttribute('src', './css1.css');

// If you want to set an embedded script:
//oScript.appendChild( document.createTextNode('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>') );


//oScript.appendChild( document.createTextNode(str_head_style) );
//oScript2.appendChild( document.createTextNode(str_head_script) );
//oStyle.appendChild( document.createTextNode(str_head_style) );

// Finally:
oHead.appendChild(oScript);
oHead.appendChild(oScript2);
oHead.appendChild(oStyle);

var keypad1 = document.createElement("div");
keypad1.innerHTML = str;
document.body.appendChild(keypad1);

