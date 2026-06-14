class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxSpeed = Math.max(...piles);
        let minSpeed = 1;
        let result   = maxSpeed;
        while (minSpeed <= maxSpeed) {
            let middleSpeed = Math.floor( (maxSpeed + minSpeed) / 2);
            let hoursNeeded = 0;
            for (let i=0; i<piles.length;i++) {
                hoursNeeded += Math.ceil(piles[i]/middleSpeed);

            }
            if (hoursNeeded <= h) {
                result = middleSpeed;
                maxSpeed = middleSpeed - 1;
            } else {
                minSpeed = middleSpeed + 1;
            }
        }
        return result;
    }
}
