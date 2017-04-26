(function(exports) {

  function addForm(){
    var form = document.createElement('form');
    form.setAttribute('action','/note-controller.js');
    return form;
  }
  function addTextArea(){
    var textarea = document.createElement('textarea');
    textarea.setAttribute('rows','10');
    textarea.setAttribute('cols','50');
    textarea.setAttribute('id','newNote');
    return textarea;
  }
  function addButton(){
    var button = document.createElement('input');
    button.setAttribute('type','submit');
    button.setAttribute('id','createNote');
    button.setAttribute('value',"Create Note");
    return button;
  }

  function buildForm() {
    var form = addForm();
    form.appendChild(addTextArea());
    form.appendChild(addButton());
    document.body.appendChild(form);
  }

  exports.buildForm = buildForm;
})(this);


buildForm();
