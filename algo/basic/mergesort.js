/**
 * merge sort
 * TIME : O(nLog(n)) , SPACE : O(n)
 * 
 */

 function merge(arr1,arr2){

    let merged=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        merged.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
    }
    return merged;
 }


 function mergeSort(arr){

    if(arr===null || arr.length<2) return arr;
    let mid=arr.length/2;
    arr=merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid,arr.length)));
    return arr;
 }

 console.log(mergeSort([5,4,3,2,1]));
 console.log(mergeSort(null));
 console.log(mergeSort([]));
 console.log(mergeSort([1,10,0,9,9,8,7,6,6,5,4]));