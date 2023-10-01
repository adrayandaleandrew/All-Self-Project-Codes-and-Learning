var text = document.querySelector("#text");
var jsbtn = document.querySelector("#jsstyle");

jsbtn.addEventListener("click", js_style);


function js_style(){
    text.style.color = 'blue';
    document.getElementById("text").style.fontStyle = "bold";
    text.style.fontSize = "50px";
}