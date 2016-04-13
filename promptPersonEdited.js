var readline = require('readline');
var rl=readline.createInterface(process.stdin,process.stdout);
var fs=require("fs");

var realPerson={
	name:'',
	sayings:[]
};
rl.question("What is the name of a real Person?", function(answer){
	realPerson.name=answer;

	fs.writeFileSync(realPerson.name+".md",`${realPerson.name}\n================\n\n`); // for sync call no calback function

	rl.setPrompt(`What would ${realPerson.name} say?`);
	//console.log(answer);
	rl.prompt();
	rl.on('line', function(saying){
		
		fs.appendFile(realPerson.name+".md",`* ${saying.trim()} \n`);

		if (saying=='exit'){
			rl.close();
		}else{
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		rl.prompt();
		//console.log(saying.trim());
		realPerson.sayings.push(saying.trim());
		}
	});

});

rl.on('close', function(){
	console.log("%s is a real person that says %j",realPerson.name, realPerson.sayings);
	process.exit();
});