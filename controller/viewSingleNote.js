(function(exports) {

  viewSingleNote = function(note) {
    viewSingleNote.prototype.displayNote = function () {
      var note = document.createElement('p');
      var noteString = document.createTextNode(noteModel.text);
      note.appendChild(noteString);
      return note;
    };

  }

  exports.viewSingleNote = viewSingleNote;
})(this);
