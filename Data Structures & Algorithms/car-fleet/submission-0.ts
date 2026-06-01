class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((pos, index) => (
            {
                position: pos,
                speed: speed[index]
            }
        ));
        let timeTaken: Array<number> = [];
        cars.sort((a, b) => b.position - a.position);
        for (let i = 0; i < cars.length; i++) {
            let time = (target - cars[i].position) / cars[i].speed;
            if (timeTaken.length === 0 || time > timeTaken[timeTaken.length - 1]) {
                timeTaken.push(time)
            }
        }

        return timeTaken.length;
    }
}
