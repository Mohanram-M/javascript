/**
 * SELECTION SORT
 * TIME : O(n^2) , SPACE : O(1)
 */

function selectionSort(arr){
    if(arr!=null && arr.length>0){ 
        for(let i=0;i<arr.length;i++){
            let minIndx=i;
            for(let j=i+1;j<arr.length;j++){
                if(arr[minIndx]>arr[j]){
                    minIndx=j;
                }
            }
            if(minIndx!=i){
                temp=arr[i];
                arr[i]=arr[minIndx];
                arr[minIndx]=temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([5,4,3,2,1]));
console.log(selectionSort([5,12,1,7,3,2,4,0]));
console.log(selectionSort([]));
console.log(selectionSort(null));