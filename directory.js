var fs=require("fs");

if (fs.existsSync("lib")){
	console.log("Already exists");
}else{
	fs.mkdir("lib",function(err){
	console.log("There is an err", err);
});
console.log("Directory created");	
}
 