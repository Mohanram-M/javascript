
function reverseString(str){

    if(str===null || str.length<2) return str;
    let len=Math.floor(str.length/2); // both ceil and floor will do..!!
    return reverseString(str.substr(len))+reverseString(str.substr(0,len));
}

console.log(reverseString("abcdefg"));
console.log(reverseString("fghijklm"));
console.log(reverseString("a"));
console.log(reverseString("ab"));
console.log(reverseString(null));