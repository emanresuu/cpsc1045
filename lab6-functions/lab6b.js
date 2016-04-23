var chapter0 = document.getElementById("chapter0");
var chapter1 = document.getElementById("chapter1");
var chapter2 = document.getElementById("chapter2");

function carrotCucumber() {
    "use strict";
    var q0 = window.prompt("Will you have carrot or cucumber?");
    while (q0 !== "carrot" && q0 !== "cucumber") {
        q0 = window.prompt("I didn't understand you. Please enter one of carrot or cucumber.");
    }
    return q0;
}

function pizzaRavioli() {
    "use strict";
    var q1 = window.prompt("Will you have pizza or ravioli?");
    while (q1 !== "pizza" && q1 !== "ravioli") {
        q1 = window.prompt("I didn't understand you. Please enter one of pizza or ravioli.");
    }
    return q1;
}

function vanillaChocolate() {
    "use strict";
    var q2 = window.prompt("Will you have vanilla or chocolate icecream?");
    while (q2 !== "vanilla" && q2 !== "chocolate") {
        q2 = window.prompt("I didn't understand you. Please enter one of vanilla or chocolate.");
    }
    return q2;
}

var a = carrotCucumber();
var b = pizzaRavioli();
var c = vanillaChocolate();

chapter0.innerHTML = "You eat the " + a + ", " + b + ", and " + c + " icecream.";
window.alert("You will drink mustard seeds in warm water.");
chapter1.innerHTML = "You drink the mustard seeds in warm water.";
chapter2.innerHTML = "Out comes the mustard seeds in warm water, the " + c + " icecream, the " + b + ", and the " + a + ".";

