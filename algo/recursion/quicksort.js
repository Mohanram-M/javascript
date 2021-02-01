/**
 * QUICK SORT
 * TIME : O(nlog(n)) SPACE: O(1) 
 * 
 * WORST CASE is O(n^2)
 * When the array is sorted and pivot is choosen from left.
 * When the array is sorted descedingly and the pivot is choosen from the right.
 * PREFERD FOR ARRAYS OVER LINK LIST because of space requirements
 * 
 * 
 * Better than merge in space 
 */

function pivot(arr,low,high){
    let piv=Math.floor((Math.random()*(high-low))+low);
    let swapIndx=piv;
    let temp=null;
    for(let i=low;i<high;i++){
            if(arr[i]>arr[piv] && piv>i){
                temp=arr[i];
                arr[i]=arr[piv];
                arr[piv]=temp;
                piv=i;
                swapIndx=i;
            }else if(arr[i]<arr[piv] && piv<i ){
                swapIndx++;
                temp=arr[swapIndx];
                arr[swapIndx]=arr[i];
                arr[i]=temp;
            }
    }

    if(swapIndx!==piv){
        temp=arr[piv];
        arr[piv]=arr[swapIndx];
        arr[swapIndx]=temp;
    }
    return swapIndx;
}


function quickSort(arr,low,high){
    if(low<high){
        let piv=pivot(arr,0,high);
        quickSort(arr,0,piv);
        quickSort(arr,piv+1,high);
    }
    return arr;
}


console.log(quickSort([5,4,3,2,1],0,5));
console.log(quickSort([5,10,7,13,4,1,2,3,9],0,9));
console.log(quickSort([5,10,7,9,3,13,4,1,2,3,9],0,11));
console.log(quickSort([],0,0));
console.log(quickSort(null,0,0));