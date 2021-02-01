/**
 * Doubly link list
 *
 * PUSH
 *      TIME : O(1), SPACE O(1)
 * POP
 *      TIME : O(1), SPACE O(1)
 * SHIFT
 *      TIME : O(1), SPACE O(1)
 * UNSHIFT
 *      TIME : O(1), SPACE O(1)
 * GET
 *      TIME : O(N/2), SPACE O(1)
 * SET
 *      TIME : O(n/2), SPACE O(1) 
 * INSERT
 *      TIME : O(n/2), SPACE O(1)
 * REMOVE
 *      TIME : O(n/2), SPACE O(1)
 *  
 */

 class Node{
     constructor(value){
         this.value=value;
         this.next=null;
         this.prev=null;
     }
 }

 class DLL{
     constructor(){
         this.head=null;
         this.tail=null;
         this.length=0;
     }

     push(val){
        let node=new Node(val);
        if(this.length===0){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
        }
        this.length++;
        return true;
     }

     pop(){
        let poppedNode=null;
        if(this.head===null)poppedNode=null;
        else{
            poppedNode=this.tail;
            this.length--;
            if(this.length===0){
                this.head=null;
                this.tail=null;
            }else{
                this.tail=this.tail.prev;
                this.tail.next=null;  
            }   
            poppedNode.next=null;
            poppedNode.prev=null;  
        }
        return poppedNode;
     }

     shift(){
        let shiftedNode=null;
        if(this.head===null)shiftedNode=null;
        else{
            shiftedNode=this.head;
            this.length--;
            if(this.length===0){
                this.head=null;
                this.tail=null;
            }else{
                this.head=this.head.next;
                this.head.prev=null;
            }
            shiftedNode.prev=null;
            shiftedNode.next=null;
        }
        return shiftedNode;
     }


     unshift(val){
         let node=new Node(val);

         if(this.head===null){
             this.head=node;
             this.tail=node;
         }else{
             this.head.prev=node;
             node.next=this.head;
             this.head=node;
         }
         this.length++;
         return true;
     }


     get(index){
        let foundNode=null;
        if(index>this.length-1)foundNode=null;
        else if(index===0)foundNode=this.shift();
        else if(index===length-1)foundNode=this.pop();
        else{
            let i=0; 
            if(index>(this.length/2)){
                i=this.length-1;
                let curNode=this.tail;
                while(curNode!=null && i>index){
                    curNode=curNode.prev;
                    i--;
                }
            }else{
                i=0;
                let curNode=this.head;
                while(curNode!=null && i<index){
                    curNode=curNode.next;
                    i++;
                }
            }
            foundNode=curNode;
        }
     }

     set(index,value){
         let foundNode=this.get(index);
         if(foundNode){
             foundNode.value=value;
             return true;
         }else{
             return false;
         }
     }

     insert(index,value){
        let res=false;
        if(index===0)res=this.unshift(value);
        else if(index===this.length)res=this.push(value);
        else{
            let foundNode=this.get(index);      
            if(foundNode!=null){
                let node=new Node(value);
                let prevNode=foundNode.prev;
                prevNode.next=node;
                node.prev=prevNode;
                node.next=foundNode;
                foundNode.prev=node;
                this.length++;
                res=true;
            }
        }
        return res;       
     }

     remove(index){
        let removedNode=null;
        if(index===0)res=this.shift();
        else if(index===this.length-1)res=this.pop();
        else{
            let foundNode=this.get(index);
            if(foundNode!==null){
                (foundNode.prev).next=foundNode.next;
                (foundNode.next).prev=foundNode.prev;
                removedNode=foundNode;
                removedNode.prev=null;
                removedNode.next=null;
                this.length--;
            }
        }
        return removedNode;
     }


     toString(){
        let res=[];
        let curr=this.head;
        while(curr!=null){
            res.push(curr.value);
            curr=curr.next;
        }
        return res.join(',');
     }
 }



