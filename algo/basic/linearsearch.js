
const assert = require('assert').strict;
const { PerformanceObserver, performance } = require('perf_hooks');
/*

Def : A method of finding element in a list /array
Time Complexity : 
    - BEST :O(1)
    - WORST : O(n)
    - AVG : O(n)
Space Complexity :
    - WORST : O(1)
    - AVG : O(1)
*/

function linearSearch(arr,srchstr){
    let matchingIndx=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]===srchstr){
            matchingIndx=i;
            break;
        }
    }
    return matchingIndx;
}


const obs = new PerformanceObserver((items) => {
    let entries=items.getEntries();
    if(entries.length>0){
        entries.forEach((entry)=>{
            console.log(entry.name+" - "+entry.duration);
        });
    }    
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('A');
assert.equal(linearSearch([1,2,3,4,5],3),2);
performance.measure('linearSearch([1,2,3,4,5],3)', 'A');

performance.mark('B');
assert.equal(linearSearch([1,2,3,4,5],1),0);
performance.measure('linearSearch([1,2,3,4,5],1)', 'B');

performance.mark('C');
assert.equal(linearSearch([1,2,3,4,5],5),4);
performance.measure('linearSearch([1,2,3,4,5],5)', 'C');

performance.mark('D');
assert.equal(linearSearch([1,2,3,4,5],6),-1);
performance.measure('linearSearch([1,2,3,4,5],6)', 'D');

performance.clearMarks();