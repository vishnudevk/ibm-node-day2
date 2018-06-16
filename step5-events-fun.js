let evt = require("events").EventEmitter;
let ee = new evt();

/*
setTimeout(function(){
    ee.emit("ibm");
},2000)
*/
let count = 1;
let si = setInterval(function(){
    count++;
    ee.emit("ibm", "good afternoon", "once again");
    if(count >= 5){
        clearInterval(si);
    }
},2000);

ee.on("ibm", function(msg, another){
    console.log("ibm happened", msg, " | ", another);
});

