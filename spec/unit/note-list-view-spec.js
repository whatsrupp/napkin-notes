function listViewLength() {
  this.mess = "List is the right length";
  var noteList = new NoteList();
  noteList.createAndStore("This is the first note");
  noteList.createAndStore("This is the second note");
  var noteListView = new NoteListView(noteList);
  assert.isEqual(noteListView.listNotes().getElementsByTagName('li').length, 2);
}

function correctElements() {
  this.mess = "First li element has correct content";
  var noteList = new NoteList();
  noteList.createAndStore("This is the first note");
  noteList.createAndStore("This is the second note");
  var noteListView = new NoteListView(noteList);
  assert.isEqual(noteListView.listNotes().getElementsByTagName('li')[0].innerHTML, "This is the first note");
}

unitTest(listViewLength);
unitTest(correctElements);
