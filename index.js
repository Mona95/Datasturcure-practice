import { StackArray, StackObject } from "./DataStructures/Stack/Stack.js";
import { Queue } from "./DataStructures/Queue/Queue.js";
import { Deque } from "./DataStructures/Deque/Deque.js";

/**
 * using "STACK"
 * Converting Decimal numbers to binary
 * using stack here will be so useful becase for displaying binary numbers,
 * we have to show the remained result from last to first
 * and stack has LIFO principle
 */
const decimalToBinary = (decNumber) => {
  let remStack = new StackObject(),
    number = decNumber,
    binaryString = "",
    rem;
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};

console.log(decimalToBinary(233)); // 11101001

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
