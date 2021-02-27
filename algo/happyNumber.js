/**
 * Happy Number 
 * 
 * Write an algorith to determine if a number n is happy
 * 
 * A Happy number is a number defined by the following property
 * 
 * Starting with any positive integer, replace the number by the sum of the squares of its digits
 * Repeat the process untill the number equals 1 where it will stay, or it loops endlessly in a cycle which does
 * not include 1
 * Those numbers for which the process ends in 1 are happy.
 *
 *  
 * 
 */

 function findIfHappy(num){

    if(num<1)return false;
    let totalDigits=Math.floor(Math.log10(num)) + 1;
    if(totalDigits<2){
        if(num===1){
            return true;
        }else{
            return false;
        }
    } 
    let total=0;
    
    for(let i=0;i<totalDigits;i++){
        total+=Math.floor(num/Math.pow(10,i))%10;
    }
    return findIfHappy(total);
 }

 console.log(findIfHappy(2));
 console.log(findIfHappy(1));
 console.log(findIfHappy(19));