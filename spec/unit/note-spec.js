function canCreateNewNote() {
  this.mess = "New note is saved in notepad:";
  var note = new Note();
  note.createNote("Ed and Alice's new note");
  assert.isEqual(note.text, "Ed and Alice's new note");
}

unitTest(canCreateNewNote);
