(function(exports) {

  viewSingleNote = function(noteIndex) {
      var noteObject = noteList.notepad[noteIndex]
      var noteString = noteObject.text
      var divId = 'note-view-div'
      var noteViewDiv = document.createElement('div');

      clearDiv(divId)
      noteViewDiv.setAttribute('id', divId );

      var noteTextNode = document.createTextNode(noteString);
      noteViewDiv.appendChild(noteTextNode);
      document.body.appendChild(noteViewDiv)
    };

  clearDiv = function(divId){
    var div = document.getElementById(divId);
    if (div) document.body.removeChild(div);
  }

  exports.viewSingleNote = viewSingleNote;
})(this);
