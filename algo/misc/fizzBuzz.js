/*
*
* Write a program that outputs the string representation of numbers from 1 to n.
* But for multiples of three it should output "Fizz" instead of the number and for the 
* multiples of five output "Buzz".for numbers which are multiples of both three and five output "FizzBuzz".
*
*/

var fizzBuzz = function(n) {
    let result=[];
    for(let i=1;i<=n;i++){
        let outputString='';
        if(i%3===0){
            outputString+='Fizz';
        }
        if(i%5===0){
            outputString+='Buzz';
        }

        if(outputString.length>0){
            result.push(outputString);
        }else{
            result.push(i+'');
        }
    }
    return result; 
}

console.log(fizzBuzz(15));
