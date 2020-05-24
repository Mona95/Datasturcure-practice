import { Dictionary } from "../Dictionary/Dictionary.js";
/**
 * Graph is an abstract model of a network data structure. it is a set of `nodes` connected by edges.
 * a graph G = (V, E) is composed of :
 * V = a set of nodes(vertices)
 * E = a set of edges connecting the vertices in V
 * Graph's terminologies
 * - vertices connected by an edge are called `adjacent vertices`.
 * - a degree of a vertex consists of the number of adjacent vertices. for example if a node is connected to three other nodes,
 * therefore that node's degree is three .
 * - a path is a sequence of consecutive vertices, such as v1,v2, ..., vk where v(i) and v(i)+1 are adjacent. a simple path, a cycle ,
 * does not contain repeated vertices.
 * - a graph is acyclic if it doesn't have cycles.
 * - a graph is connected, if there is a path between every pair of vertices.
 * - graphs can be `undirected`(where edges do not have any direction) or `directed`(where edges have a direction.)
 * - a graph is strongly connected if there is a path in both directions between every pair of vertices.
 * - graphs can be `weighted` (where edges have  weight/values) or `unweighted` (no values)
 *
 * Representing graphs as data strucutres :
 * 1 - the most common way is the `adjacency matrix`. each node is associated with an integer,
 * which is the array index.we will represent the connectivity between vertices using a two-dimensional array as array[i][j] === 1 if
 * there is an edge from the node with index i to the node with index j, otherwise array[i][j] === 0 .
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/cb4f942b-6cf9-4db7-a0e4-c5d93d44f18c.png}
 * graphs that are not strongly connected, will be represented by a matrix with many zero entries in the adjacency matrix, this means we would
 * waste space in the computer memory ,also the number of vertices can change and a two-dimensional array is not flexibe .
 * 2 - `adjacency list` , this consists of a list of adjacent vertices for every vertex of the graph.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/268857bd-bb32-4fa5-88c9-66d7787952e9.png}
 * 3 - `incidence matrix`, each row represents a vertex and each column represents an edge.we will represent the connectivity between two
 * objects using a two-dimensional array, as array[v][e] === 1 if the vertex v is an incident upon edge e .
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/08e9e360-387b-481c-984e-3224d4ddc5c9.png}
 */

export class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = []; // using an array to store the names of all the vertices of the graph
    this.adjList = new Dictionary(); //using a dictionary to store the adjacent list, dictionary will use the name of the vertex as a key
    //and the list of adjacent vertices as value.
  }
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []); //initializing the adjacent list with an empty array by setting dictionary value of the vertex v key with an empty array.
    }
  }
  /**
   * Method receives two parameters, which are the vertices we want to link the graph.
   * before linking the vertices, we need to verify if the vertices exist in the graph.if they do not exist, we will
   * add them to the list of vertices .
   * then we will add and edge from vertex v to vertex w by adding w to the adjacent list of v .
   * @param {*} v
   * @param {*} w
   */
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w); //adding edge from v to w
    if (!this.isDirected) {
      this.adjList.get(w).push(v); //just adding new elements to the array as we have already initialized it
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} ->`; //first adding the name of vertex to string
      const neighbors = this.adjList.get(this.vertices[i]); // then we will get the adjacent list for that vertex
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]}`;
      }
      s += "\n";
    }
    return s;
  }
}
