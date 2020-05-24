/**
 * when marking the vertices that we have already visited, we will use three colors to reflect their status :
 * White : vertex has not been visited .
 * Grey : vertex has been visited but not explored.
 * Black : vertex has been completely explored.
 */

export const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

//both algorithms need a helper object to help to store if the vertex has been visited or not.
//in the begining of each algorithm, all the vertices will be marked as not visited (white color).
export const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};
