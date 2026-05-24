class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 != 0) return false;
        let parans = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        let stack: Array<string> = [];

        for (let i=0; i<s.length; i++) {
            let character = s[i];
            if (parans[character]) {
                stack.push(character);
            } else {
                let char = stack.pop ();
                if (parans[char] !== character) {
                    return false;
                }
            }
        }

        return stack.length == 0 ? true : false;
    }
}
