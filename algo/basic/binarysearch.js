/**
 * Binary search
 * TIME : O(log(n)), SPACE: O(1)
 */


 function binarySearch(arr,ele,low=0,high=0){
    if(arr===null || arr.length===0 || high<=low) return -1;
    let pos=-1;
    if(low<high){
        let mid=Math.floor((high+low)/2);
        if(ele===arr[mid]){
            pos=mid;
        }else if(ele<arr[mid]){
            pos=binarySearch(arr,ele,low,mid);
        }else{
            pos=binarySearch(arr,ele,mid+1,high);
        }
    }    
    return pos;
 }



 console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],2,0,10));
 console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],8,0,10));
 console.log(binarySearch([1],5,0,1));
 console.log(binarySearch([1],1,0,1));
 console.log(binarySearch(null,3,0,0));
 console.log(binarySearch([],8,0,0));
