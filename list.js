var fs=require("fs");

//var files= fs.readdirSync('./lib'); // readdirSync synchounously read .. blocking the thread.
fs.readdir('./lib',function(err,files){
	if(err){
		throw err;
	}

	console.log(files);
});
console.log("Reading files");
