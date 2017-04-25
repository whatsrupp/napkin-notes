function noteSnippetAppearsOnPage() {
  fillInTextBox("newNote", "This is a test for listing forst twenty chars of a note");
  clickSubmit("submit");
  pageHasContent("This is a test");
}
function wholeNoteIsNotOnPage(){
  fillInTextBox("newNote", "This is a test for excluding chars after twenty");
  clickSubmit("submit");
  pageDoesNotHasContent("chars after twenty")
}
function createMultipleNotes() {
  fillInTextBox("newNote", "Note no. 1");
  clickSubmit("submit");
  fillInTextBox("newNote", "Note no. 2");
  clickSubmit("submit");
  fillInTextBox("newNote", "Note no. 3");
  clickSubmit("submit");
}
function selectNewNote() {
  fillInTextBox("newNote", "This test is for the correct function of links");
  clickListItem('0');
  pageHasContent("This test is for the correct function of links")
}
function onlySelectedNoteAppears() {
  fillInTextBox("newNote", "Note no. 1                xxxxxxxxxxxxxxx");
  clickSubmit("submit");
  fillInTextBox("newNote", "Note no. 2               yyyyyyyyyy");
  clickSubmit("submit");
  clickListItem('0');
  clickListItem('1');
  pageHasContent('yyy')
  pageDoesNotHasContent('xxx')
}
noteSnippetAppearsOnPage();
wholeNoteIsNotOnPage();
createMultipleNotes();
selectNewNote();
onlySelectedNoteAppears();
