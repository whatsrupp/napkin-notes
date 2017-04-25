function addTextArea(){
  var div = document.createElement('div');
  div.setAttribute("class",'text-area');

  var element = document.createElement('textarea');
  element.setAttribute("rows",'10');
  element.setAttribute("cols",'50');

  div.appendChild(element);
  document.body.appendChild(div);
}

function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

function concatenateTextNodes(textNodeArray){
  var finalString = ''

  for (i=0; i <textNodeArray.length; i++){
    finalString += textNodeArray[i].nodeValue
  }
  return finalString
}

function checkStringForText(mainString, soughtString){
  var test = new RegExp(soughtString)
  return test.test(mainString);
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
