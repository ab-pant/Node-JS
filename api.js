var http = require("http");

var data = require("./lib/data/inventory"); // json file is required

http.createServer(function(req,res){

	if (req.url==="/"){
		res.writeHead(200, {"content-Type":"text/json"});
		res.end(JSON.stringify(data));
	} else if (req.url==="/instock"){
		listInStock(res); // sending it the res object
	} else if (req.url==="/onorder"){
		listOnOrder(res); // sending it the res object
	} else {
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.end("404 File not found.");
	}
	
	
}).listen(3000);

console.log("Server started on port 3000");

//now to list the in stock items
function listInStock(res){
	var inStock = data.filter(function(item){     // filter is an inbuilt json handling func
		//item is each data node in the json
		return item.avail === "In stock";   //this return is for the callback function not listInStock func()
	}); 
	
	res.end(JSON.stringify(inStock));
}

function listOnOrder(res){
	var onOrder = data.filter(function(item){     // filter is an inbuilt json handling func
		//item is each data node in the json
		return item.avail === "On back order";   //this return is for the callback function not listInStock func()
	}); 
	
	res.end(JSON.stringify(onOrder));
}