var fs=require("fs");

var md= `

Sample Mardown text
===================

Sample Subtitle
----------------

*point 
*point
*point

`;

fs.writeFile("sample.md",md.trim(),function(err){ // name of file, content you want to write down, md is the string var above 
	console.log("File created");
});