/**
 * Given the root of a binary tree ,return its maximum depth
 * A binary tress maximum depth is the number of nodes along the longest path from the root node
 * down to the fartherst node.
 */

function TreeNode(val,left,right){
    this.val=(val===undefined)?0:val;
    this.left =(left===undefined)?null:left;
    this.right =(right===undefined)?null :right;
}

 var maxDepth = function(root){

        if(root===null || root===undefined){
            return 0;
        }else{
            lDepth=maxDepth(root.left);
            rdepth=maxDepth(root.right);

            if(lDepth>rdepth)
                return lDepth+1;
            else
                return rdepth+1;
        }
 };

 leaf1=new TreeNode(1,undefined,undefined);
 leaf2=new TreeNode(2,undefined,undefined);

 p1=new TreeNode(3,leaf1,undefined);
p2= new TreeNode(4,p1,leaf2);
p3 = new TreeNode(5,p2,p1);

console.log(maxDepth(p3));
console.log(maxDepth(p2));
console.log(maxDepth(p1));
console.log(maxDepth(leaf2));
console.log(maxDepth(leaf1));