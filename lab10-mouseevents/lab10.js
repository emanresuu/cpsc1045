function updateEyes(event1) {
   "use strict";
   var eyeCenter = [{ x: 147, y:90},
       { x: 267, y:90}];
   var canvas = document.getElementById("eyes"); 
   var ctx = canvas.getContext("2d");
   var xm = event1.offsetX; // The x component of the mouse cursor position.
   var ym = event1.offsetY; // The y component of the mouse cursor position.
   var xc; // The x component of the centre of the eye socket.
   var yc; // The y component of the centre of the eye socket.
   var xp; // The x component of the centre of the pupil.
   var yp; // The y component of the centre of the pupil.
   var r; // The distance between the mouse cursor and centre of the socket.
   var a; // The proportion of the distance between: the centres of the socket and pupil, and 
          // the distance between the mouse cursor and the centre of the socket. We use this 
          // proportion  to convert: the distance between the position of the mouse cursor 
          // and the centre of the socket, to the x and y positions of the centre of the pupil.
   var c = 15; // The distance between the centres of the socket and pupil.
   var pupilRadius = 9;
   
   // Draw the right pupil.
  
   xc = eyeCenter[0].x;
   yc = eyeCenter[0].y;
   r = Math.sqrt(Math.pow(xm - xc, 2) + Math.pow(ym - yc, 2));
   a = c / r;
   xp = a * (xm - xc) + xc;
   yp = a * (ym - yc) + yc;
   
   ctx.save();
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.beginPath();
   ctx.arc(xp, yp , pupilRadius, 0, 2 * Math.PI);
   ctx.stroke();
   ctx.restore();
   
   // Draw the left pupil.
  
   xc = eyeCenter[1].x;
   yc = eyeCenter[1].y;
   r = Math.sqrt(Math.pow(xm - xc, 2) + Math.pow(ym - yc, 2));
   a = c / r;
   xp = a * (xm - xc) + xc;
   yp = a * (ym - yc) + yc;
   
   ctx.save();
   ctx.beginPath();
   ctx.arc(xp, yp , pupilRadius, 0, 2 * Math.PI);
   ctx.stroke();
   ctx.restore();
}
