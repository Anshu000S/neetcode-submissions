// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let current = head;
        if (head == null) return null
        while (current != null) {
            let tempNode = new Node (current.val);
            let tempNext = current.next;
            current.next = tempNode;
            tempNode.next= tempNext;
            current      = tempNext;
        }

        current = head;
        while (current != null) {
            if (current.random != null) {
                current.next.random = current.random.next;
            }
            current = current.next.next;
        }

        let copiedList = head.next;
        let current2   = head;
        while (current2 != null) {
            let copiedNode   = current2.next;
            let originalNode = copiedNode.next;
            current2.next    = originalNode;
            copiedNode.next  = originalNode ? originalNode.next : null;
            
            current2 = originalNode;
        }
        return copiedList;
    }
}
