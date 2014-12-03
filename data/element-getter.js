var doc = document.location.toString().toLowerCase();

self.port.on('attached', function(){
	console.log("attached..." + doc);

	const str = '<div id="mudar">'+ doc + '</div>'

	var oScript = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
	//var oScript2 = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
	//var oStyle = document.createElement('style'), oHead = document.getElementsByTagName('head')[0];

	//var oScript = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
	//oScript.setAttribute('type', 'text/javascript');
	//oScript2.setAttribute('type', 'text/javascript');

	// If you want to set an external script:
	oScript.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');

	//oScript.appendChild( document.createTextNode(str_head_style) );
	//oScript2.appendChild( document.createTextNode(str_head_script) );
	//oStyle.appendChild( document.createTextNode(str_head_style) );

	// Finally:
	oHead.appendChild(oScript);
	//oHead.appendChild(oScript2);
	//oHead.appendChild(oStyle);

	var keypad1 = document.createElement("div");
	keypad1.innerHTML = str;
	document.body.appendChild(keypad1);

});
