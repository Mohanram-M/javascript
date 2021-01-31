/**
 * enqueue
 *   TIME : O(1), SPACE : O(1)
 * dequeue
 *   TIME : O(1), SPACE : O(1)
 */ 

 class Node{
     constructor(value){
        this.value=value;
        this.next=null;
     }
 }

 class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    enqueue(value){
        let node=new Node(value);
        if(this.head===null){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return true;
    }

    dequeue(){
        let poppedNode=null;
        if(this.head===null)poppedNode=null;
        else{
            poppedNode=this.head;
            this.head=poppedNode.next;
            poppedNode.next=null;
            this.length--;
        }
        return poppedNode;
    }
 }


 queue =new Queue();
 console.log('Enqueued 1 : ',queue.enqueue(1));
 console.log('Enqueued 2 : ',queue.enqueue(2));
 console.log('Enqueued 3 : ',queue.enqueue(3));
 console.log('Enqueued 4 : ',queue.enqueue(4));
 console.log('Enqueued 5 : ',queue.enqueue(5));
 console.log('Enqueued 6 : ',queue.enqueue(6));

 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 console.log('Dequeued :',queue.dequeue());
 