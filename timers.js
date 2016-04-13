var timerVar=3000;
var currentTime=0;
var waitInterval=50;
var percentWeighted=0;

function writeWaitingPercentage(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting .. ${p}%`);
}

var handler=setInterval(function(){
	currentTime+=waitInterval;
	//console.log(`waiting ${currentTime/1000} seconds....`);
	percentWeighted = Math.floor((currentTime/timerVar)*100);
	writeWaitingPercentage(percentWeighted);
},waitInterval);

console.log("It is going to be legen- Wait for it");
setTimeout(function(){		//runs single time
	//console.log("Dary!");
	clearInterval(handler);
	writeWaitingPercentage(100);
	console.log("Done");
},timerVar);

process.stdout.write("\n\n");
writeWaitingPercentage(percentWeighted);