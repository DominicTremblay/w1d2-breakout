var alpha = 'Mercury';

function beta() {
  var gamma = 'Venus';
  alpha = 'Earth';

  function delta(omega) {
    omega = 'Jupiter';
    var gamma = 'Mars';
    console.log('lambda:', lambda); //?
    lamda = 'Pluto';
    console.log('gamma inside delta:', gamma); //?
  }
  delta();
}

beta();
console.log(lamda);
