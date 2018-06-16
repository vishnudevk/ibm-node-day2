let user = "Batman";
let fname = "Bruce";
let lname = "Wayne";

module.exports.hero = user;
module.exports.fullname = function(){
    return fname+" "+lname;
}