/**
 * Depth-first-search (DFS)
 * data structure for this algorithm is Stack , by storing the vertices in a stack , the vertices are explored
 * along a path , visiting a new adjacent vertex if there is one available.
 * the DFS algorithm will start traversing the graph from the first specified vertex and will follow a path until the last vertex
 * of this path is visited, next, it is going to backtrack the path and then follow the next path,in other words,
 * it visits the vertices first deep and then wide .
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/9844236c-b9e3-49aa-bee1-215c0d4c958a.png}
 *
 * the DFS algorithm does not need a source vertex,in this algorithm, for each unvisited vertex v in graph G, visit the vertex v.
 * to visit vertex v, perform the following steps :
 * 1- Mark v as discovered(grey)
 * 2- for all unvisited (white) neighbors w of v, visit vertex w.
 * 3- mark v as explored(black)
 *
 * as you noticed, the DFS steps are recrusive, meaning the DFS algorithm uses a stack to store the calls(a stack created by the recrusive calls).
 * the idea behind the DFS algorithm, the edges are explored out of the most recently discovered vertex.
 */

import { initializeColor, Colors } from "./colors";

const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices(),
    adjList = graph.getAdjList(),
    color = initializeColor(vertices);

  //for each unvisited vertex of the graph instance, we will call the recrusive funcion `depthFirstSearchVisit`
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  //whenever we visit the vertex u, we set the color to grey
  color[u] = Colors.GREY;
  //if there is a callback function, we will evoke it
  if (callback) {
    callback(u);
  }
  //next step is getting the neighbors of the vertex u
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[u] = Colors.BLACK;
};

/**
 * Implementation of DFS with discovery time and finish explorer
 * the discovery time d[u] of u
 * the finish time f[u] when u is marked black
 * the predecessors p[u] of u
 *
 * there are two things we need to check in the DFS algorithm:
 * the time variable can only have values from one to two times the number of vertices of the graph
 * for all the vertices u, d[u] < f[u](meaning the discovered time needs to have a lower value than the finish time)
 */
const DFS = (graph) => {
  const vertices = graph.getVertices(),
    adjList = graph.getAdjList(),
    color = initializeColor(vertices),
    d = [],
    f = [],
    p = [],
    time = { count: 0 };

  //initializing these arrays for each vertex of the graph
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.WHITE.GREY;
  //when a vertex in first discovered, we will track its discovery time,
  d[u] = ++time.count;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  //track the vertex's finish time when the vertex is totally explored
  f[u] = ++time.count;
};
