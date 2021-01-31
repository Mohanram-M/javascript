/**
 * KMP SEARCH
 * Time : O(m+n) Space : O(m)
 */

 function getLsp(pattern){

    let i=1;
    let count=0;
    let lsp=[0];

    while(i<pattern.length){
        if(pattern[i]===pattern[count]){
            count++;
            lsp[i]=count;
            i++;
        }else{
            if(count===0){
                lsp[i]=count;
                i++;
            }else{
                count--;
            }
        }
    }
    return lsp;
 }


 function kmpSearch(str,pattern){
    
    let i=0;
    let j=0;
    let fIndex=[];
    let lsp=getLsp(pattern);

    while(i<str.length){

        if(str[i]===pattern[j]){
            i++;
            j++;
        }

        if(j===lsp.length){
            fIndex.push(i-j);
            j=lsp[j-1];
        }

        if(str[i]!==pattern[j]){
            if(j!==0){
                j=lsp[j-1];
            }else{
                i++;
            }
        }
    }
    return fIndex;
 }


console.log(kmpSearch("AAAAAAABAAABACAADAAABAABA","AAA"));

console.log(kmpSearch("AAAAABAABABABAAA","BA"));
console.log(kmpSearch("AAACABAAACABABAAA","AA"));
console.log(kmpSearch("AAACABAAACABABAAA","AAAC"));