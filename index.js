import { StackArray, StackObject } from "./DataStructures/Stack/Stack.js";
import { Queue } from "./DataStructures/Queue/Queue.js";
import { Deque } from "./DataStructures/Deque/Deque.js";
import { LinkedList } from "./DataStructures/LinkedLists/LinkedList.js";
import { DoublyLinkedList } from "./DataStructures/LinkedLists/DoublyLinkedList.js";
import { SortedLinkedList } from "./DataStructures/LinkedLists/SortedLinkedList.js";
import { StackLinkedList } from "./DataStructures/LinkedLists/StackLinkedList.js";
import { Set } from "./DataStructures/Set/Set.js";

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

/**
 * using `Queue`
 * HotPotato Game : will use a modified version of Queues (circular queue)
 */
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }
  return { eliminated: elimitatedList, winner: queue.dequeue() };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
console.log(result);

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * using `Deque`
 * Palindrome Checker : A palindrome is a word, phrase, number, or other sequence of
 * characters which reads the same backward as forward, such as madam or racecar.
 * deque is a merger between stack and queue, so we can use it easily for this problem
 */
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log("kayak", palindromeChecker("kayak"));
console.log("Step on no pets", palindromeChecker("Step on no pets"));

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
