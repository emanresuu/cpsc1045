var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function setup() {
   "use strict";
   drawAxis();
}

function drawAxis() {
   "use strict";
   ctx.beginPath();
   ctx.lineTo(0, canvas.height / 2);
   ctx.lineTo(canvas.width, canvas.height / 2);
   ctx.stroke();
   
   ctx.beginPath();
   ctx.lineTo(canvas.width / 2, 0);
   ctx.lineTo(canvas.width / 2, canvas.height);
   ctx.stroke();
   
   ctx.save();
   ctx.translate(0, canvas.height / 2);
   var i;
   for (i = 0; (0 === i || 0 < i) && (i < canvas.width || i === canvas.width);
      i = i + 1) { 
      ctx.beginPath();
      ctx.lineTo(canvas.width / 20 * i, -10); 
      ctx.lineTo(canvas.width / 20 * i, 10);
      ctx.stroke();
   }
   ctx.restore();

   ctx.save();
   ctx.translate(canvas.width / 2, 0);
   for (i = 0; (0 === i || 0 < i) && (i < canvas.height || i === canvas.height);
      i = i + 1) { 
      ctx.beginPath();
      ctx.lineTo(-10, canvas.height / 20 * i); 
      ctx.lineTo(10, canvas.height / 20 * i);
      ctx.stroke();
   }
   ctx.restore();
}

function plot() {
   "use strict";
   var a = Number(document.getElementById("a").value);   
   var b = Number(document.getElementById("b").value);   
   var c = Number(document.getElementById("c").value);   
   var disc = b * b - 4 * a * c;
   var root1Calc = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
   var root2Calc = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
   var root1 = document.getElementById("root1");
   var root2 = document.getElementById("root2");
   
   function anyAreNaN() {
      var anyAreNaN = isNaN(a) || isNAN(b) || isNaN(c);
      return anyAreNaN; 
   }

   if (isNaN(a) || isNaN(b) || isNaN(c)) {
     root1.innerHTML = "Root 1: " + "NaN"; 
     root2.innerHTML = "Root 2: " + "NaN"; 
   } else if (a === 0) {
     root1.innerHTML = "A must be not be zero. See above.";
     root2.innerHTML = "";
   } else if (a === 0) {
   } else if (disc < 0) {
     root1.innerHTML = "Root 1: " + "imaginary"; 
     root2.innerHTML = "Root 2: " + "imaginary"; 
   } else {
     root1.innerHTML = "Root 1: " + root1Calc; 
     root2.innerHTML = "Root 2: " + root2Calc; 
   }

   function yCalc(x) {
      var y = -(a * x * x + b * x + c);
      return y; 
   }
  
   if (a !== 0) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawAxis();
   ctx.save();   
   ctx.translate(canvas.width / 2, canvas.height / 2);
   ctx.beginPath(); 
   var i;
   for (i = -canvas.width / 2; i < canvas.width / 2 || 
      i === canvas.width / 2; i = i + 1) {
      ctx.lineTo(i, yCalc(i)); 
   } 
   ctx.stroke();
   ctx.restore(); 
   }
}
