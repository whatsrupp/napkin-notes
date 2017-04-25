function clickButton(id){
  var button = document.getElementById(id);
  if (button.tagName != 'BUTTON'){
    throw new Error('Eff Off, element found is not a button');
  }else{
    button.click();
  }
}

function clickSubmit(id){
  var formButton = document.getElementById(id);
  if(formButton.tagName != 'INPUT' || formButton.type !='submit'){
    throw new Error('Stuff yourself, this is not a form button');
  }else{
    formButton.click();
  }
}
