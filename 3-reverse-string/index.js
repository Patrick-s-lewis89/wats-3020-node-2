//TODO fill in comment template
/*
Description: A program that takes a string as input and reverses it using JavaScript string method. 
Input: a string
Output: the string reversed
Usage: node 3-reverse-string <string>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input) {
    console.log("usage: node 3-reverse-string <strings>");
} else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}