(function(exports) {

  function NoteListView(notelist) {

    NoteListView.prototype.listNotes = function() {
      var list = document.createElement('ul');
      list.setAttribute('id','notes');

       for(var i = 0; i < notelist.notepad.length; i++) {
         var noteItem = document.createElement('li');
         var abbreviatedNote = notelist.notepad[i].text.slice(0, 20);
         var noteString = document.createTextNode(abbreviatedNote);
         noteItem.appendChild(noteString);
         list.appendChild(noteItem);

       }
      return list;
    };
  }
exports.NoteListView = NoteListView;
})(this);
