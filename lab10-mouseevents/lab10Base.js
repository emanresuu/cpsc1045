//code for setting up the lab

//Loads the image 1st before drawing.
//Loading and drawing cannot be in the same
//function because JavaScript is asyncronous in nature.
//*sigh*

var face = new Image();
face.src = "image.jpg";

function setup() {
    "use strict";
    var canvas = document.getElementById("animal");
    var ctx = canvas.getContext("2d");

    ctx.drawImage(face, 0, 0);
}
