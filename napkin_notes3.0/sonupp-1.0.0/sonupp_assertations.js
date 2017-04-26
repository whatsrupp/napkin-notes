function pageHasContent(text){
  bodyTextNodes = textNodesUnder(document.body);
  bodyTextContent = concatenateTextNodes(bodyTextNodes);
  result = checkStringForText(bodyTextContent, text);
  if (result == true) {
    console.log("Pass: page contains '" + text + "'")
  } else if (result == false) {
    throw new Error("Page does not contain '" + text + "'");
  }
}
function pageDoesNotHasContent(text){
  bodyTextNodes = textNodesUnder(document.body);
  bodyTextContent = concatenateTextNodes(bodyTextNodes);
  result = checkStringForText(bodyTextContent, text);
  if (result == false) {
    console.log("Pass: page does not contain '" + text + "'")
  } else if (result == true) {
    throw new Error("Page contains '" + text + "'");
  }
}
