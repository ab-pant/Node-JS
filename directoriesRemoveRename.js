var fs=require("fs");

//fs.renameSync("./lib/assets/log","./lib/log");

//console.log("Directory moved");

fs.readdirSync("./lib/log").forEach(function(fileName){
	fs.unlinkSync("./lib/log/"+fileName);
	console.log("File removed");
});

//You cannot remove a folder if it isnt empty ir there are files  inside the folder
fs.rmdir("./lib/assets",function(err){
	if (err){
		throw err;
	} 
console.log("Assets Directory removed");

});

fs.rmdir("./lib/log",function(err){
	if (err){
		throw err;
	} 
console.log("Log Directory removed");

});

