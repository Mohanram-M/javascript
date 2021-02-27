/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a 
 * different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

//SINGLE PASS APPROACH

 var maxProfit = function(prices){
        let minPrice=Infinity;
        let maxProfit=0;

        for(let i=0;i<prices.length;i++){
            if(prices[i]<minPrice){
                minPrice=prices[i];
            }else if((prices[i]-minPrice)>maxProfit){
                maxProfit=prices[i]-minPrice;
            }
        }
        return maxProfit;

 }


console.log(maxProfit([7,1,5,3,6,4]));


/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
 * (i.e., buy one and sell one share of the stock multiple times).
 * Note: You may not engage in multiple transactions at the same time
 * (i.e., you must sell the stock before you buy again).
 */

 //PEAK VALLEY APPROACH

var maxProfit2= function(prices){

    let maxProfit=0
    let peak=prices[0];
    let valley=prices[0];
    i=0;
    while(i<prices.length-1){

        while(prices[i]>=prices[i+1] && i<prices.length-1){
            i++;
        }
        valley=prices[i];
        while(prices[i]<=prices[i+1] && i<prices.length){
            i++;
        }
        peak=prices[i];

        maxProfit+=peak-valley;
    }
    return maxProfit;

}

//SINGLE PASS APPROACH

function maxProfit3(prices){
    let maxProfit=0;
    for(let i=1;i<prices.length;i++){
        if(prices[i-1]<prices[i]){
            maxProfit+=prices[i]-prices[i-1];
        }
    }
    return maxProfit;
}

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2([1, 7, 2, 3, 6, 7, 6, 7]));

console.log(maxProfit3([7, 1, 5, 3, 6, 4]));
console.log(maxProfit3([1, 7, 2, 3, 6, 7, 6, 7]));


/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 * Note: You may not engage in multiple transactions at the same time 
 * (i.e., you must sell the stock before you buy again).
 */


function maxProfit2T(arr){

    let buy1=-Infinity;
    let sell1=0;
    let buy2=-Infinity;
    let sell2=0;

    if(arr!==null && arr.length>2){
        for(let i=0;i<arr.length;i++){
            buy1=(-arr[i]>buy1)?-arr[i]:buy1;
            sell1=(arr[i]+buy1>sell1)?arr[i]+buy1:sell1;
            buy2=((sell1-arr[i])>buy2)?(sell1-arr[i]):buy2;
            sell2=((arr[i]+buy2)>sell2)?(arr[i]+buy2):sell2;
        }
    }
    
    return sell2;
}



console.log(maxProfit2T([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2T([1, 7, 2, 3, 6, 7, 6, 7]));
console.log(maxProfit2T([3,3,5,0,0,3,1,4]));


 /**
  * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
  * Design an algorithm to find the maximum profit. You may complete at most k transactions.
  * Notice that you may not engage in multiple transactions simultaneously 
  * (i.e., you must sell the stock before you buy again).
*/


function maxProfitKT(arr,k){

    
    if(arr===null || arr.length<2) return arr;

    //Can perform any number of transactions
    if(k>(arr.length/2)){
        let maxProfit=0;
        for(let i=1;i<arr.length;i++){
            if(arr[i]>arr[i-1])
                maxProfit+=arr[i]-arr[i-1];
        }
        return maxProfit;
    }else{

        let kBuyArr=Array.from({length:k},()=>-Infinity);
        let kSellArr=Array.from({length:k},()=>0);

        for(let i=0;i<arr.length;i++){
            for(let j=0;j<k;j++){
                let temp=((j!==0)?kSellArr[j-1]:0)-arr[i];
                kBuyArr[j]=(kBuyArr[j] > temp)?kBuyArr[j]:temp;
                kSellArr[j]=(kSellArr[j] > (arr[i]+kBuyArr[j]))?kSellArr[j]:(arr[i]+kBuyArr[j]);
            }
        }
        return kSellArr[k-1];
    }
}


console.log("------5----");
console.log(maxProfitKT([7, 1, 5, 3, 6, 4],5));
console.log(maxProfitKT([1, 7, 2, 3, 6, 7, 6, 7],5));
console.log(maxProfitKT([3,3,5,0,0,3,1,4],5));

console.log("------1----");
console.log(maxProfitKT([7, 1, 5, 3, 6, 4],1));
console.log(maxProfitKT([1, 7, 2, 3, 6, 7, 6, 7],1));
console.log(maxProfitKT([3,3,5,0,0,3,1,4],1));


console.log("-----2----");
console.log(maxProfitKT([7, 1, 5, 3, 6, 4],2));
console.log(maxProfitKT([1, 7, 2, 3, 6, 7, 6, 7],2));
console.log(maxProfitKT([3,3,5,0,0,3,1,4],2));


console.log("-----3----");
console.log(maxProfitKT([7, 1, 5, 3, 6, 4],3));
console.log(maxProfitKT([1, 7, 2, 3, 6, 7, 6, 7],3));
console.log(maxProfitKT([3,3,5,0,0,3,1,4],3));


/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
 * (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day) 
 */

 function colldown1(prices){

    if(prices===null || prices.length<1){
        return 0;
    }

    let buy1,buy0=0;
    let sell2,sell1,sell0=0;

    buy1=-prices[0];
    buy0=Math.max(buy1,-prices[1]);

    sell0=Math.max(sell1,buy1+prices[1]);

    sell2=sell1;
    sell1=sell0;
    buy1=buy0;

    for(let i=2;i<prices.length;i++){
        buy0=Math.max(buy1,sell2-prices[i]);
        sell0=Math.max(sell1,buy1+prices[i]);

        sell2=sell1;
        sell1=sell0;
        buy1=buy0;
    }
    return sell0;
 }

 /**
  * With Transaction Fee..!!!
  * 
  */

function maxProfitWithTransFee(prices,transFee){

    if(prices===null && prices.length<2) return 0;

    let lastbuy,buy=0;
    let sell=0;
    buy=-prices[0]-transFee;
    for(let i=1;i<prices.length;i++){
        lastbuy=buy;
        buy=Math.max(buy,sell-prices[i]-transFee);
        sell=Math.max(sell,lastbuy+prices[i]-transFee);
    }
    return sell;
}