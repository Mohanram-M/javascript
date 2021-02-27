/*
    Write a function that reverses a string. The input String is given as an array
    of charecters char[]
    Do not allocate extra space for another array, you must do this by modifying the input array in-place 
    with O(1) extra memory.
*/

var reverseString =function(s){
    let revStr=""
    if(s===null || s.length<2) return s;
    for(let i=s.length-1;i>=0;i--){
        revStr+=s[i]
       
    }
    return revStr;
};

console.log(reverseString(null));
console.log(reverseString("a"));
console.log(reverseString("ab"));
console.log(reverseString("abcdefgh"));


