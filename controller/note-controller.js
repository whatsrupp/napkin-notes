(function(exports) {

  function NoteController(notelist) {
    this.noteListView = new NoteListView(notelist);
  }

  NoteController.prototype.appendList = function() {
    this.noteListView.listNotes();
  };

  exports.NoteController = NoteController;
})(this);
