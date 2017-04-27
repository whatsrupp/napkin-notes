(function(exports) {

  viewSingleNote = function(noteIndex) {
      var noteObject = noteList.notepad[noteIndex]
      var noteString = noteObject.text

      var noteViewDiv = document.createElement('div');
      var noteTextNode = document.createTextNode(noteString);
      noteViewDiv.appendChild(noteTextNode);
      document.body.appendChild(noteViewDiv)
    };

  exports.viewSingleNote = viewSingleNote;
})(this);
