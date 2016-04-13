var path=require('path');
var util=require('util');
var v8=require('v8');
console.log(path.basename(__filename));
var dirUpload=path.join(__dirname,'www','files','uploads');
console.log(dirUpload);
util.log(dirUpload);
util.log(v8.getHeapStatistics());