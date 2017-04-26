(function(exports) {

  function NoteController(notelist) {
    this.noteListView = new NoteListView(notelist);

  }

  NoteController.prototype.appendList = function() {
    this.noteListView.listNotes();
  };



  exports.NoteController = NoteController;
})(this);

// function createNote() {
//   var note = document.getElementById('note-input-field').value;
//   noteList.createAndSave(note);
// }
//
// //
// var form = document.getElementById('note-input-form');
// form.addEventListener("submit", createNote, false);
