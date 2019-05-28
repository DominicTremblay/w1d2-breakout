var alpha = 'Mercury';

function beta() {
  var gamma = 'Venus';
  alpha = 'Earth';
  delta = 'Jupiter';
}

var lambda = 'hello';

console.log(lambda); // ??Hello

function lambda() {
  lambda = 'pluto';
}

// var lambda = function() {
//     lamda = 'pluto'
// }
lambda(); // executing the function lambda = pluto
