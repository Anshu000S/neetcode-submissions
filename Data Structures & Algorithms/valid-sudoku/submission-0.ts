class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rowsMap: Map<number, Set<string>> = new Map ();
        let colsMap: Map<number, Set<string>> = new Map ();
        let boxesMap: Map<number, Set<string>> = new Map();

        for (let i = 0; i < 9; i++) {
            rowsMap.set(i, new Set());
            colsMap.set(i, new Set());
            boxesMap.set(i, new Set());
        }

        for (let r=0; r<9; r++) { 
           for (let c=0; c<9; c++) {
                let number = board[r][c];
                if (number === '.') continue;

                let currentRowSet = rowsMap.get(r);
                if (currentRowSet.has(number)) return false;
                currentRowSet.add(number);

                let currentColSet = colsMap.get(c);
                if (currentColSet.has(number)) return false;
                currentColSet.add(number);

                let boxKey = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                let currentBoxSet = boxesMap.get(boxKey);
                if (currentBoxSet.has(number)) return false;
                currentBoxSet.add(number);
           }
        }

        return true;
    }
}
