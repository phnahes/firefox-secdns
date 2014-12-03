var doc = document.location.toString().toLowerCase();

self.port.on('attached', function(){
	console.log("attached...");
});
