var canvas_1 = document.getElementById("canvas1");
var cxt1 = canvas_1.getContext("2d");

// make a new local coordinate system at the centre of the canvas
cxt1.translate(canvas_1.width / 2, canvas_1.height / 2 - 20);

// GHOST?
var ghost = window.confirm("Is the animal a ghost?");
if (ghost === false) {
   cxt1.beginPath();  // draw the outline of the face
   cxt1.arc(0, 0, 100, 0, 2 * Math.PI);
   cxt1.stroke();
}

// EYES?
var eyes = window.confirm("Does the animal have eyes?");
if (eyes === true) {
   cxt1.beginPath();  // draw right eye
   cxt1.arc(22, -30, 10, 0, 2 * Math.PI);
   cxt1.stroke();
   cxt1.beginPath();  // draw left eye
   cxt1.arc(-22, -30, 10, 0, 2 * Math.PI);
   cxt1.stroke();
}

// NOSE?
var nose = window.confirm("Does the animal have a nose?");
if (nose === true) {
   cxt1.beginPath();  // draw a nose
   cxt1.arc(0, 11, 20, 0, 2 * Math.PI);
   cxt1.stroke();
}

// MOUTH, HAPPY?
var mouth = window.confirm("Does the animal have a mouth?");
var happy = window.confirm("Is the animal happy?");
if (mouth === true) {
   if (happy === true) {
      cxt1.beginPath();  // draw a happy face
      cxt1.arc(0, 20, 50, 0, Math.PI);
      cxt1.stroke();
   } else {
      cxt1.beginPath();  // draw a sad face
      cxt1.arc(0, 75, 35, Math.PI, 0);
      cxt1.stroke();
   }
}

// ARMS
var arms = window.prompt("Does the animal have 0, 1, or 2 arms?");

if (Number(arms) !== 0 && Number(arms) !== 1 && Number(arms) !== 2) {  // isNaN() would be redundant
   window.alert("I  can only accept 1, 2, or 3 as answers. Somehow this is Microsoft's fault. Please try again.");
} else {

   cxt1.beginPath();  // torso
   cxt1.lineTo(0, 100);
   cxt1.lineTo(0, 150);
   cxt1.stroke();

   if (Number(arms) === 1) {

      cxt1.beginPath();  // right arm
      cxt1.lineTo(0, 120);
      cxt1.lineTo(-30, 110);
      cxt1.stroke();

   } else if (Number(arms) === 2) {
   
      cxt1.beginPath();  // right arm
      cxt1.lineTo(0, 120);
      cxt1.lineTo(-30, 110);
      cxt1.stroke();
      
      cxt1.beginPath();  // left arm
      cxt1.lineTo(0, 120);
      cxt1.lineTo(12, 150);
      cxt1.stroke();
   }
}

// LEGS
var legs = window.prompt("Does the animal have 1 or 2 legs?");

if (Number(legs) !== 1 && Number(legs) !== 2) {
   window.alert("Whatever you entered wasn't any good. " +
                 "The only acceptable answers are " +
                 "1 or 2. I already told you this. Try again dummy.");
} else if (Number(legs) === 1) {
   cxt1.beginPath();  // right leg
   cxt1.lineTo(0, 150);
   cxt1.lineTo(-25, 175);
   cxt1.stroke();

} else {

   cxt1.beginPath();  // right leg
   cxt1.lineTo(0, 150);
   cxt1.lineTo(-25, 175);
   cxt1.stroke();

   cxt1.beginPath();  // left leg
   cxt1.lineTo(0, 150);
   cxt1.lineTo(3, 190);
   cxt1.stroke();
}

// HAT
var hat = window.confirm("Is the animal wearing a hat?");
if (hat === true) {
   cxt1.beginPath();
   cxt1.fillStyle = "orange";
   cxt1.fillRect(-100, -120, 200, 50);
   cxt1.fillRect(-50, -150, 100, 50);
}