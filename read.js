var fs= require("fs");
var path=require("path");
//var contents=fs.readFileSync("./lib/sayings.txt","UTF-8");

fs.readdir("./lib",function(err,files){
	files.forEach(function(fileName){
		var file=path.join(__dirname,"lib",fileName); //combines in /abc/xyz form
		var stats=fs.statSync(file);
		if (stats.isFile() && fileName !== ".DS_Store") {
			fs.readFile(file, "UTF-8", function(err,contents){
				console.log(contents);
			});
		}
	});
});

fs.readFile('./lib/sayings.txt',"UTF-8", function(err, contents){
	if(err){
		console.log("This is an err", err);
	}
	console.log(contents);
});
