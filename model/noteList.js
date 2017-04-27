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

  exports.NoteList = NoteList;
})(this);
