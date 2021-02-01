/**
 * Write a function to delete a node in a singly linked list
 * you will not be given access to the head of the list , instead you will be given access 
 * to the node to be deleted directly
 * 
 * It is guaranteed that the node to be deleted is not the tail node in the list
 * 
 */


 var deleteNode=function(node){

    nextNode=node.next;
    node.val=nextNode.val;
    node.next=nextNode.next;
    nextNode.next=null;

 };