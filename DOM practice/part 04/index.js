function getAttributes(){
    var w3rType = document.getElementById("w3r");
    
    for(i = 0; i < 1; i++){
        var typesuu =  w3rType.getAttribute("type");
        var hreflengwa =  w3rType.getAttribute("hreflang");
        var relate =  w3rType.getAttribute("rel");
        var targetuu =  w3rType.getAttribute("target");
        var linkmismo =  w3rType.getAttribute("href");
    }
    
    console.log(typesuu);
    console.log(hreflengwa );
    console.log(relate);
    console.log(targetuu);
    console.log(linkmismo);
}


// OTHER SOL'N

// function getAttributes()
// {
//  var u = document.getElementById("w3r").href;
//  alert('The value of the href attribute of the link is : '+u);
//  var v = document.getElementById("w3r").hreflang;   
//  alert('The value of the hreflang attribute of the link is : '+v);
//  var w = document.getElementById("w3r").rel; 
//   alert('The value of the rel attribute of the link is : '+w);
//  var x = document.getElementById("w3r").target; 
//   alert('The value of the taget attribute of the link is : '+x);
//  var y = document.getElementById("w3r").type; 
//   alert('The value of the type attribute of the link is : '+y);  
// }