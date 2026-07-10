class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashMap = new Map ();
        let left    = 0;
        let right   = 0;
        let maxFreq = 0;
        let longest  = 0;

        while (right < s.length) {
            if (!hashMap.has (s[right])) {
                hashMap.set (s[right], 1);
            } else {
                hashMap.set (s[right], hashMap.get (s[right]) + 1);
            }

            maxFreq = Math.max (maxFreq, hashMap.get(s[right]));

            if ((right - left + 1) - maxFreq > k) {
                hashMap.set (s[left], hashMap.get (s[left]) - 1);
                left++;
            }

            longest = Math.max ((right - left + 1), longest);
            right ++
        }

        return longest;
    }
}
