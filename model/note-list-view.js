(function(exports) {

  function NoteListView(notelist) {

    NoteListView.prototype.listNotes = function() {
      var notePadLength = notelist.notepad.length;
      var list = document.getElementById('note-list');
      var noteItem = document.createElement('li');
      noteItem.setAttribute('id',notePadLength.toString());
      var abbreviatedNote = notelist.notepad[notePadLength-1].text.slice(0, 20);
      var noteString = document.createTextNode(abbreviatedNote);
      noteItem.appendChild(noteString);
      // debugger;
      list.appendChild(noteItem);
    };
  }
exports.NoteListView = NoteListView;
})(this);
