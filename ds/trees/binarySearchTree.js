/**
 * 
 * Properties 
 *  contains a root node
 *  Every node has atmost 2 children
 *  the left child is less than the parent and right child is greater than the paarent
 *  
 * INSERT
 *  AVG :
 *      TIME : O(logn) , SPACE : O(1)  
 *  WORST :
 *      TIME : O(n) , SPACE : O(1)
 *  
 * FIND/ CONTAINS
 *  AVG :
 *      TIME : O(logn), SPACE: O(1)
 *  WORST :
 *      TIME : O(n), SPACE: O(1)
 * 
 * 
 * TRAVERSAL
 * 
 * BFS O(n)
 *  Queue Grows as tree grows wide 
 * 
 * DFS O(n)
 * PREORDER
 *  used to create replica of the tree, use pre order and use insert to reconstruct
 *  used in cases where the parent has to be examined first befor the children
 * 
 * POSTORDER
 *  used in cases where the children has to be examined first before parents
 * 
 * INORDER
 *  used to create a ordered list for BST
 *  If you know that the tree has an inherent sequence in the nodes, and you want to flatten the tree
 * 
 */

 class Node{
     constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
     }
 }

 class BST{

    constructor(){
        this.root=null;
    }

    insert(value){
        let node=new Node(value);
        if(this.root===null) this.root=node;

        let curr=this.root;
        while(true){
            if(curr){
                if(value<=curr.value){
                    if(curr.left===null){
                        curr.left=node;
                        break;
                    }
                    curr=curr.left;
                }
                else{
                    if(curr.right===null){
                        curr.right=curr;
                        break;
                    }
                    curr=curr.right;
                }
            }
        }
    }

    search(value){
        if(this.root===null) return null;
        let curr=this.root;
        while(true){
            if(curr!=null){
                if(value==curr.value){
                    return curr;
                }else if(value<curr.value){
                    curr=curr.left;
                }else{
                    curr=curr.right;
                }
            }
            else{
                return null;
            }
        }
    }

    bfs(){
        let resultArr=[];
        let vQueue=[];

        vQueue.push(this.root);

        while(vQueue.length>0){
            let node=vQueue.shift();
            resultArr.push[node.value];
            if(node.left!=null){
                vQueue.push(node.left);
            }
            if(node.right!=null){
                vQueue.push(node.right);
            }
        }   
        return resultArr;
    }

    dfsPreorder(){
        let result=[];
        
        function traverse(node){
            if(node!=null){
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        }
        
        traverse(this.root);
        return result;
    }

    dfsPreorder(){
        let result=[];
        
        function traverse(node){
            if(node!=null){
                traverse(node.left);
                traverse(node.right);
                result.push(node.value);
            }
        }
        
        traverse(this.root);
        return result;
    }

    dfsInorder(){
        let result=[];
        function traverse(node){
            if(node!=null){
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root);
        return result;
    }
 }