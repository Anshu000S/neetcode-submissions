class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length)  return false;

        s = s.split("").sort().join("");
        t = t.split("").sort().join("");

        for(let i=0; i<s.length;i++) {
            if (s[i] && t[i] && s[i] == t[i]) {
                // do nothing
            } else {
                return false;
            }
        }

        return true;
    }
}
