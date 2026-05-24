class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString: string = '';
        for(let i=0; i<strs.length; i++) {
            const length = strs[i].length;
            encodedString = encodedString.concat(`${length}#${strs[i]}`);
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedArr: Array<string> = [];
        let i =0;
        while (i< str.length) {
            let j=i;
            while (str[j] != '#') {
                j++;
            }
            let number = parseInt (str.substring(i,j));
            let word = str.substr(j+1, number);
            decodedArr.push(word);
            i=j+1+ number;
        }

        return decodedArr;
    }
}
