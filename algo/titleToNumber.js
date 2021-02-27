/**
 * Given a Column title as appear in an excel sheet return its corresponding column number
 * 
 */

 var titleToNumber = function(s){

   let code=0;
   for(let i=s.length-1;i>=0;i--){
      code+=(s[i].charCodeAt(0)-65+1)*(26**(s.length-1-i));
   }
   return code;

 }

 console.log(titleToNumber("A"));
 console.log(titleToNumber("Z"));
 console.log(titleToNumber("AA"));
 console.log(titleToNumber("AZ"));
 console.log(titleToNumber("BCD"));