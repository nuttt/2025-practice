import { test, expect } from "vitest"
import { isValid } from "./20-valid-parentheses" 

test('Example 1: s = "()"', () => {
  expect(isValid("()")).toBe(true)
})

test('Example 2: s = "()[]{}"', () => {
  expect(isValid("()[]{}")).toBe(true)
})

test('Example 3: s = "(]"', () => {
  expect(isValid("(]")).toBe(false)
})

test('Example 4: s = "([])"', () => {
  expect(isValid("([])")).toBe(true)
})

test('Example 5: s = "([)]"', () => {
  expect(isValid("([)]")).toBe(false)
})

test('Additional Case: s = "["', () => {
  expect(isValid("[")).toBe(false)
})