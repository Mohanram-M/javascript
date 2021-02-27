/**
 * Merge two sorted linked list and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two list
 * 
 */

 class Node{
     constructor(val){
         this.value=val;
         this.next=null;
     }
 }

function mergeTwoList(l1,l2){

    let merged=new Node(null);
    let dummy=merged;

    while(l1!==null && l2!==null){

        if(l1.value<=l2.value){
            merged.next=l1;
            l1=l1.next;
        }else{
            merged.next=l2;
            l2=l2.next;
        }
        merged=merged.next;

    }
    if(l1!==null){
        merged.next=l1;
    }

    if(l2!==null){
        merged.next=l2;
    }

    return dummy.next;
 }


 function printList(l1){

    let arr=[];
    while(l1!=null){
        arr.push(l1.value);
        l1=l1.next;
    }
    console.log(arr);
 }

 let n1=new Node(1);
 let n2=new Node(8);
 let n3=new Node(12);
 let n4=new Node(15);

 let n5=new Node(0);
 let n6=new Node(3);
 let n7=new Node(12);
 let n8=new Node(16);

 n1.next=n2;
 n2.next=n3;
 n3.next=n4;

 n5.next=n6;
 n6.next=n7;
 n7.next=n8;

printList(mergeTwoList(n1,n5));