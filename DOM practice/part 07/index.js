
function createTable(){
    var myTable = document.getElementById("myTable");

    var createRow = parseInt(prompt("Enter row count"));

    var createColumn = parseInt(prompt("Enter column count"));

    // var myText = prompt("Enter your Text");

   for(var r = 0; r<createRow;r++){
    var x = myTable.insertRow(r);
    
    for(var c = 0; c<createColumn;c++){
        var y = x.insertCell(c);
        y.innerHTML= "Row - " + r + " Column - " + c;

        console.log(x + y);
    }
   }
}