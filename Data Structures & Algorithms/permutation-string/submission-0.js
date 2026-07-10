class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let hash1 = new Map ();
        let hash2 = new Map ();

        function areMapsEqual(map1, map2) {
            if (map1.size !== map2.size) return false;
            for (let [key, val] of map1) {
                if (map2.get(key) !== val) return false;
            }
            return true;
        }

        for (let i=0; i<s1.length; i++) {
            if (!hash1.has (s1[i])) {
                hash1.set (s1[i], 1);
            } else {
                hash1.set (s1[i], hash1.get(s1[i]) + 1)
            }

            if (!hash2.has (s2[i])) {
                hash2.set (s2[i], 1);
            } else {
                hash2.set (s2[i], hash2.get(s2[i]) + 1)
            }
        }

        if (areMapsEqual ( hash1, hash2 )) return true;

        for (let j = s1.length; j < s2.length; j++ ) {
            let rightChar = s2[j];
            let leftChar  = s2[j-s1.length];
            hash2.set(rightChar, (hash2.get(rightChar) || 0) + 1 );
            hash2.set(leftChar, hash2.get(leftChar) - 1);
            if (hash2.get(leftChar) === 0) {
                hash2.delete(leftChar);
            }
            if (areMapsEqual ( hash1, hash2 )) return true;
        }

        return false;
    }
}
