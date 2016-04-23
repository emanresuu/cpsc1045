function setup() {
   "use strict";
   document.getElementById("input3").select();
}

function highlight1() {
   "use strict";
   document.getElementById("input1").select();
   document.getElementById("problem1Heading").scrollIntoView();
}

function highlight2() {
   "use strict";
   document.getElementById("input2").select();
   document.getElementById("problem2Heading").scrollIntoView();
}

function highlight3() {
   "use strict";
   document.getElementById("input3").select();
   document.getElementById("problem3Heading").scrollIntoView();
}

function isPositiveInteger(input) {
   "use strict";
   if(input >= 1 && Number.isInteger(input)) {
      return true;
   } else {
      return false;
   }
}

function array2String(anArray) {
   "use strict";
   var outputString = anArray[0];
   for (var i = 1; i < anArray.length; i = i + 1) {
      outputString = outputString + ", " + anArray[i];
   } 
   if (outputString === undefined) {
      return "";
   } else {
      return outputString;
   }
}

function sumArray(anArray) {
   "use strict";
   var sum = 0;
   for (var i = 0; i < anArray.length; i = i + 1) {
      sum = sum + anArray[i];
   }
   return sum;
}
