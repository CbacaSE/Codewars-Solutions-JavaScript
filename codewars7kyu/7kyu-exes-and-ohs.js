// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const numberOfX = str.match(/x/gi)?.length ? str.match(/x/gi)?.length : 0
    const numberOfO = str.match(/o/gi)?.length ? str.match(/o/gi)?.length : 0
    return (numberOfX === numberOfO)
}