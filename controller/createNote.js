(function(exports){

  function createNote() {

    var textarea = document.getElementById('note-input-field');
    var noteText = document.getElementById('note-input-field').value;
    var note = new Note();
    note.createNote(noteText);
    noteList.storeNote(note);

    var noteController = new NoteController(noteList);
    noteController.appendList();
    textarea.value = '';
  }

  exports.createNote = createNote;
})(this)
