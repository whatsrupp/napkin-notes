function add(){
  var element = document.createElement('input');

  element.setAttribute("type",'text');

  document.body.appendChild(element);
}

function checkURL() {
  return window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
}
