/**
 * Convert Sorted Array To Binary Tree
 * 
 */

 class Node{
    constructor(val){
        this.value=val;
        this.right=null;
        this.left=null;
    }
 }

function sortedArrayToBinarytree(arr){

    if(!arr || arr.length<1) return null;
    let mid=Math.floor(arr.length/2);
    let root=new Node(arr[mid]);
    root.left=sortedArrayToBinarytree(arr.slice(0,mid));
    root.right=sortedArrayToBinarytree(arr.slice(mid+1));
    return root;
}

function preOrder(root){

    let res=[];
    function traverse(root){
        if(root!=null){
            res.push(root.value);
            traverse(root.left);
            traverse(root.right);
        }
    }
    traverse(root);
    return res;
}

let root=sortedArrayToBinarytree([1, 2, 3, 4, 5, 6, 7]);
console.log(preOrder(root));

root=sortedArrayToBinarytree([1]);
console.log(preOrder(root));

root=sortedArrayToBinarytree([]);
console.log(preOrder(root));

root=sortedArrayToBinarytree(null);
console.log(preOrder(root));