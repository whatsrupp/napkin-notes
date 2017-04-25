(function(exports) {
  function Circle() {
    this.radius = 10;
  }

  exports.Circle = Circle;
})(this);

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
