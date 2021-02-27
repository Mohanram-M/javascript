/**
 * Given two Arrays, wite a function to compute their intersection
 * 
 * Note: Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order
 * 
 * follow Up :
 *   what if the given array is already sorted? how would you optimize your algorithm
 *   what if num1's size is small compared to num2's size? which algorithm is better ?
 *   what if elements of num2 are sorted on disk, and the memory at once ? 
 */


function findIntersectionWithDuplicatesUnsorted(arr1,arr2){

    if(arr1===null || arr2===null || arr1.length<1 || arr2.length<1) return null;

    let result=[];
    let tempMap={};

    let i=0;
    let j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i] in tempMap){
            ++tempMap[arr1[i]][0]
        }else{
            tempMap[arr1[i]]=[1,0];
        }

        if(arr2[j] in tempMap){
            ++tempMap[arr2[j]][1]
        }else{
            tempMap[arr2[j]]=[0,1];
        }
        i++;
        j++;
    }

    while(i<arr1.length){
        if(arr1[i] in tempMap){
            ++tempMap[arr1[i]][0];
        }else{
            tempMap[arr1[i]]=[1,0];
        }
        i++;
    }

    while(j<arr2.length){
        if(arr2[j] in tempMap){
            ++tempMap[arr2[j]][1]
        }else{
            tempMap[arr2[j]]=[0,1];
        }
        j++;
    }
 
    if(arr1.length<=arr2.length){
        for(let i=0;i<arr1.length;i++){
            [k,l]=tempMap[arr1[i]];
            if(k!==0 && l!==0){
                let rep=(k!==l)?Math.abs(k-l):k;
                result=result.concat(Array.from({length:rep},()=>arr1[i]));
            }
        }
    }else{
        for(let i=0;i<arr2.length;i++){
            [k,l]=tempMap[arr2[i]];
            if(k!==0 && l!==0){
                let rep=(k!==l)?Math.abs(k-l):k;
                result=result.concat(Array.from({length:rep},()=>arr2[i]));
            }
        }
    }
    return result;
}


console.log(findIntersectionWithDuplicatesUnsorted([1,2,3,4,5],[9,8,7,0,2,3,2,5]));
console.log(findIntersectionWithDuplicatesUnsorted([],[9,8,7,0,2,3,2,5]));
console.log(findIntersectionWithDuplicatesUnsorted([1,2,3,4,5],null));
console.log(findIntersectionWithDuplicatesUnsorted([1,2,2,4,5],[9,8,7,0,2,2,2,2]));


