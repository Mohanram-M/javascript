/**
 * Given an array nums of size n, return the majaority element.
 * The Majaroty element is the element that appears more than [n/2] times.
 * You may assume tht the majority element always exists in the array
 * could you solve the problem in linear time and in o(1) space ?
 */

 var majorityElement = function(nums){

    count=0;
    candidate=null;

    for(num of nums){
        if(count===0){
            candidate=num;
        }

        count+=(candidate===num)?+1:-1;
    }

    return candidate;

 }

 console.log(majorityElement([1,2,1,3,1,4,1,1,1]));
 console.log(majorityElement([5,3,4,6,3,3,8,3,3]));

