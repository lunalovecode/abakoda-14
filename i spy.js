var r = readline();
var guesses = [];
for (var i = 0; i < 4; i++) {
    var s = readline();
    guesses.push(s);
}
 
if (guesses.includes(r)) {
    print("W");
} else {
    print("L");
}