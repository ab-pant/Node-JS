var readline = require('readline');
var fs=require("fs");
var rl=readline.createInterface(process.stdin,process.stdout);

var realPerson={
	name:'',
	sayings:[]
};
rl.question("What is the name of a real Person?", function(answer){
	realPerson.name=answer;

	var stream= fs.createWriteStream(realPerson.name+".md");
	stream.write(`${realPerson.name} \n ============== \n`);

	rl.setPrompt(`What would ${realPerson.name} say?`);
	//console.log(answer);
	rl.prompt();
	rl.on('line', function(saying){
		

		if (saying=='exit'){
			stream.close(); // closing the stream is IMPORTANT
			rl.close();
		}else{
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		rl.prompt();
		//console.log(saying.trim());
		realPerson.sayings.push(saying.trim());
			stream.write(`* ${saying.trim()}\n`);
		}
	});

});

rl.on('close', function(){
	console.log("%s is a real person that says %j",realPerson.name, realPerson.sayings);
	process.exit();
});