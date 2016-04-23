var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var shiftX;
var shiftY;

function setup() {
   "use strict";
   shiftX = 0;
   shiftY = 0;
   ctx.save();
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
   ctx.fillRect(-20, -20, 40, 40);
   ctx.restore();
}

function reset() {
   "use strict";
   shiftX = 0;
   shiftY = 0;
   ctx.save();
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
   ctx.fillRect(-20, -20, 40, 40);
   ctx.restore();
}

function up() {
   "use strict";
   if (-canvas.height / 2 + 20 < shiftY) { 
      shiftY = shiftY - 20;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
 } else {
      shiftY = shiftY;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
  }
}

function left() {
   "use strict";
   if (-canvas.width / 2 + 20 < shiftX) { 
      shiftX = shiftX - 20;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
 } else {
      shiftX = shiftX;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
  }
}

function right() {
   "use strict";
   if (canvas.width / 2 - 20 > shiftX) { 
      shiftX = shiftX + 20;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
 } else {
      shiftX = shiftX;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
  }
}

function down() {
   "use strict";
   if (canvas.height / 2 - 20 > shiftY) { 
      shiftY = shiftY + 20;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
 } else {
      shiftX = shiftX;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.height / 2 + shiftX, canvas.width / 2 + shiftY);
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore();
  }
}


