var button = document.getElementById('btn');
var input = document.getElementById('input');
var chat = document.getElementById('chat');

function addText() {
  var textMessage = document.createElement('p');
  var text = document.createTextNode(input.value);
  textMessage.appendChild(text);
  chat.appendChild(textMessage);
  input.value='';
};

button.addEventListener('click',addText);







