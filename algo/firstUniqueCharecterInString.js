/**
 * Find first unique Charecter in a string
 * 
 */

 function firstUniqueCharecterInString(str){
    
    if(str===null || str.length<1){
        return null;
    }
    else{
        let strMap={};
        for(let i=0;i<str.length;i++){
            strMap[str[i]]=(str[i] in strMap)?++str[i]:1;
        }

        for(let i=0;i<str.length;i++){
            if(strMap[str[i]]===1){
                return str[i];
            }
        }
        return null;
    }
 }

 console.log(firstUniqueCharecterInString("abcdefacdef"));
 console.log(firstUniqueCharecterInString("ababc"));
 console.log(firstUniqueCharecterInString(""));
 console.log(firstUniqueCharecterInString(null));