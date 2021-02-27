/**
 * Reverse Linked List
 * 
 * 
 */


 function ListNode(val,next){
     this.val=(val===undefined)?0:val;
     this.next=(next===undefined)?null:next;
 };

 var reverseList = function(head){

    let curr=head;
    let nextNode=null;
    let prev=null;
    while(curr!=null){
        nextNode=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextNode;        
    }
    head=curr;
    return curr;
}