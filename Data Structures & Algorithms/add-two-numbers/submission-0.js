/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let l1Head    = l1;
        let l2Head    = l2;
        let carry     = null;
        let resultListHead = null;
        let l3Head         = resultListHead;
        while (l1Head != null || l2Head != null || carry != null) {
            const l1Val = l1Head?.val ?? 0;
            const l2Val = l2Head?.val ?? 0;

            let sum     = l1Val + l2Val;
            if (carry) sum = sum + carry

            let resultVal = 0;

            if (sum > 9) {
                carry = Math.floor(sum / 10);
                resultVal = sum % 10;
            } else {
                resultVal = sum;
                carry = null;
            }
            const newNode = new ListNode (resultVal);
            if (l3Head == null) {
                l3Head = newNode;
                resultListHead = l3Head;
            } else {
                l3Head.next = newNode;
                l3Head      = l3Head.next;
            }

            if (l1Head) l1Head = l1Head.next;
            if (l2Head) l2Head = l2Head.next;
        }

        return resultListHead;
    }
}
