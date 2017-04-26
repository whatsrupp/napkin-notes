function noteListLoop() {
  this.mess = "Checks first 20chars of every note is shown:";
  var notelist = new NoteList();
  notelist.storeNote('The novel strays on top of the gorgeous purchase.');
  notelist.storeNote('The potato strays on top of the gorgeous purchase.');
  assert.isArrayEqual(notelist.getNotes(), ['The novel strays on top of the gorgeous purchase.', 'The potato strays on top of the gorgeous purchase.']);
}

function createAndStore() {
  this.mess = 'Checks a note can be created & stored';
  var notelist = new NoteList();
  notelist.createAndStore('this is a note');
  assert.isArrayEqual(notelist.notepad[0].text, 'this is a note');
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
unitTest(noteListLoop);
unitTest(createAndStore);
