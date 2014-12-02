self.on("message", function(message){
    if(message !== "undefined"){
       Notifier.info(message); 
    }
});
