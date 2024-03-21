let greenDiv = document.getElementsByClassName('green')[0];
let blueDiv = document.getElementsByClassName('blue')[0];
let redDiv = document.getElementsByClassName('red')[0];

// blueDiv.addEventListener('click', backgroundChange);
// greenDiv.addEventListener('click', backgroundChange);
// redDiv.addEventListener('click', backgroundChange);


// function backgroundChange() {
//   if (redDiv.style.backgroundColor === 'rgb(255, 0, 0)') {
//     redDiv.style.backgroundColor = 'black';
//   } else if (greenDiv.style.backgroundColor === 'rgb(0, 128, 0)') {
//     greenDiv.style.backgroundColor = 'black';
//   } else if (blueDiv.style.backgroundColor === 'rgb(0, 0, 255)') {
//     blueDiv.style.backgroundColor = 'black';
//   }
// }

blueDiv.addEventListener('click', function () {
  if (blueDiv.style.backgroundColor = 'blue') {
    blueDiv.style.backgroundColor = 'black';
  }
})


redDiv.addEventListener('click', function () {
  redDiv.style.backgroundColor = 'black';
})

greenDiv.addEventListener('click', function () {
  greenDiv.style.backgroundColor = 'black';
})