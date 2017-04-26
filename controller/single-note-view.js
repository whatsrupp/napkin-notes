(function(exports) {

  SingleNoteView = function(note) {
    SingleNoteView.prototype.displayNote = function () {
      var note = document.createElement('p');
      var noteString = document.createTextNode(noteModel.text);
      note.appendChild(noteString);
      return note;
    };

  }

  exports.SingleNoteView = SingleNoteView;
})(this);
