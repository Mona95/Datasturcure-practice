/**
 * The knapsack problem is a combinatorial optimization problem. It can be described as follows:
 * given a fixed-size knapsack with a capacity to carry W amount of weight and a set of items that have a value and weight,
 * find the best solution in a way to fill the knapsack with the most valuable items so that the total weight is less than or equal to W
 * There are two versions of this problem: the 0-1 version, in which we can only fill the knapsack with the whole item, and the fractional knapsack problem, in which we can take fractions of the items.
 * For this example, we will work with the 0-1 version of the problem.
 *  The fractional version cannot be solved with dynamic programming, but it can be solved with a greedy algorithm,
 */

//algorithm only outputs the max value that can be carried by the knapsack.
const knapsack = (capacity, weights, values, n) => {
  const kS = [];
  for (let i = 0; i <= n; i++) {
    //initializing the matrix that will be used to find the solution
    //this matrix is kS[n+1][capacity+1]
    kS[i] = [];
  }
  for (let i = 0; i <= 0; i++) {
    for (let w = 0; w <= capacity; w++) {
      //we will ignore the first column and row of the matrix so that we can work
      //only with indexes different from 0
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        //item i can only be part of the solution if its weight is less than the capacity
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        //when we find that an item can be part of a solution, we will choose the one with the max value
        kS[i][w] = a > b ? a : b; // max(a,b)
      } else {
        kS[i][w] = kS[i - 1][w];
      }
    }
  }
  //to find the items that are part of the solution
  findValues(n, capacity, kS, weights, values);
  //The solution can be found in the last cell of the two-dimensional table,
  // which is found in the lower right-hand corner of the table
  return kS[n][capacity];
};

const findValues = (n, capacity, kS, weights, values) => {
  {
    let i = n;
    let k = capacity;
    console.log("Items that are part of the solution:");
    while (i > 0 && k > 0) {
      if (kS[i][k] !== kS[i - 1][k]) {
        console.log(
          `item ${i} can be part of solution w,v: ${weights[i - 1]} , ${
            values[i - 1]
          }`
        );
        i--;
        k -= kS[i][k];
      } else {
        i--;
      }
    }
  }
};
