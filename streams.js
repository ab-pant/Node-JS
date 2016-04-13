var fs=require("fs");

fs.readFile("./chat.log","UTF-8", function(err, chatlog){ //chatlog will contain the entire contents of the log file
	console.log("We read the file. Length is :"+ `${chatlog.length}`)
});
console.log("Reading file successful");

var stream = fs.createReadStream("./chat.log","UTF-8");
// we wil read the file in chunks
var data="";

// stream once usually runs the code once 
stream.once("data", function(){
		console.log("\n\n\n\n\n");
		console.log("Started reading the file");
		console.log("\n\n\n\n\n");
		
});

// we listen for data events of the stream .. to get the file chunks
stream.on("data", function(chunk){
	process.stdout.write(` chunk : ${chunk.length}`);

	data+=chunk;
});

// to show that file has finished reading
stream.on("end", function(){
		console.log("\n\n\n\n\n");
		console.log("Finsihed reading the file");
		console.log("\n\n\n\n\n");

});