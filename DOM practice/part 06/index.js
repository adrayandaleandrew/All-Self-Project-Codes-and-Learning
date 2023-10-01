function changeContent(){
    
rowInput = prompt("Input the row number (0, 1, 2 ): ");
columnInput = prompt("Input the colum number ( 0, 1 ): ");
textChange = prompt("Input the cell to be changed: ");

var x = document.getElementById("myTable").rows[parseInt(rowInput)].cells;
x[parseInt(columnInput)].innerHTML = textChange;

}

// MORE PRACTICE HERE, lito pa 