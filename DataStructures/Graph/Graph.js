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
}
