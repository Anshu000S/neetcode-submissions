class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const repeat = {};
        let maxLength = 0;
        let left = 0;
        let right = 0;

        while (right < s.length) {
            let rightChar = s[right];
            while (repeat[rightChar]) {
                let leftChar = s[left];
                delete repeat[leftChar];
                left++;
            }

            repeat[rightChar] = 1;
            if (maxLength <= right - left + 1 )
                maxLength = right - left + 1;

            right ++;
        }
        return maxLength;
    }
}
