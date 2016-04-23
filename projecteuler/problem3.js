// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

function question3() {
   "use strict";
   var input3 = Number(document.getElementById("input3").value);

   var factorsArray = makeArrayOfFactorsOf(input3);
   var primeNumbersArray = makeArrayOfPrimeNumbersLessThanOrEqualTo(input3);
   var primeFactorsArray = makeArrayOfAllPrimeFactorsOf(input3, 
         factorsArray, primeNumbersArray);

   var output3a = document.getElementById("output3a");
   var output3b = document.getElementById("output3b");
   var output3c = document.getElementById("output3c");
   var output3d = document.getElementById("output3d");

   if (isPositiveInteger(input3)) {
      output3a.innerHTML = "All factors of " + input3 + ":<br>" + 
         array2String(factorsArray);
      output3b.innerHTML = "All prime numbers not more than " + 
         input3 + ":<br>" + array2String(primeNumbersArray);
      output3c.innerHTML = "All prime factors of " + input3 + ":<br>" + 
         array2String(primeFactorsArray);
      output3d.innerHTML = "The largest prime factor of " + input3 + ":<br>" + 
         findLargestNumberIn(primeFactorsArray);
   } else {
      output3a.innerHTML = ""; 
      output3b.innerHTML = ""; 
      output3c.innerHTML = ""; 
      output3d.innerHTML = ""; 
   }
}

function findLargestNumberIn(anArray) {
   "use strict";
   for (var i = 0; i < anArray.length; i = i + 1) {
      if (isALargerThanElementsInAnArray(anArray[i], anArray)) {
         return anArray[i];
      }
   }
   return [];
}

function isALargerThanElementsInAnArray(A, anArray) {
   "use strict";
   for (var i = 0; i < anArray.length; i = i + 1) {
      if (A < anArray[i]) {
         return false;
      }
   }
   return true;
}

function makeArrayOfAllPrimeFactorsOf(inputInteger, factorsArray, 
      primeNumbersArray) {
   "use strict";
   var primeFactorsArray = [];
   for (var i = 0; i < factorsArray.length; i = i + 1) {
      if (isAInArrayB(factorsArray[i], primeNumbersArray)) {
         primeFactorsArray.push(factorsArray[i]);
      }
   }
   return primeFactorsArray;
}

function isAInArrayB(A, arrayB) {
   "use strict";
   for (var i = 0; i < arrayB.length; i = i + 1) {
      if (A === arrayB[i]) {
         return true;
      }
   }
   return false;
}

function makeArrayOfFactorsOf(inputInteger) {
   "use strict";
   var factorsArray = [];
   for (var i = 0; i < inputInteger + 1; i = i + 1) {
      if (isAFactorOfB(i, inputInteger)) {
         factorsArray.push(i);
      }
   }
   return factorsArray;
}

function isAFactorOfB(integerA, integerB) {
   "use strict";
   if (integerB % integerA === 0) {
      return true;
   }
   return false;
}

function makeArrayOfPrimeNumbersLessThanOrEqualTo(numberOfTerms) {
   "use strict";
   var primeNumberArray = [2];
   if (numberOfTerms === 1) {
      primeNumberArray = [];
      return primeNumberArray;
   }
   for (var i = 3; i <= numberOfTerms; i = i + 1) {
      if (testForPrimeness(i)) {
         primeNumberArray.push(i);
      }
   }
   return primeNumberArray;
}

function testForPrimeness(inputInteger) {
   "use strict";
   var oddNumbersArray = makeArrayOfOddNumbersLessThan(inputInteger);
   for (var i = 0; oddNumbersArray[i + 1] < inputInteger; i = i + 1) {
      if (inputInteger === 0) {
         return false;
      }
      if (inputInteger % 2 === 0) {
         return false;
      }
      if (inputInteger % oddNumbersArray[i + 1] === 0) {
         return false;
      }
   }
   return true;
}

function makeArrayOfOddNumbersLessThan(numberOfTerms) {
   "use strict";
   var oddNumbersArray = [];
   for (var i = 0; i < numberOfTerms; i = i + 1) {
      if (i % 2 !== 0) {
         oddNumbersArray.push(i);
      }
   }
   return oddNumbersArray;
}
