(function(exports) {

  function Note() {
    this.text = '';
  }

  Note.prototype.createNote = function(string) {
    this.text = string;
  };

  exports.Note = Note;
})(this);
