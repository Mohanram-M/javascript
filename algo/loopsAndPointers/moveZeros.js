/**
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements
 * 
 * You must do this in-place without making a copy of the array
 * Minimize the total number of operations.
 */

 var moveZeroes = function(nums){
    let i=0;
    let j=0;
    while(i<nums.length){
        if(nums[i]!==0){
            if(i!==j){
                nums[j]=nums[i];
            }
            j++;
        }
        i++;
    }

    while (j<nums.length){
        nums[j]=0;
        j++;
    }

    return nums;
 }

 console.log(moveZeroes([1,0,0,0,2,3,4,0,5,7,0]));
 console.log(moveZeroes([1,3,0,5,2,3,4,0,5,7]));

