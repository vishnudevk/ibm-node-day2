// console.log(process.argv[2]);
let evt = require("events").EventEmitter;
let ee = new evt();
process.nextTick(function(){
    ee.emit("ibm");
});
ee.on("ibm", ibmhandler);
function ibmhandler(){
    console.log("IBM event happened")
}
console.log("after the eventhandler is assigned");