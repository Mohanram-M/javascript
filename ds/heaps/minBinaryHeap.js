

class Node{
    constructor(val){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class MinBinaryHeap{
    constructor(){
        this.nodes=[];

    }

    bubbleUp(){
        if(this.nodes!=null && this.nodes.length<2)return;
        let indx=this.nodes[length-1];

        while(indx>0){
            let pIndx=Math.floor((indx-1)/2);

            if(this.nodes[pIndx]>this.nodes[indx]){
                let temp=this.nodes[indx];
                this.nodes[indx]=this.nodes[pIndx];
                this.nodes[pIndx]=temp;
                indx=pIndx;
            }else{
                break;
            }
        }
    }

    sinkDown(){
        if(this.nodes!=null && this.nodes.length<2)return;
        let indx=this.nodes[0];

        while(indx>-1){
            let lIndx=(2*indx)+1;
            let rIndx=(2*indx)+2;
            let swapIndx=null;

            if(lIndx<this.nodes.length && this.nodes[lIndx]<this.nodes[indx]){
                swapIndx=lIndx;
            }

            if(rIndx<this.nodes.length && this.nodes[rIndx]<this.nodes[indx]
                &&(swapIndx===null || this.nodes[rIndx]<this.nodes[lIndx])){
                swapIndx=rIndx;
            }

            if(swapIndx!==null){
                let temp=this.nodes[swapIndx];
                this.nodes[swapIndx]=this.nodes[indx];
                this.nodes[indx]=temp;
                indx=swapIndx;
            }else{
                break;
            }

        }
        
    }

    
    insert(val){
        this.nodes.push(val);
        this.bubbleUp();
    }

    extractMin(){
        let min=this.nodes[0];
        let temp=this.nodes.pop();
        if(this.nodes.length>0){
            this.nodes[0]=temp;
            this.sinkDown();
        }
        return min;
    }
}