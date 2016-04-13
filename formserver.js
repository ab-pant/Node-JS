var http = require("http");
var fs=require("fs");

http.createServer(function(req,res){

	if (req.method=="GET"){
	
		res.writeHead(200, {"Content-type":"text.html"});
		fs.createReadStream("./lib/form.html","UTF-8").pipe(res);  // fs pipe to res	
	
	} else if (req.method=="POST"){  // if it is a post method then we want to save the data from the form
									// body var gets the stream chunks and addds to body
		var body ="";
		req.on("data", function(chunk){   // the reqy.on func has the incoming form details in the POST method 
			body+=chunk;
		});

		req.on("end", function(){
		
			res.writeHead(200, {"Content-type":"text/html"});
			res.end(`
				<html>
					<head>
						<title>Form results</title>
					</head>	
					<body>
						<h1>Your form results are: </h1>
						<p>${body}</p>
					</body>
				</html>

				`);
		});
	}
	
}).listen(3000);

console.log("Server started at 3000");
