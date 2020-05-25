/**
 * Dijkstra's algorithm is a greedy algorithm, to calculate the shortest path between a single source and all the other sources,
 * meaning we can use it to calculate the shortest path from a graph vertex to all the other vertices.
 * first thing is to declare the adjacent matrix of the graph.
 */

const INF = Number.MAX_SAFE_INTEGER; //javascript max number

const dijkstra = (graph, src) => {
  const dist = [],
    visited = [],
    { length } = graph;
  //first we need to initialize all distances as inifinite (js max number) and visited[] as false
  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  //we will set the distance of source vertex from itself as 0
  dist[src] = 0;
  //then we need to find the shortest path for all the vertices
  for (let i = 0; i < length - 1; i++) {
    //selecting the minimum distance vertex from the set of vertices that have not been processed yet
    const u = minDistance(dist, visited);
    //mark the selected vertex as visited so that we do not calculate it twice
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        dist[u] !== INF &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        //in the case the shortest path is found, we will set the new value for the shortest path
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  return dist;
};

//to find the minimum distance, we should search for the min value in the distance array and
//return the array index that contains the min value
const minDistance = (dist, visited) => {
  let min = INF,
    minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};
