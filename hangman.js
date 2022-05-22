var r = parseInt(readline());
var vocab = [];
for (var i = 0; i < r; i++) {
    vocab.push(readline());
}
var pattern = readline();

var positions = [];
for (var j = 0; j < pattern.length; j++) {
    if (pattern[j] !== "_") {
        positions.push(j);
    }
}

var output = "!";
var arr = [];
for (var k = 0; k < vocab.length; k++) {
    for (var l = 0; l < positions.length; l++) {
        if (vocab[k].length === pattern.length && vocab[k][positions[l]] === pattern[positions[l]]) {
            arr.push(vocab[k]);
            output = arr[k];
        } else {
            break;
        }
    }
}

print(output);
