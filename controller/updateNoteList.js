(function(exports) {

  function updateNoteList() {

    var numberOfNotes = noteList.notepad.length;
    var noteIndex = numberOfNotes -1;
    var listElement = document.getElementById('note-list');
    var newNoteElement = document.createElement('li');
    var newNoteId = 'note' + numberOfNotes.toString();
    newNoteElement.setAttribute('id', newNoteId );
    var abbreviatedNoteText = noteList.notepad[noteIndex].text.slice(0, 20);
    var noteString = document.createTextNode(abbreviatedNoteText);
    newNoteElement.appendChild(noteString);
    listElement.appendChild(newNoteElement);
    addNoteEventListener(newNoteId, noteIndex);

  }

  function loadSingleNote(noteIndex){
    viewSingleNote(noteIndex)
  }

  function addNoteEventListener (noteId, noteIndex){
    noteLink = document.getElementById(noteId)

    noteLink.addEventListener("click", function(){
      loadSingleNote(noteIndex)
    }, false);
  }
exports.updateNoteList = updateNoteList;
})(this);
