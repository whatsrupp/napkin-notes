
function canCreateNewNote() {
  this.mess = "New note is saved in notepad:"
  var note = new Note();
  note.createNote("Ed and Alice's new note");
  assert.isEqual(note.notepad[0], "Ed and Alice's new note");
}

function getFirst20Chars() {
  this.mess = "Checks first 20chars of one note is shown:"
  var note = new Note();
  note.createNote("123456789-123456789-STOP");
  assert.isEqual(note.shorten(note.notepad[0]), "123456789-123456789-" );
}

function noteListLoop() {
  this.mess = "Checks first 20chars of every note is shown:"
  var note = new Note();
  note.createNote('The novel strays on top of the gorgeous purchase.');
  note.createNote('The potato strays on top of the gorgeous purchase.');
  assert.isArrayEqual(note.getShortlist(), ["The novel strays on ", "The potato strays on"]);
}

function unitTest(test){
  var success = true;
  try {
    test();
    document.write(mess);
    document.write("<br>")
  }
  catch(err) {
    success = false;
    document.write(mess);
    document.write("<br>");
    document.write(err);
    document.write("<br>");
    document.write("<br>");
  }
  if(success) {
    document.write('no error');
    document.write("<br>");
    document.write("<br>");
  }
}

unitTest(noteListLoop);
unitTest(canCreateNewNote);
unitTest(getFirst20Chars);
