// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log("hello" + i);
// }
// console.log("Bye !")


// let args = process.argv

// for (let i = 2; i < args.length; i++) {
//     console.log("hello to ", args[i])
// }


// const sumvalue = require('./math')
// console.log(sumvalue)
// console.log(sumvalue.sum(5, 2000))



// const fruits = require('../Fruits')
// console.log(fruits[0].name)


// const figlet = require("figlet");


// figlet("Rohit Sampannavar", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

import { sum, mul, pi, g } from "./math.js";
import { generate, count } from "random-words";

console.log(mul(22, 3));
console.log(pi)



console.log(generate());