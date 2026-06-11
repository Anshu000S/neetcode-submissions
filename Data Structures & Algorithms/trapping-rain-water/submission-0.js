class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
 trap(height) {
    let left = 0; 
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0; // Added missing semicolon
    let totalWater = 0;

    while (left < right) {
        // FIX: Changed '>' to '<' to process the smaller bar first
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}
}
