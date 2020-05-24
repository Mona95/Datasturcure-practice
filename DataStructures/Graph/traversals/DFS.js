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
