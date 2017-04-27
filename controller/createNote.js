(function(exports){

  function createNote() {
    generateAndStoreNote()
    updateNoteList();
    resetTextArea();
  }

  function generateAndStoreNote(){
    var noteText = document.getElementById('note-input-field').value;
    var note = new Note();
    note.createNote(noteText);
    noteList.storeNote(note);
  }

  function resetTextArea (){
    var textarea = document.getElementById('note-input-field');
    textarea.value = '';
  }

  exports.createNote = createNote;
})(this)
