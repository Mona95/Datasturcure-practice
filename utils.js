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
