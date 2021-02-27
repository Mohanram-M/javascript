/**
 * Given an array nums containing n distinct numbers in the range [0,n] 
 * return the only number in the range that is miising from the array
 * 
 */

function findMissingNumberBit(arr){
    if(arr===null || arr.length<1) return null;
    let missingNum=arr.length;

    for(let i=0;i<arr.length;i++){
        missingNum^=i^arr[i];
    }
    return missingNum;
}

 function findMissingMath(arr){

    if(arr===null || arr.length<1) return null;
    let expectedSum=(arr.length)*(arr.length+1)/2;
    let actualSum=0;
    for(let i=0;i<arr.length;i++){
        actualSum+=arr[i];
    }
    return expectedSum-actualSum;

 }

 console.log('-----------------------------------------------------');
 console.log(findMissingMath([1,2,3]));
 console.log(findMissingMath([0,1,3]));
 console.log(findMissingMath([0,1,2]));
 console.log(findMissingMath([0,1,2,3,5]));
 console.log(findMissingMath([9,5,4,3,2,0,1,7,6]));

console.log('-----------------------------------------------------');
 console.log(findMissingNumberBit([1,2,3]));
 console.log(findMissingNumberBit([0,1,3]));
 console.log(findMissingNumberBit([0,1,2]));
 console.log(findMissingNumberBit([0,1,2,3,5]));
 console.log(findMissingNumberBit([9,5,4,3,2,0,1,7,6]));