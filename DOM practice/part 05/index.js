var teybol = document.getElementById("sampleTable");

function insert_Row(){

    
    var row = teybol.insertRow(0);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = "NEW CELL";
    cell2.innerHTML = "NEW CELL";

}

// OTHER SOL'N

// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="New Cell1";
// z.innerHTML="New Cell2";
// }