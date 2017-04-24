
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
  note.createNote('555555555555555555555555555555');
  note.createNote('444444444444444444444444444444');
  note.createNote('333333333333333333333333333333');
  note.createNote('222222222222222222222222222222');
  note.createNote('111111111111111111111111111111');
  assert.isEqual(note.shortlist,['55555555555555555555','44444444444444444444',
                                  '33333333333333333333','22222222222222222222',
                                  '11111111111111111111']);
}

noteListLoop();
canCreateNewNote();
getFirst20Chars();
