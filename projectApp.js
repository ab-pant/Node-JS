var express = require("express");
var cors= require("cors");
var bodyParser=require("body-parser");
var app  = express();

var skierTerms = [
		{
			term: "Rip",
			defined:"To move at a high rate of speed"
		},
		{
			term:"Huck",
			defined:"TO throw your body ...."
		},
		{
			term:"Chowder",
			defined:"blah blah"
		}
];

//always good to register the statics 
//this is a middleware, firtst it will go through our middleware 
//has three components req, res and the next function it must invoke
//addding functionality to the workflow of the browser reqeust

app.use(bodyParser.json());
//urlendode adds the parsed data and passes it to the body part of the request object
//we now get the term and defiition from the form 
app.use(bodyParser.urlencoded({ extended: false}));  // extended is used for nested tags
app.use(function(req,res,next){
	console.log(`${req.method} request for '${req.url} - ${JSON.stringify(req.body)}'`);
	next();
})
app.use(express.static("./public"));
app.use(cors());
app.get("/dictionary-api",function(req,res){  //sets up a get route for us
	res.json(skierTerms); //json function takes a var and stringify it 
}); 
app.post("/dictionary-api",function(req,res){   // used for handling any post requests when /dictionary-api route is hit ie sent to the server
	skierTerms.push(req.body);
	res.json(skierTerms);
});  

app.delete("/dictionary-api/:term", function(req,res){// all these app.xxx() functions are form / page methods... delete is invoked to handle the delete request of the form/webpage
	skierTerms = skierTerms.filter(function(definition){
		return definition.term.toLowerCase() !== req.params.term.toLowerCase(); 
		//the above line checks if the selected/clicked word 
		//term matches the parameter of the request sent 
		//eg.  DELETE request for '/dictionary-api/Powder - {}'
	});
	res.json(skierTerms); //ajax will catch this res and refresh the elements
});


app.listen(3000);
console.log("express app running on port 3000");
module.exports = app;