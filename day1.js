// Cracking the Coding Interview // Compressed String - 1.5 //
var string = 'abbccc'
// var string = 'aabcccccaaaa';

var counter = 1;
var numArray = [];
var letterArray = [];
for (var i = 1; i < string.length; i++)
  if (letterArray.length  === 0) {

  }

  var previous = i - 1;
  if (string[i] === string[previous]) {
    counter++;
    if(i === string.length - 1) {
      numArray.push(counter);
    }
  } else {
    numArray.push(counter);
    letterArray.push(string[i])
    counter = 1;
  }
}

console.log(numArray);
// console.log(letterArray);
