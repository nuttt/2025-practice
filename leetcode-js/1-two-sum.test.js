import { test, expect } from "vitest";
import { twoSum } from "./1-two-sum"

test('case 1', () => {
  expect(twoSum([2,7,11,15], 9)).toMatchObject([0,1])
})

test('case 2', () => {
  expect(twoSum([3,2,4], 6)).toMatchObject([1,2])
})

test('case 3', () => {
  expect(twoSum([3,3], 6)).toMatchObject([0,1])
})

test('case 4', () => {
  expect(twoSum([2,7,11,15], 9)).toMatchObject([0,1])
})
