/*
Task 3 :-   Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it.
 The script should print the total word count to the console.
 */
const fs = require('fs')


let x = __dirname + "\\data.txt"     // line ABC

fs.readFile(x, 'utf-8', (error, info) => {
    if (error)
        console.log("The mistake is ", error)

    else if (info) {
        let len = info.split(" ").filter(Boolean)


        console.log("The words are :-  ", len)
        console.log("The content length is ", len.length)

    }

})

/* Points to remember 

1.  Another way is to include path package and then use resolve to form a path in line ABC.

2. We used "\\" so that it can treat second "\"  as literal piece of string.

*/
