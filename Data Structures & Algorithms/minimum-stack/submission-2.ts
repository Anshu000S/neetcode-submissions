class MinStack {
    stack: Array<[number, number]>;

    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length == 0) {
            this.stack.push([val, val]);
            return;
        }
        const currentMin = this.stack[this.stack.length - 1][1];
        const nextMin = Math.min(val, currentMin);
        this.stack.push([val, nextMin]);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1][1];
    }
}
