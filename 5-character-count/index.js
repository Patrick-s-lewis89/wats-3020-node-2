//TODO fill in comment template
/*
Description:
Input:
Output:
Usage: 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input) {
    console.log("usage: node 5-character-count <string>");
    // TODO provide a usage statement
} else {
    let charCount = {};
    let characters = input.split(``);

    for (let characters of characters) {
        if (charCount[character]) {
            charCount[character]++;
        } else {
            charCount[character] = 1;
        }
    }
    letcharArr = [];
    // TODO initialize charCount object to count characters
    // TODO turn the input into an array called characters using the split method

    // TODO iterate through array to create object that has character for key and count for value

    // TODO initialize a new array called charArr
    // TODO loop through every character in charCount 
    for (let character in charCount) {
        let newElem = { char: character, count: charCount[character] };
        charArr.push(newElem)
            // TODO add newElem to charArr using the push method
    }
    charArr.sort(function(a, b) {
        return a.count - b.count;
    })
    for (let row of charArr) {
        console.log(`$(row): ${charArr[row]}`);
    }
    // TODO use the sort method of charArr with a custom compare function to sort the array by the count values (least to greatest)

    // TODO output the content of the array to the console, showing each character and the count

}