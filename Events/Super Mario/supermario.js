'use strict';

var supermario = document.getElementById('supermario');
var supermariorun = document.getElementById('supermariorun');
var container = document.querySelector('.container');

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    supermario.style.display = 'none';
    supermariorun.style.display = 'block';

    var position = parseInt(container.style.backgroundPosition) || 0;
    container.style.backgroundPosition = (position - 12) + 'px';
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowRight') {
    supermario.style.display = 'block';
    supermariorun.style.display = 'none';  
  }
});



