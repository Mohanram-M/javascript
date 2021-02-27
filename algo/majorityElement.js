/**
 * Given an array nums of size n, return the majaority element.
 * The Majaroty element is the element that appears more than [n/2] times.
 * You may assume tht the majority element always exists in the array
 * could you solve the problem in linear time and in o(1) space ?
 */

 var majorityElement = function(nums){
    let count=0;
    let candidate=null;
    for(x of nums){
        if(count==0){
            candidate=x;
        }
        count+=(candidate===x)?+1:-1;
    }
    return candidate
 }

 console.log(majorityElement([1,2,1,3,1,4,1,1,1]));
 console.log(majorityElement([5,3,4,6,3,3,8,3,3]));
