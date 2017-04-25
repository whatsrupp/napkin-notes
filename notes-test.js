
function canCreateNewNote() {
  var note = new Note();
  note.createNote("Ed and Alice's new note");
  assert.isEqual(note.notepad[0], "Ed and Alice's new note");
}

function getFirst20Chars() {
  var note = new Note();
  note.createNote("123456789-123456789-STOP");
  assert.isEqual(note.shorten(note.notepad[0]), "123456789-123456789-" );
}

function noteListLoop() {
  var note = new Note();
  note.createNote('The novel strays on top of the gorgeous purchase.');
  note.createNote('The potato strays on top of the gorgeous purchase.');
  assert.isArrayEqual(note.getShortlist(), ["The novel strays on ", "The potato strays on"]);
}

noteListLoop();
canCreateNewNote();
getFirst20Chars();
