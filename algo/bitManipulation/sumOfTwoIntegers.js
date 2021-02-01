/**
 * calculate the sum of two integers a and b ,but you are not allowed to use the + and - operattor
 * 
 */

 var getSum = function(a,b){

    while(b!=0){
        carry=a&b;

        a=a^b;

        b=carry<<1
    }
    return a;

 };

 console.log(getSum(1,2));
 console.log(getSum(5,9));