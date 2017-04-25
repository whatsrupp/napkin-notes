(function(exports) {
  function Note() {
    this.notepad = [];
    this.shortlist = [];
  }

Note.prototype.createNote = function (string) {
  this.notepad.push(string);
  this.shortlist.push(this.shorten(string));
};

Note.prototype.shorten = function (string) {
  return string.slice(0,20);
};

Note.prototype.getShortlist = function() {
  return this.shortlist;
};

  exports.Note = Note;
})(this);

var note = new Note
note.createNote('The novel strays on top of the gorgeous purchase.');
note.createNote('The potato strays on top of the gorgeous purchase.');
