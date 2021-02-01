/**
 * ------Singly link list------
 *  PUSH  
 *      TIME: O(1) , SPACE : O(1)
 *  POP
 *      TIME : O(n), SPACE : O(1)
 *  SHIFT
 *      TIME : O(1), SPACE : O(1)
 *  UNSHIFT
 *      TIME : O(1), SPACE : O(1)
 *  GET
 *      TIME : O(n) ,SPACE : O(1)
 *  SET
 *      TIME : O(n), SPACE : O(1)
 *  INSERT
 *      TIME : O(n), SPACE : O(1)
 *  REMOVE
 *      TIME : O(n), SPACE : O(1)
 *  REVERSE
 *      TIME : O(n), SPACE : O(1)
 */


class Node{

    constructor(value){
        this.value=value;
        this.next=null;
    }
 }

 class LinkList{
     constructor(){
         this.head=null;
         this.tail=null;
         this.length=0;
     }

    push(val){
        let node =new Node(val);
        if(this.length===0){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return true;
    }
    
    
    pop(){
        if(this.length===0){
            return null;
        }
        let poppedNode=this.tail;

        let curNode=this.head;
        if(curNode===poppedNode){
            this.head=null;
            this.tail=null;
        }else{
            while(curNode.next!=poppedNode){
                curNode=curNode.next;
            }
            this.tail=curNode;
            this.tail.next=null;
        }
        this.length--;
        return poppedNode;
    }


    shift(){
        if(this.head===null) return null;
        let shiftedNode=this.head;
        this.head=this.head.next;
        this.length--;
        if(this.length===0) this.tail=null;

        shiftedNode.next=null;
        return shiftedNode;
    }


    unshift(val){
        let node=new Node(val);
        node.next=this.head;
        this.head=node;
        this.length++;
        if(this.length===1)this.tail=this.head;
        return true;
    }

    get(index){
        let rnode=null;
        if(index>this.length-1) rnode=null;
        if(index===this.length-1) rnode=this.tail;
        else if(index===0) rnode=this.head;
        else{
            let i=0;
            let curNode=this.head;
            while(curNode!=null && i<index){
                curNode=curNode.next;
                i++;
            }
            rnode=curNode;
        }
        return rnode;
    }

    set(index,value){
        let snode=this.get(index);
        if(snode!=null){
            snode.value=value;
            return true;
        }
        else{
            return false;
        } 
    }


    insert(index,value){

        let res=false;
        if(index===0) res=this.unshift(value);
        if(index===this.length) res=this.push(value);
        else{
            let prev=this.get(index-1);
            let curr=this.get(index);
            if(curr!==null){
                let node=new Node(value);
                prev.next=node;
                node.next=curr;
                this.length++;
                res=true;
            }
        }
        return res;
    }


    remove(index){
        let removedNode=null;
        if(index===0) removedNode=this.shift();
        else if(index===this.length-1) removedNode=this.pop();
        else{
            let prev=this.get(index-1);
            let curr=this.get(index);

            if(curr!=null){
                removedNode=curr;
                prev.next=curr.next;
                removedNode.next=null;
                this.length--;
            }
        }
        return removedNode;
    }

    reverse(){
        let curr=this.head;
        let prev=null;
        let next=null;
        while(curr!=null){
            next = curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
    }


    toString(){
        let curr=this.head;
        let resArr=[];
        while(curr!=null){
            resArr.push(curr.value);
            curr=curr.next;
        }
        return resArr.join(',');
    }
 }

 