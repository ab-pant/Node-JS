var fs=require("fs");

fs.renameSync("./lib/project-config.js","./lib/config.json");
console.log("JSON file is renamed");

fs.rename("./lib/notes.md","./notes.md", function(err){

	if(err){
		console.log(err);
	} else{
		console.log("Notes.md has been sucessfully moved");
	}
});