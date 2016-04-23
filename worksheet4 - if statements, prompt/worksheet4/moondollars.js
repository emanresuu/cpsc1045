var coffee = document.getElementById("coffee");

var size = window.prompt("Will you have a Regular, Medium, or Large coffee?");
var type = window.prompt("Will you have Espresso based, "
                         + "Drip coffee, or Siphon coffee?");
var costs;  // the cost due to size
var costt;  // the cost due to type

if (size === "Regular") {  // assign the costdue to size
   costs = 2;
}
if (size === "Medium") {
   costs = 2.5;
}
if (size === "Large") {
   costs = 3.5;
}

   
if (type === "Espresso based") {  // assign the cost due to type
   costt = 1;
}
if (type === "Drip coffee") {
   costt = 0;
}
if (type === "Siphon coffee") {
   costt = 2;
}

coffee.innerHTML = "The " + size + " " + type + " costs $" + (costs + costt);