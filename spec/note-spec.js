function canCreateNewNote() {
  this.mess = "New note is saved in notepad:";
  var note = new Note();
  note.createNote("Ed and Alice's new note");
  assert.isEqual(note.text, "Ed and Alice's new note");
}

function unitTest(test){
  var success = true;
  try {
    test();
    document.write(mess);
    document.write("<br>");
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


unitTest(canCreateNewNote);
