class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack: Array<number> = [];
        let result: Array<number> = new Array(temperatures.length).fill(0);

        for (let i=0;i<temperatures.length;i++) {
            const currentTemperature =  temperatures[i];
            while (stack.length > 0 && currentTemperature > temperatures[stack[stack.length - 1]]) {
                const poppedIndex = stack.pop()!;
                result[poppedIndex] = i - poppedIndex;
            }
            stack.push(i);
        }
        return result;
    }
}
