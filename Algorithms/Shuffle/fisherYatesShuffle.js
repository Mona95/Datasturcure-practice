/**
 * The Fisher-Yates Shuffle
 * it consists of iterating each position of the array, starting with its last position and swapping the current
 * position with a random position. the random position is lesser than the current position, this way, the algorithm
 * makes sure the positions already shuffled will not be shuffled again.
 */

import { swap } from "../../utils";

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i.randomIndex);
  }
  return array;
};
