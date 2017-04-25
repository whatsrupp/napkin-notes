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
