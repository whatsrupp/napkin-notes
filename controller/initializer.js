setupPageDivs();
buildForm();
buildList();
var noteList = new NoteList();
var form = document.getElementById('create-note-button');
form.addEventListener("click", createNote, false);
