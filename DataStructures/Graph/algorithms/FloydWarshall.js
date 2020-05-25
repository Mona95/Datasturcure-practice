/**
 * The Floyd-Warshall algorithm is a dynmaic programming algorithm to calculate all the
 * shortest paths on a graph.with this algorithm, we can find the shortest path from all the sources to all the vertices.
 */

/**
 * How this algorithm works ?
 * first we will initiate the distance array with the value of the weight between each vertex as the min possible
 * distance between i and j is the weight of these vertices. the distance of the vertex to itself is zero.
 * in case there is no edge between two vertices, we will represent it as `Infinity`. using vertices 0...k as intermediate
 * points, the shortest path between i and j is given through k.
 * if a new value for the shortest path is found , we will use it and store it.
 * @param {*} graph
 */
const floydWarshall = (graph) => {
  const dist = [],
    { length } = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        //the heart of the algorithm is this condition
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};
