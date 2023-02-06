'use strict';

/*var container = document.querySelector('.container');
var button = document.getElementById('.button');
var target = document.getElementById('.target'); 

container.addEventListener('click', move);
button.addEventListener('click', function() {
  container.removeEventListener('click', move);
}); */

document.addEventListener('click', move);

/*var target = document.getElementById('target');
var targetBox = document.getElementById('target-box');
targetBox.addEventListener('click', mouseClicked);*/
function move () {
  var x = event.clientX;
  var y = event.clientY;
  var target = document.querySelector('img');
  target.style.position = 'absolute';
  target.style.left = x + 'px';
  target.style.top = y + 'px';
}

function removeEventListener() {
  document.removeEventListener('click', move)
};


document.querySelector('.button').addEventListener('click', removeEventListener);

  /*target.style.transform = "translate("+ xposition + "px," + yposition + "px)";
  console.log(event);*/
/*
button.addEventListener('click', function() {
    container.removeEventListener('click', move);
});*/