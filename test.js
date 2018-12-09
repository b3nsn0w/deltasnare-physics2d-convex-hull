const convexHull = require('.')

const simple = convexHull([[0, 5], [0, -5], [2, 0], [-2, 0], [0, 2]])
const complex = convexHull([
  [0, 6], [1, 3], [5, 2], [-5, 5], [-8, 0], [-2, 1],
  [-5, -1], [4, -1], [-2, -4], [-4, -8], [3, -7]
])

console.log(simple)
console.log(complex)
