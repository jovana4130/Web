var container = document.querySelector('.container');
var button = document.getElementById('.button');
var target = document.getElementById('.target');


/*var target = document.getElementById('target');
var targetBox = document.getElementById('target-box');
targetBox.addEventListener('click', mouseClicked);*/
var action = function () {
  var x = event.clientX;
  var y = event.clientY;
  target.style.position = 'absolute';
  target.style.left = x + 'px';
  target.style.top = y + 'px';
}

  /*target.style.transform = "translate("+ xposition + "px," + yposition + "px)";
  console.log(event);*/

container.addEventListener('click', move);

button.addEventListener('click', function() {
    container.removeEventListener('click', move);
});