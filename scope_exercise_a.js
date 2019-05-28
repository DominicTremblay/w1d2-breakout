var alpha = 'Mercury';

function beta() {
  console.log(gamma); // ?
  var gamma = 'Venus';
  console.log(gamma); // ?
  alpha = 'Earth';
}
console.log(alpha); // ?
beta();
console.log(alpha); // ?
