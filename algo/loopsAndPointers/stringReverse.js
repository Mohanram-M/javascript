/*
    Write a function that reverses a string. The input String is given as an array
    of charecters char[]
    Do not allocate extra space for another array, you must do this by modifying the input array in-place 
    with O(1) extra memory.
*/

var reverseString =function(s){
    let totalSwap=0;
    let len=Math.floor(s.length/2);
    for(let i=0;i<len;i++){
        let temp=s[i];
        s[i]=s[s.length-i-1];
        s[s.length-i-1]=temp;
        totalSwap++;
    }
    return s;
};

console.log(reverseString(['a','b','c','d']));
console.log(reverseString(['a','b','c']));
console.log(reverseString(['a','b','c','g','f']));
console.log(reverseString(['f']));
console.log(reverseString([]));


