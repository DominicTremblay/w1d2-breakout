// Hoisting
// Difference between
// Function declarations and
// Function expressions

var alpha = beta();
var lambda = omega();

console.log(alpha); //?
console.log(lamda); //?

function beta() {
  return 'Venus';
}

var omega = function() {
  return beta();
};
