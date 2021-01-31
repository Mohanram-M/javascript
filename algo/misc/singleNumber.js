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
    let not_thrice;
    for(x of nums){

        twos = twos |(once & x);
        once = once ^ x;
        not_thrice= ~(once & twos);

        once=once & not_thrice;
        twos=twos & not_thrice;

    }
    
    return once;
};


console.log(singleNumberWithDuplicatesAppearingThrice([1,1,1,3,5,5,5]));
console.log(singleNumberWithDuplicatesAppearingThrice([1,3,1,5,3,1,2,2,3,2]));



var singleNumberWithDuplicatesAppearingfives= function(nums){

    let once=0;
    let twos=0;
    let threes=0;
    let fours=0;
    let not_fives;
    for(x of nums){

        fours = fours | (threes & x);
        threes= threes | (twos & x);
        twos = twos |(once & x);
        once = once ^ x;
        not_fives= ~(once & twos & threes & fours);

        once=once & not_fives;
        twos=twos & not_fives;
        threes=threes & not_fives;
        fours=fours & not_fives;

    }
    
    return once;
};


console.log(singleNumberWithDuplicatesAppearingfives([1,1,1,3,1,1,1]));
console.log(singleNumberWithDuplicatesAppearingfives([5,5,5,7,5,5,7,7,7,7,19]));