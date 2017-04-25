function addTextArea(){
  var div = document.createElement('div');
  div.setAttribute("class",'text-area');

  var element = document.createElement('input');
  element.setAttribute("type",'textarea');

  element.setAttribute("style",'width: 500px; font-size: 15px; height: 150px;');
  element.setAttribute("rows",'20');
  element.setAttribute("cols",'50');

  div.appendChild(element);
  document.body.appendChild(div);
}

function checkURL() {
  return window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
}

function addButton(){
  var button = document.createElement("input");
  button.setAttribute("type",'button');
  button.setAttribute("id",'createButton');
  button.setAttribute("value",'Create');
  document.body.appendChild(button);
}

addTextArea()
addButton()
