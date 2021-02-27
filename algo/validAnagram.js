/**
 * Check for valid Anagram
 *
 * Input : anagram , nagaram 
 * Output : true
 *  
 * Input : cat , rat
 * Output : flase
 */


 /*
 *  TIME O(n) space O(n)
 */

 function checkValidAnagram(str1,str2){

    if(str1===null || str2===null || str1.length!=str2.length){
        return false;
    }else{
        let matchedIndex={};
       
        for(let i=0;i<str1.length;i++){
            matchedIndex[str1[i]]=(str1[i] in matchedIndex)?++matchedIndex[str1[i]]:1;
            matchedIndex[str2[i]]=(str2[i] in matchedIndex)?--matchedIndex[str2[i]]:-1;
        }

        for(key in matchedIndex){
            if(matchedIndex[key]!==0){
                return false;
            }
        }
        return true;
    }
 }

console.log(checkValidAnagram('anagram','nagaram'));
console.log(checkValidAnagram('tab','bat'));
console.log(checkValidAnagram('a','bat'));
console.log(checkValidAnagram(null,'bat'));
console.log(checkValidAnagram('rat',null));
console.log(checkValidAnagram(null,null));
