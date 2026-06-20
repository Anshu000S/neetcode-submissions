class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left  = 0;
        let right = 1;
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
    }
}
