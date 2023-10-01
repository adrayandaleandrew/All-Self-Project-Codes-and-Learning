function getOptions(){
  var mySelect = document.getElementById("mySelect");

  var x = mySelect.options.length;

  var text1 = mySelect.options[0].text;
  var text2 = mySelect.options[1].text;
  var text3 = mySelect.options[2].text;
  var text4 = mySelect.options[3].text;
  
  alert("No. of options : " + x + "\n" + text1 + 
  "\n" + text2 + "\n" + text3 + "\n" + text4);

}

// OTHER SOL'N 
// function getOptions()
// {
// var x=document.getElementById("mySelect");
// var txt1 = "No. of items : ";
// var i;
// l=document.getElementById("mySelect").length;  
// txt1 = txt1+l;
// for (i=0;i<x.length;i++)
//   {
//     txt1 = txt1 + "\n" + x.options[i].text;
//   }
// alert(txt1);
// }