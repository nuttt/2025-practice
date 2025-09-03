import { test, expect } from "vitest";
import { mergeTwoLists, ListNode } from "./21-merge-two-sorted-lists"; // Import ListNode

// Helper function to create a ListNode from an array
function createListNode(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  // Use the imported ListNode constructor
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert a ListNode to an array for comparison
function listNodeToArray(node) {
  const arr = [];
  let current = node;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

test('Example 1: list1 = [1,2,4], list2 = [1,3,4]', () => {
  const list1 = createListNode([1, 2, 4]);
  const list2 = createListNode([1, 3, 4]);
  const expected = [1, 1, 2, 3, 4, 4];
  const result = mergeTwoLists(list1, list2);
  expect(listNodeToArray(result)).toEqual(expected);
});

test('Example 2: list1 = [], list2 = []', () => {
  const list1 = createListNode([]);
  const list2 = createListNode([]);
  const expected = [];
  const result = mergeTwoLists(list1, list2);
  expect(listNodeToArray(result)).toEqual(expected);
});

test('Example 3: list1 = [], list2 = [0]', () => {
  const list1 = createListNode([]);
  const list2 = createListNode([0]);
  const expected = [0];
  const result = mergeTwoLists(list1, list2);
  expect(listNodeToArray(result)).toEqual(expected);
});
