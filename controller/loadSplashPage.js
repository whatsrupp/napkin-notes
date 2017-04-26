(function(exports){

  setupPageDivs = function (){

    var headerDiv = document.createElement('div');
    headerDiv.setAttribute("class",'title-div');
    headerDiv.setAttribute('id','header');
    document.body.appendChild(headerDiv);

    var noteInputDiv = document.createElement('div');
    noteInputDiv.setAttribute("class",'note-input-div');
    noteInputDiv.setAttribute("id",'note-input-div');

    document.body.appendChild(noteInputDiv);


    var subtitleDiv = document.createElement('div');
    subtitleDiv.setAttribute("class",'title-div');
    subtitleDiv.setAttribute('id','subtitle');
    document.body.appendChild(subtitleDiv);

    var noteListDiv = document.createElement('div');
    noteListDiv.setAttribute("class",'note-list-div');
    noteListDiv.setAttribute("id",'note-list-div');

    document.body.appendChild(noteListDiv);

  }

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
    var div = document.getElementById('note-input-div');
    form.appendChild(addTextArea());
    form.appendChild(addButton());
    div.appendChild(form);
  }

  exports.buildForm = buildForm;
exports.setupPageDivs = setupPageDivs
})(this);

setupPageDivs()
buildForm();
