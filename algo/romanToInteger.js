/**
 * convert roman to Integer
 * 
 */

var romanIntMap={
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}

var romanToInt = function (s){

    let int_val=0;
    let currRomVal=0
    let prevRomanVal=0;
    for(let i=(s.length-1);i>=0;i--){

        currRomVal=romanIntMap[s[i]];
        int_val+= (prevRomanVal>currRomVal)?(-currRomVal):(+currRomVal);
        prevRomanVal=currRomVal;
    }
    return int_val;
}

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

