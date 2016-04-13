var http=require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"}); // for plain text its text/plain
	//res.end("Hello World");  -- for text response
	res.end(`
		<html>
			<head>
				<title> Response HTML page</title>
			</head>
			<body>
				<h1>Welcome !!</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
		`);
});

server.listen(3000); // this is the port on which server listens

console.log("Server is listening on 3000");

