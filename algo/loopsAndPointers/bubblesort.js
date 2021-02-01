/**
 * Bubble sort
 * TIME : O(n^2) SPACE :O(1)
 * 
 */

 function bubbleSort(arr){

    if(arr!=null && arr.length>0){
        for(let i=0;i<arr.length;i++){
            let swapped=false;
            for(let j=0;j<arr.length-i;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swapped=true;
                }
            }
            if(!swapped){
                break;
            }
        }
    }
    return arr;
 }


 console.log(bubbleSort([5,4,3,2,1]));
 console.log(bubbleSort([5,10,7,13,4,1,2,3,9]));
 console.log(bubbleSort([5,10,7,9,3,13,4,1,2,3,9]));
 console.log(bubbleSort([]));
 console.log(bubbleSort(null));