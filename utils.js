export function defaultEquals(a, b) {
  return a === b;
}

export function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}

export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

export const compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

export const createNonSortedArray = (size) => {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
};
