/**
 * RADIX SORT
 *  TIME : O(l*(n+k)) , SPACE : O(n+k)  where k is the base
 *  
 *  space is the original array(n) + the buckets(base)
 *  time is the l max length of digits ( n size of array + concat buckets k  )
 *  helpfull for numbers not strings
 * 
 */

function getMaxLength(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        let len=getLength(arr[i]);
        if(len>max){
            max=len;
        }
    }
    return max;
}

function getLength(val){
    return Math.floor(Math.log10(val)) +1 ;
}

function getDigit(val,pos){
    return Math.floor(val/Math.pow(10,pos))%10;
}


function radixSort(arr){
    if(arr!=null && arr.length>0){
        let maxLen=getMaxLength(arr);
        for(let i=0;i<maxLen;i++){
            let bucketArr=Array.from({length:10},(v,k)=>[]);
            
            for(let j=0;j<arr.length;j++){
                let pos=getDigit(arr[j],i);
                bucketArr[pos].push(arr[j]);
            }

            arr=[].concat(...bucketArr);
        }
    }
    return arr;
}

console.log(radixSort([9,8,7,6,5,4,3,2,1]));
console.log(radixSort([9,8,76,6,34,5,46,6,33,2,11,22,54,32]));
console.log(radixSort([]));
console.log(radixSort(null));
