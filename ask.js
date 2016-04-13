process.stdout.write("Hello ");
process.stdout.write("WOrld \n\n\n\n");

var questions = [
"What is your name?",
"What is your fav hobby?",
"What is your programming lanuage?"];

var answers=[];

function ask(i){
	process.stdout.write(`\n\n\n ${questions[i]}`);
	process.stdout.write("    >     ");
}
//we ned to create a listener

process.stdin.on('data',function(data){  //this is callback function

	process.stdout.write('\n' + data.toString().trim()+'\n');
	answers.push(data.toString().trim());
	if (answers.length<questions.length){
		ask(answers.length);
	}else{
		process.exit();
	}
});

process.on('exit',function(){
	process.stdout.write("\n\n\n\n");
	process.stdout.write(`Go ${answers[1]}, ${answers[0]}. You can finish writing your program in ${answers[2]} later`);
	process.stdout.write("\n\n\n\n");
});
ask(0)