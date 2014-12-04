var url = document.location.toString().toLowerCase();
text = "";


self.port.on('attached', function(text) {;

	var text2 = text.toString();
	var url2 = url.toString();

	url2 = url2.replace("http://", "");
	url2 = url2.replace("https://", "");
	url2 = url2.split("/");
	url2 = url2.length > 1 ? url2[0] : url2;

	console.log("Log :: Port.On - TEXT ---> " + text2);
	console.log("Log :: Port.On - URL ---> " + url2);

	if(text2.indexOf(url2) != -1) { 
		console.log(text2, url2, "Log :: URL esta dentro de TEXT");

		const str = '<div id="alert" style="bottom: 0px; left: 0px; width: 100%; position: fixed; background-color: rgb(255, 0, 0); font-weight: bold; color: white; height: 30px;" align="center">ESTE SITE PODE ESTAR COMPROMETIDO</div>'

		//var oScript = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
		//var oScript2 = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
		//var oStyle = document.createElement('style'), oHead = document.getElementsByTagName('head')[0];

		//var oScript = document.createElement('script'), oHead = document.getElementsByTagName('head')[0];
		//oScript.setAttribute('type', 'text/javascript');
		//oScript2.setAttribute('type', 'text/javascript');

		// If you want to set an external script:
		//oScript.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');

		//oScript.appendChild( document.createTextNode(str_head_style) );
		//oScript2.appendChild( document.createTextNode(str_head_script) );
		//oStyle.appendChild( document.createTextNode(str_head_style) );

		// Finally:
		//oHead.appendChild(oScript);
		//oHead.appendChild(oScript2);
		//oHead.appendChild(oStyle);

		var keypad1 = document.createElement("div");
		keypad1.innerHTML = str;
		document.body.appendChild(keypad1);

		self.port.removeListener("attached", true);

	} else {
		console.log(text2, url2, "Log :: URL NAO esta dentro de TEXT");

	}
});
