/**
 * Linear Search
 *  Used to search in an array 
 * TIME : O(n), SPACE : O(1)
 * 
 */

 function linearSearch(arr,ele){
    let pos=-1;
    if(arr!=null){
        for(let i=0;i<arr.length;i++){
            if(arr[i]===ele){
                pos=i;
                break;
            }
        }
    }
    return pos;
 }

console.log(linearSearch([2,3,4,2,1,3,5],4));
console.log(linearSearch([],2));
console.log(linearSearch(null,2));
