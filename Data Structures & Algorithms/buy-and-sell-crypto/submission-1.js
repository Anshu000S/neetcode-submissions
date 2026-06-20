class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /*Brute Force*/
        /*
        let maxProfit = 0;

        for (let i = 0; i< prices.length - 1; i++) {
            let buyPrice = prices[i];
            for (let j = i + 1; j < prices.length; j++) {
                let sellPrice =  prices[j];
                let profit = sellPrice - buyPrice;
                if (maxProfit <= profit) maxProfit = profit;
            }
        }

        return maxProfit;
        */

        /*Optimized*/
        let buy = 0;
        let sell = 1;
        let maxProfit = 0;
        while (buy < sell && sell<prices.length){
            if (prices[sell] <= prices[buy]) {
                buy = sell;
                sell ++;
            } else if ( prices[sell] - prices[buy] > maxProfit ) {
                maxProfit = prices[sell] - prices[buy];
                sell ++;
            } else {
                sell ++;
            }
        }

        return maxProfit;
    }
}
