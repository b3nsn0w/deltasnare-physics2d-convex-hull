Calculates a convex hull for an array of vertices

# Usage

```javascript
const convexHull = require('@deltasnare/physics2d-convex-hull')

const hull = convexHull([[0, 5], [0, -5], [2, 0], [-2, 0], [0, 2]])
// returns [[0, -5], [2, 0], [0, 5], [-2, 0]]
```

A function is exported in the following format:

## `convexHull(vertices)`

Where `vertices` is an array of `vec2` in arbitrary order. The function returns another array of `vec2`, which define a convex hull with all input vertices inside it. The output is arranged in counter-clockwise order.