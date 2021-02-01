/**
 * push 
 *    TIME : O(1), SPACE O(1)
 * pop
 *    TIME : O(1), SPACE O(1)
 */


 class Node{
     constructor(value){
        this.value=value;
        this.next=null;
     }
 }

 class Stack{
    constructor(){
        this.head=null;
        this.length=0;
    }

    push(value){
        let node= new Node(value);
        node.next=this.head;
        this.head=node;
        this.length++;
        return true;
    }

    pop(){
        let poppedNode=this.head;
        if(poppedNode!=null){
            this.head=poppedNode.next;
            this.length--;
            poppedNode.next=null;
        }
        return poppedNode;
    }
 }

 let stack=new Stack() ;
 console.log('Pushed 1:',stack.push(1));
 console.log('Pushed 2:',stack.push(2));
 console.log('Pushed 3:',stack.push(3));
 console.log('Pushed 4:',stack.push(4));
 
 console.log('Popped :',stack.pop());
 console.log('Popped :',stack.pop());
 console.log('Popped :',stack.pop());
 console.log('Popped :',stack.pop());
 console.log('Popped :',stack.pop());
 console.log('Popped :',stack.pop());
