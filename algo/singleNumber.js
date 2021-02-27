/** 
* Given a non-empty  array of integers nums ,every element appears twice except for one.
* find that single one.
* Could you imlement a solution with a linear complexity and with out using extra memory ?
* this solution works for numbers occuring any even number of times
* this is the property of XOR 0 for even and 1 for odd..!
*/

var singleNumberWithDuplicatesAppearingEvenTimes = function(nums){

    let res=0;
    for(x of nums){
        res=res^x;
    }
   
    return res;
};


console.log(singleNumberWithDuplicatesAppearingEvenTimes([1,1,2,4,2,3,3,7,3,4,4,3,4]));


/**
 * Every element appears thrice
 * 
 */

var singleNumberWithDuplicatesAppearingThrice = function(nums){

    let once=0;
    let twos=0;
    let notThrees=0;
    for(x of nums){
        twos=twos | (once & x);
        once=once ^ x;
        notThrees=~(once & twos);

        once = once & notThrees;
        twos = twos & notThrees;
    }
    
    return once;

};


console.log(singleNumberWithDuplicatesAppearingThrice([1,1,1,3,5,5,5]));
console.log(singleNumberWithDuplicatesAppearingThrice([1,3,1,5,3,1,2,2,3,2]));



var singleNumberWithDuplicatesAppearingfives= function(nums){

    let times=[];
   
    for(x of nums){
        
        for(let i=3;i>0;i--){
            times[i]=times[i] | (times[i-1] & x); 
        }
        times[0]=times[0]^x;
        times[4]=~(times[0]&times[1]&times[2]&times[3])
        for(let i=0;i<4;i++){
            times[i]=times[i]&times[4];
        }

    }
   
    return times[0];
};


console.log(singleNumberWithDuplicatesAppearingfives([1,1,1,3,1,1]));
console.log(singleNumberWithDuplicatesAppearingfives([5,5,5,7,5,5,7,7,7,7,19]));