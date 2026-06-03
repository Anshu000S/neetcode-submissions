class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');;
        let start: number = 0;
        let end: number = string.length - 1;
        while (start < end) {
            if ( string[start] !== string[end] ) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
