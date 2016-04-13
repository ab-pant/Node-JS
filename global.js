var hello="This is a new message";
global.console.log("Hello World");
global.console.log(hello);
console.log(hello);

var justNode=hello.slice(10);
console.log(`Rock the world from ${justNode}`);

console.log(__dirname);
console.log(__filename);

var path=require("path");
console.log(`${path.basename(__filename)}`);