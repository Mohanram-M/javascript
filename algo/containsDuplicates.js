/**
 * 
 * Check if array contains duplicates
 * Input: [1,2,3,1]
 * Output : true
 * 
 */

// TIME nlog(n) 
function containsDuplicatesSorted(arr){

    
    if(arr===null || arr.length<2) return false;
    else{
        
        let sortedArr=arr.sort();

        for(i=1;i<sortedArr.length;i++){
            if(sortedArr[i-1]===sortedArr[i]){
                return true;
            }
        }
        return false;
    }   
}

//Set
function containsDuplicatesSet(arr){

    if(arr===null || arr.length<2) return false;
    else{
        let uniqueSet=new Set();
        for(i=0;i<arr.length;i++){
            if(uniqueSet.has(arr[i])){
                return true;
            }else{
                uniqueSet.add(arr[i]);
            }
        }
        return false;
    }   
}



//Object/hashMap
function containsDuplicates(arr){

    if(arr===null || arr.length<2) return false;
    else{
        let arrCount={};
        for(i=0;i<arr.length;i++){
            if(arr[i] in arrCount){
                return true;
            }else{
                arrCount[arr[i]]=1;
            }
        }
        return false;
    }   
}

console.log("-----sorted-------");
console.log(containsDuplicatesSorted([1,2,3,4,1]));
console.log(containsDuplicatesSorted(null));
console.log(containsDuplicatesSorted([1]));
console.log(containsDuplicatesSorted([1,2]));
console.log(containsDuplicatesSorted([]));

console.log("-----Set-------");
console.log(containsDuplicatesSet([1,2,3,4,1]));
console.log(containsDuplicatesSet(null));
console.log(containsDuplicatesSet([1]));
console.log(containsDuplicatesSet([1,2]));
console.log(containsDuplicatesSet([]));

console.log("-----Map-------");
console.log(containsDuplicates([1,2,3,4,1]));
console.log(containsDuplicates(null));
console.log(containsDuplicates([1]));
console.log(containsDuplicates([1,2]));
console.log(containsDuplicates([]));