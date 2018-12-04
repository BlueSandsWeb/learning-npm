var cat = require("cat-me");                // to include an npm package you have to add it to a variable using require("") with the name of the package in the "";
var joke = require("knock-knock-jokes");

console.log(cat());                         // to use the variable holding the package, just call variableName();

console.log(joke());