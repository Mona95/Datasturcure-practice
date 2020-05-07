import { defaultToString } from "../../utils.js";

export function loseloseHasCode(key) {
  if (typeof key === "number") {
    return key;
  }
  const tableKey = defaultToString(key);
  let hash = 0;
  for (let i = 0; i < tableKey.length; i++) {
    //generate a number based on the sum of each char ASCII value
    hash += tableKey.charCodeAt(i);
  }
  //to work with lower numbers we must use the rest of the division of the hash,
  //number is arbitrary, this will avoid working with very big numbers
  return hash % 28;
}

//this method creates lesser collision for hashtable
export function djb2HashCode(key) {
  const tableKey = defaultToString(key);
  //initializing the hash with a prime number,most implementations use 5381
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    //33 considered as a magical key in this hash function.
    hash = hash * 33 + tableKey.charCodeAt(i);
  }
  //used another random prime number , greater than the size we think the hashtable instance can have.
  return hash % 1013;
}
