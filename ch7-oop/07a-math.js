// calculate the area of a circle based on its radius
function calcCircleArea() {
   var r = document.getElementById("radius").value;
   var area = Math.PI * Math.pow(r, 2); // area is pi times radius squared
   return area;
}

console.log(calcCircleArea(35))
