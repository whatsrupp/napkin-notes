(function(exports) {

  function updateNoteList() {

    var numberOfNotes = noteList.notepad.length;
    var listElement = document.getElementById('note-list');
    var newNoteElement = document.createElement('li');

    newNoteElement.setAttribute('id', 'note' + (numberOfNotes.toString()) );

    var abbreviatedNoteText = noteList.notepad[numberOfNotes-1].text.slice(0, 20);

    var noteString = document.createTextNode(abbreviatedNoteText);
    newNoteElement.appendChild(noteString);
    listElement.appendChild(newNoteElement);

  }
exports.updateNoteList = updateNoteList;
})(this);
