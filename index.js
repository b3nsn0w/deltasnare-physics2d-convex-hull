// performs a simple Graham scan on the vertices

const { vec2 } = require('gl-matrix')

const calculateConvexHull = (vertices) => {
  const pivot = vertices.reduce((a, b) => a[1] < b[1] ? a : b)
  const rest = vertices.filter(v => v !== pivot)

  const hull = [pivot]
  const candidates = rest
    .map(vertex => ({ vertex, normalized: vec2.normalize([], vec2.subtract([], vertex, pivot)) }))
    .sort((a, b) => a.normalized[0] < b.normalized[0])

  const isConcave = () => {
    const [current, last, target] = hull.slice(-3)
    return vec2.cross([], vec2.subtract([], current, last), vec2.subtract([], last, target))[2] < 0
  }

  candidates.map(candidate => {
    hull.push(candidate.vertex)
    while (hull.length >= 3 && isConcave()) hull.splice(hull.length - 2, 1)
  })

  return hull
}

module.exports = calculateConvexHull
