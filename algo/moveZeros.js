/**
 * 
 * 
 */

function moveZeros(arr){
    
    if(arr===null || arr.length<1) return arr;
    let i=0;
    let j=0;

    while(i<arr.length){
        if(arr[i]!=0){
            if(i!=j){
                arr[j]=arr[i];
            }
            j++;
        }
        i++;
    }

    while(j<arr.length){
        arr[j]=0;
        j++;
    }
    return arr;
}

console.log(moveZeros([1,2,3,0,0,0,4,5,0,7,0,8,9,0,0,0,10]));
console.log(moveZeros([1]));
console.log(moveZeros(null));
