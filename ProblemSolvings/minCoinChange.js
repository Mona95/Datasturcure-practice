/**
 * The minimum coin change problem consists of finding the minimum number of coins needed
 * to make a particular amount of cents using a given amount of set denominations (d1...dn).
 * For example, the United States has the following denominations (coins): d1 = 1; d2 = 5; d3 = 10; and d4 = 25.
 * If we need to make change for 36 cents, we can use 1 quarter (25), 1 dime (10), and 1 penny (1).
 *
 * The min-coin change solution consists of finding the minimum number of coins for n.
 * But to do this, first we need to find the solution for every x < n.
 */

//coins includes the denominations
const minCoinChange = (coins, amount) => {
  const cache = [];
  //inner function,has access to cache variable to store the result (memoization)
  const makeChange = (value) => {
    if (!value) {
      //if amount is not positive, we will return an empty array
      return [];
    }
    //we will check the cache variable, if the result is already cached, then simply return its value,otherwise we execute the algorithm
    if (cache[value]) {
      return cache[value];
    }
    let min = [],
      newMin,
      newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      //for each coin, we will calculate new amount, which will decrease the value until we reach the minimum amount of change we can give
      newAmount = value - coin;
      if (newAmount >= 0) {
        //if newAmount is a valid value(positive value)
        newMin = makeChange(newAmount);
      }
      //if all the verifications are positive, it means we have a better result than previously
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        console.log("new Min " + min + " for " + amount);
      }
    }
    return (cache[value] = min);
  };
  return makeChange(amount);
};
