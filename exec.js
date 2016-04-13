var exec=require("child_process").exec;

//exec("open http://linkedin.com");
exec("node -v", function(err, stdout){
	if(err){
		throw err;
	}
	console.log("Executed succesfully");
	console.log(stdout);
});