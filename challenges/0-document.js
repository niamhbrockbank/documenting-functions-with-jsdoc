// TODO (Ex.0): document and write tests for this function
/**
 * Returns the negative of the given number
 * @param {number} n 
 * @returns {number} the negative of n
 */
function asNegative(n) {
  if (n > 0){
    return -n
  } else {
    return n
  }
}

console.log(asNegative(5),-5)
console.log(asNegative(-6), -6)
console.log(asNegative(0.5), -0.5)

