function minPlanesNeeded(fuel) {
    const n = fuel.length;
    if (n === 1) return 0; // Already at the last airport

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + fuel[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            if (currentEnd >= n - 1) {
                return jumps;
            }
        }

        if (farthest <= i) {
            return -1; // We are stuck and cannot proceed further
        }
    }

    return -1; // If we exit the loop without reaching the last airport
}

console.log(" The minimum number of planes required in this case is ",minPlanesNeeded([2, 1, 2, 3, 1]));
console.log(" The minimum number of planes required in this case is ",minPlanesNeeded([1, 6, 3, 4, 5, 0, 0, 0, 6]));

// Below is the explanation of the above code 
// Initialization of variables:

// n: the number of airports.
// jumps: to count the number of planes hired (or jumps made).
// currentEnd: the farthest point reachable with the current number of planes.
// farthest: the farthest point reachable with the next plane.

// Iteration:

// Iterate through the array up to the second last element (since we don't need to jump from the last element).
// At each airport (index i), update farthest to be the maximum of farthest and i + fuel[i].
// If the current index i reaches currentEnd, increment jumps and update currentEnd to farthest.
// If currentEnd reaches or exceeds the last airport (n-1), return the number of jumps.

// Checking Feasibility :

// If farthest is not updated and is less than or equal to the current index, it means we are stuck and cannot proceed further, so return -1.
// If we exit the loop without reaching the last airport, return -1.





