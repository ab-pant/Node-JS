var spawn=require("child_process").spawn; // by using the .spwn we pluck out out the function from the module

var cp=spawn("node", ["alwaysTalking"]); // spawn takes the command name and the array of arguments to do with that argument

cp.stdout.on("data", function(data){ //notice that it is cp's stdout not this javascripts stdout
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close",function(){
	console.log("Child process ended ,  ie the spawn event has come to a close");
	process.exit(); // this process out command closes the "current spwan.js" file 
});

setTimeout(function(){
	cp.stdin.write("something somethng"); // notice that we are giving out input
										  // to the cp child process stdin, not our current file
},4000);