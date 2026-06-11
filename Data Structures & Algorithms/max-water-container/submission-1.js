class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let leftPointer = 0; 
        let rightPointer =  heights.length - 1;
        let maxWater = 0;

        while (leftPointer < rightPointer) {
            let minBar = Math.min(heights[leftPointer], heights[rightPointer]);
            let width  = rightPointer -  leftPointer;
            let totalWater = minBar * width;
            if (totalWater > maxWater) maxWater = totalWater;
            if (minBar == heights[leftPointer]) leftPointer++
            else rightPointer--;
        }

        return maxWater
    }
}
