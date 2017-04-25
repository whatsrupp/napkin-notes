(function(exports) {

  function NoteList() {
    this.notepad = [];
  }

  NoteList.prototype.storeNote = function(note) {
    this.notepad.push(note);
  };

  NoteList.prototype.getNotes = function() {
    return this.notepad;
  };

  NoteList.prototype.createAndStore = function(p) {
    var a = new Note();
    a.createNote(p);
    this.storeNote(a);
  };

  exports.NoteList = NoteList;
})(this);
