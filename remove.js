var fs= require("fs");

try{
	fs.unlinkSync("./lib/config.json"); // synchronous fucntion automatically throw errors, incase you dont want to throw an error then surround by try catch block
} catch(err){
	console.log(err);
}

fs.unlink("notes.md", function(err){
	if (err){
		console.log(err);
	} else{
		console.log("Notes.md has been removed");
	}
});