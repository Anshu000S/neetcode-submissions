class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: Array<number> = []; // Changed to number type for safety
        let operators = new Set(['+', '-', '*', '/']);

        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            if (operators.has(token)) {
                let b = stack.pop()!;
                let a = stack.pop()!;
                let c: number;
                switch (token) {
                    case '+':
                        c = a + b;
                        break;
                    case '-':
                        c = a - b;
                        break;
                    case '*':
                        c = a * b;
                        break;
                    case '/':
                        c = Math.trunc(a / b);
                        break;
                    default:
                        throw new Error("Unknown operator");
                }
                stack.push(c);
            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop()!;
    }
}