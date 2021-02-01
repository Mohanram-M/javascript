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




 /**
  * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
  * Design an algorithm to find the maximum profit. You may complete at most k transactions.
  * Notice that you may not engage in multiple transactions simultaneously 
  * (i.e., you must sell the stock before you buy again).
  */




