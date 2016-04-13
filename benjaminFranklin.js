/*var events=require('events');
var emitter=new events.EventEmitter();


emitter.on('abhisCustomEvent',function(message,status) {
	console.log(`${status}: ${message}`);
});

//now we have creadted a custom event 
//so we need to trigger it 

emitter.emit('abhisCustomEvent',"HelloWorld",200);//emit or trigger the event
*/

//there is a better way to handle emitter constructor call (first line)
// by follwoing method

/*
var EventEmitter = require('events').EventEmitter;
var util =  require('util');
//class Person

var Person = function(name){
	this.name=name;
}

util.inherits(Person,EventEmitter);
*/
var Person = require("./lib/Person");

var ben =  new Person('Ben Franklin'); // constructor 
var george = new Person('George Washington');

//when speak event is raised then this is run -->
ben.on('speak', function(said){
	console.log(`${this.name}: ${said}`);
});
george.on('speak', function(said){
	console.log(`${this.name} -> ${said}`);
});
//ben must now trigger the event
ben.emit("speak","You may delay but time may NOT");
george.emit("speak","It is far better to be alone than to be in bad company");