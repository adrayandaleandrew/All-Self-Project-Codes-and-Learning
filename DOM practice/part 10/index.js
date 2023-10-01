// var btn = document.getElementById("submitBtn");
// btn.addEventListener('click',func);


function func(){
    var input, compute;
    
    input = parseInt(document.getElementById("radius").value, 10);
    
    compute = Math.round((1.33 * 3.14) + input**3);

    document.getElementById("volume").value = compute;

    return false;
}

window.onload = document.getElementById("MyForm").onsubmit = func;

// OTHER SOL'N

// function volume_sphere()
//  {
//   var volume;
//   var radius = document.getElementById('radius').value;
//   radius = Math.abs(radius);
//   volume = (4/3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById('volume').value = volume;
//   return false;
//  } 
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;