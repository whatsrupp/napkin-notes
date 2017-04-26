(function(exports) {

  function NoteListView(notelist) {

    NoteListView.prototype.listNotes = function() {
      list = document.createElement('ul');
      list.setAttribute('id','notes');

       for(var i = 0; i < notelist.notepad.length; i++) {
         var noteItem = document.createElement('li');
         var noteString = document.createTextNode(notelist.notepad[i].text);
         noteItem.appendChild(noteString);
         list.appendChild(noteItem);

       }
      return list;
    };
  }
exports.NoteListView = NoteListView;
})(this);
