(function(exports) {

  function NoteController(notelist) {
    this.noteListView = new NoteListView(notelist);

  }

  NoteController.prototype.appendList = function() {
    list = this.noteListView.listNotes();
    document.body.appendChild(list);
  };



  exports.NoteController = NoteController;
})(this);
