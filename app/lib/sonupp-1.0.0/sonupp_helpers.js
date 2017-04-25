function clickButton(id){
  var button = document.getElementById(id);
  if (button.tagName != 'BUTTON'){
    throw new Error('Eff Off, element found is not a button');
  }else{
    button.click();
  }
}
