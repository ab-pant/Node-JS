var fs= require("fs");
var http = require("http");
var path= require("path");

http.createServer(function(req,res){

	console.log(`Request method :${req.method} for the URL : ${req.url}`);

	if(req.url === "/"){   // then we know that its asking for the home page 
		fs.readFile("./lib/public/index.html","UTF-8", function(err, html){
			//we read the index.html file contents
			// once we have read the file we respond
			//every response needs its writeHead() function
			
			res.writeHead(200, {"Content-Type":"text/html"});
			res.end(html); 

		});
	} else if(req.url.match(/.css$/)) {
		//using readFile takes time because it reads the entirte file before responsding
		//so better appraoch is the stream approach
		var cssPath=path.join(__dirname,'lib/public/',req.url);
		console.log(cssPath);
		var fileStream=fs.createReadStream(cssPath,"UTF-8");

		res.writeHead(200, {"Content-Type":"text/css"});
		fileStream.pipe(res);
	} else if (req.url.match(/.jpg$/)) { //for images handling
		var imgPath=path.join(__dirname,'lib/public/',req.url);
		console.log(imgPath);
		var imageStream=fs.createReadStream(imgPath);   //for image we read it as binary data  so no file encoding given 
		res.writeHead(200, {"Content-Type":"image/jpeg"});
		imageStream.pipe(res);   // readstream pipe to write streeam
	} else {
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.end("404 File not found.");
	}

}).listen(3000);   //every server must listen at a port 
console.log("Server has started\n Server listening at port 3000");