(function(exports){

  setupPageDivs = function (){

    var headerDiv = setUpHeaderDiv();
    document.body.appendChild(headerDiv);

    var noteInputDiv = document.createElement('div');
    noteInputDiv.setAttribute("class",'note-input-div');
    noteInputDiv.setAttribute("id",'note-input-div');

    document.body.appendChild(noteInputDiv);


    var subtitleDiv = setUpSubTitleDiv();
    document.body.appendChild(subtitleDiv);

    var noteListDiv = document.createElement('div');
    noteListDiv.setAttribute("class",'note-list-div');
    noteListDiv.setAttribute("id",'note-list-div');

    document.body.appendChild(noteListDiv);

  };


  addToPage = function(element){
    document.body.appendChild(element)
  }

  setUpHeaderDiv = function(){
    var headerDiv = document.createElement('div');
    headerDiv.setAttribute("class",'title-div');
    headerDiv.setAttribute('id','header');

    var pageTitle = document.createElement('H1')
    var titleText = document.createTextNode("Napkin Notes");
    pageTitle.appendChild(titleText)
    pageTitle.setAttribute('id', 'page-title')

    headerDiv.appendChild(pageTitle)
    return headerDiv
  }

  setUpSubTitleDiv = function(){
    var subtitleDiv = document.createElement('div');
    subtitleDiv.setAttribute("class",'title-div');
    subtitleDiv.setAttribute('id','subtitle-div');
    var subtitle = document.createElement('H2')
    var titleText = document.createTextNode("List Of Notes");

    subtitle.setAttribute('id','subtitle');
    subtitle.appendChild(titleText);
    subtitleDiv.appendChild(subtitle);

    return subtitleDiv

  }



  function addTextArea(){
    var textarea = document.createElement('textarea');
    textarea.setAttribute('rows','10');
    textarea.setAttribute('cols','50');
    textarea.setAttribute('id','note-input-field');
    return textarea;
  }

  function addButton(){
    var button = document.createElement('button');
    var buttonName = document.createTextNode('Create');
    button.appendChild(buttonName);
    button.setAttribute('id','create-note-button');
    return button;
  }

  function buildForm() {
    var div = document.getElementById('note-input-div');
    div.appendChild(addTextArea());
    div.appendChild(addButton());
  }
  function buildList() {
  var list = document.createElement('ul');
  var div = document.getElementById('note-list-div');
  list.setAttribute('id','note-list');
  div.appendChild(list);
  }

  exports.buildList = buildList;
  exports.buildForm = buildForm;
  exports.setupPageDivs = setupPageDivs;
})(this);

setupPageDivs();
buildForm();
buildList();
var noteList = new NoteList();
function createNote() {
  var textarea = document.getElementById('note-input-field');
  var note = document.getElementById('note-input-field').value;
  noteList.createAndStore(note);
  var noteController = new NoteController(noteList);
  noteController.appendList();
  textarea.value = '';
}

//
var form = document.getElementById('create-note-button');
form.addEventListener("click", createNote, false);
