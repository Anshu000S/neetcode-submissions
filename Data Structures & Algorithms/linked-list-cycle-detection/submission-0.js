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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let currentIndex = 0;
        let pointer = head
        while (pointer != null) {
            if (pointer.index)
                return true;
            pointer.index = currentIndex;
            pointer = pointer.next;
            currentIndex++;
        }
        return false;
    }
}
