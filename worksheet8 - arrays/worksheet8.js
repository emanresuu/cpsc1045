var anArray = [1, 2, 3, 4, 5, 6];

function getOdd() {
	"use strict";
	var oddArray = [];
	for (var i = 0; i < anArray.length; i = i + 1) {
		if (anArray[i] % 2 !== 0) {
			oddArray.push(anArray[i]);
		}
	}
	var output = document.getElementById("output");
	output.innerHTML = oddArray;
}


