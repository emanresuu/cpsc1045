// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples 
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function question1() {
   "use strict";
   var input1 = Number(document.getElementById("input1").value);

   var multiplesOfThreeArray = makeArrayOfMultiplesOfThreeUnder(input1);
   var multiplesOfFiveArray = makeArrayOfMultiplesOfFiveUnder(input1);

   var output1a = document.getElementById("output1a");
   var output1b = document.getElementById("output1b");
   var output1c = document.getElementById("output1c");

   if (isPositiveInteger(input1)) {
      output1a.innerHTML = "All multiples of three less than " + input1 + 
         " :<br>" +array2String(multiplesOfThreeArray);
      output1b.innerHTML = "All multiples of five less than " + input1 + 
         " :<br>" + array2String(multiplesOfFiveArray);
      output1c.innerHTML = "The sum of all multiples of three " + 
         "or five less than " + input1 + " :<br>" + 
         sumTwoArrays(multiplesOfThreeArray, 
               multiplesOfFiveArray);
   } else {
      output1a.innerHTML = ""; 
      output1b.innerHTML = ""; 
      output1c.innerHTML = ""; 
   }
}

function makeArrayOfMultiplesOfThreeUnder(upperLimit) {
   "use strict";
   var multiplesOfThreeArray = [];
   for (var i = 0; i < upperLimit; i = i + 1) {
      if (i % 3 === 0 && i !== 0) {
         multiplesOfThreeArray.push(i);
      }
   }
   return multiplesOfThreeArray;
}

function makeArrayOfMultiplesOfFiveUnder(upperLimit) {
   "use strict";
   var multiplesOfThreeArray = [];
   for (var i = 0; i < upperLimit; i = i + 1) {
      if (i % 5 === 0 && i !== 0) {
         multiplesOfThreeArray.push(i);
      }
   }
   return multiplesOfThreeArray;
}

function sumTwoArrays(array1, array2) {
   "use strict";
   var total = 0;
   for (var i = 0; i < array1.length; i = i + 1) {
      total = total + array1[i];
   }
   for (var j = 0; i < array2.length; i = i + 1) {
      total = total + array2[j];
   }
   return total;
}
