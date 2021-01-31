/**
 * INSERTION SORT
 * TIME : O(n^2), SPACE:O(1) 
 * 
 */

 function insertionSort(arr){
    if(arr!=null && arr.length>0){
        for(let i=1;i<arr.length;i++){
            let key =arr[i];
            let swapPos=-1;
            for(let j=i-1;j>=0;j--){
                if(key<arr[j]){
                    arr[j+1]=arr[j];
                    swapPos=j;
                }
            }
            if(swapPos>-1){
                arr[swapPos]=key;
            }
        }
    }
    return arr;
 }


 console.log(insertionSort([5,4,3,2,1]));
 console.log(insertionSort([5,10,7,13,4,1,2,3,9]));
 console.log(insertionSort([5,10,7,9,3,13,4,1,2,3,9]));
 console.log(insertionSort([]));
 console.log(insertionSort(null));