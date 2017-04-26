(function(exports){

  setupPageDivs = function (){

    var headerDiv = document.createElement('div');
    headerDiv.setAttribute("class",'title-div');
    headerDiv.setAttribute('id','header');
    document.body.appendChild(headerDiv);

    var noteInputDiv = document.createElement('div');
    noteInputDiv.setAttribute("class",'note-input-div');
    document.body.appendChild(noteInputDiv);


    var subtitleDiv = document.createElement('div');
    subtitleDiv.setAttribute("class",'title-div');
    subtitleDiv.setAttribute('id','subtitle');
    document.body.appendChild(subtitleDiv);

    var noteListDiv = document.createElement('div');
    noteListDiv.setAttribute("class",'note-list-div');
    document.body.appendChild(noteListDiv);

  }


exports.setupPageDivs = setupPageDivs

})(this);

setupPageDivs()
