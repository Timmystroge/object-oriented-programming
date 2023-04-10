const {log, error} = console;

// N.B Objects has Key - Value Pair, functions doesn't;

function user(name, gender) {
    this.name = name;
    this.gender = gender;
    this.designation = "Staff";   
}

function admin(name, gender) {
    user.call(this, name, gender);
    this.gender = gender;
    this.designation = "Admin"
}
user.prototype.login = function(){
    log("User Logged In!")
    return this
}

admin.prototype.login =  function() {
    log("Admin Logged In!")
    return this
}

let stroge = new user("timmystroge", "male");
let tm = new admin("oyetola", "male");
log(stroge)
log(tm)