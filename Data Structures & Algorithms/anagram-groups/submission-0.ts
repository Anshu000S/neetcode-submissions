class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap: Map<string,string[]> = new Map ();
        for (let i=0;i<strs.length;i++) {
            let keyArray: Array<number> = Array(26).fill(0);
            for (let j = 0; j<strs[i].length; j++) {
                let index = strs[i].charCodeAt(j) - 'a'.charCodeAt(0);
                keyArray[index] = keyArray[index] + 1;
            }
            let keyString = keyArray.join("#");
            if (hashMap.has(keyString)) {
                let arr = hashMap.get(keyString);
                arr.push(strs[i]);
            } else {
                hashMap.set(keyString, [strs[i]]);
            }
        }
        return Array.from(hashMap.values());

    }
}
