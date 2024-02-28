/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 || i === n) {
           count++; 
        }
    }
    
    return count === 3;
};