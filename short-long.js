//Write a function that takes two strings as arguments, 
//determines the longer of the two strings, => length and compare
//then returns the result of concatenating the shorter string, 
//the longer string, and the shorter string once again. 
//You may assume that the strings are of different lengths.
//example: shortLongShort('abc', 'defgh');    // "abcdefghabc"

function sls(str1, str2){
    let str1len = str1.length;
    let str2len = str2.length;
    if (str1len > str2len){
        console.log(str1 + str2 + str1);
    } else if (str1len < str2len){
        console.log(str2 + str1 + str2);
    }else {
        console.log("they are equal size.");
    }
}

sls('ha', 'ha');
sls('tin', 'foil');
sls('apple', 'saucepan');



