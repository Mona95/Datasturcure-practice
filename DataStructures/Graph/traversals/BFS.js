import { initializeColor, Colors } from "./colors";
import { Queue } from "../../../all";

/**
 * Breadth-first search (BFS)
 * data structure for this algorithm is Queue , by storing the vertices in a queue, the oldest
 * unexplored vertices are explored first.
 * the BFS algorithm starts traversing the graph from the first specified vertex and visits all its neighbors first, one layer of graph at a time.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/a5e417b0-6ee9-470c-a697-583a95458260.png}
 *
 * these are the steps followed by the BFS algorithm, starting at vertex v :
 * 1-Create a queue Q
 * 2- mark v as discovered(grey) and enqueue v into Q
 * 3- while Q is not empty, perform the following steps:
 *      1- dequeue u from Q
 *      2- mark u as discovered(grey)
 *      3- enqueue all the unvisited(white) neighbors w of u
 *      4- mark u as explored (black)
 */

export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices(),
    adjList = graph.getAdjList(),
    color = initializeColor(vertices), //initializing the the color array with the white color
    queue = new Queue(); // creating queue to store the vertices that need to be explored and visited.

  queue.enqueue(startVertex); //we need a starting point so we will enqueue this vertex into the queue

  while (!queue.isEmpty()) {
    //as long as the queue is not empty, we will remove a vertex from the queue by using dequeue
    //and we will get its adjacency list that conatins all its neighbors,also make the color GREY which means
    //we have discovered the vertex but have not finished exploring it yet.
    const u = queue.dequeue(),
      neighbors = adjList.get(u);
    color[u] = Colors.GREY;

    //for each neighbor of u, we will obtain its value(the name of the vertex) and if it has not been visited yet(color is WHITE),
    //we will mark that we have discovered it(color set to GREY),and adding this vertex to the queue so it can be finished exploring when we dequeue it
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }

    //when we are done with the vertex and its adjacent neighbors,we will set the color to BLACK
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
};

/**
 * Implementation of an improved BFS function shortest paths using BFS
 * @param {*} graph
 * @param {*} startVertex
 */
const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices(),
    adjList = graph.getAdjList(),
    color = initializeColor(vertices),
    queue = new Queue(),
    distances = [],
    predecessors = []; //which are used to derive the shortest path from v to every other vertex u

  queue.enqueue(startVertex);

  //initializing the distances array with 0 and the predecessors array with null for every vertex of the graph
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = nu;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        //when we discover the neighbor w of a vertex u , we will set the predecessor value of w as u
        //and also increment the distance between v and w by adding 1 and the distance of u(as u is a predecessor of w, we have the value of distance[u])
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
};
