
function reverseString(inpSt){
    

    if(inpSt===null || inpSt.length<2) return inpStr;
    let inpStr=inpSt.split("");
    let len=Math.floor(inpStr.length/2);
    for(let i=0;i<len;i++){
        let temp=inpStr[i];
        inpStr[i]=inpStr[inpStr.length-i-1];
        inpStr[inpStr.length-i-1]=temp;
    }

    return inpStr.join("");

}

console.log(reverseString("abcdef"));