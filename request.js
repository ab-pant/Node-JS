var https=require("https");
var fs=require("fs");

var options = { //object
	hostname: "en.wikipedia.org",
	port:443, //http port usualy is 80 for https its 443
	path:"/wiki/George_Washington",
	method: "GET"
};

var req=https.request(options, function(res){  //once the request functions strats getting back a responce it will invoke the callback function
											   // the response object is created as the data comes in as a STREAM
	var responseBody="";
	console.log("Response from the server has started");
	console.log(`Server status: ${res.statusCode}`);
	console.log("Response headers : %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk){
		console.log(chunk);

	});

	res.on("data", function(chunk){
		console.log(`-- chunk-- ${chunk.length}`);
		responseBody+=chunk;
	});

	res.on("end", function(err){
		fs.writeFile("george-washington.html", responseBody, function(err){
			if (err){
				throw err;
			}
			console.log("File downloaded");
		});
	});

});

req.on("error", function(err){
	console.log(`problem with request: ${err.message}`);
});
req.end();
