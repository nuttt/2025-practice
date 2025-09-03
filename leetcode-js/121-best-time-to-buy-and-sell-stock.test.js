import { test, expect, it } from "vitest";
import { maxProfit } from "./121-best-time-to-buy-and-sell-stock.js";

test("Example 1: prices = [7,1,5,3,6,4]", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  expect(maxProfit(prices)).toBe(5);
});

test("Example 2: prices = [7,6,4,3,1]", () => {
  const prices = [7, 6, 4, 3, 1];
  expect(maxProfit(prices)).toBe(0);
});

it("should return 0 for an array with single price", () => {
  const prices = [9999]
  expect(maxProfit(prices)).toBe(0)
})

it("should return 0 when all prices are the same", () => {
  const prices = [5, 5, 5, 5, 5]
  expect(maxProfit(prices)).toBe(0)
})
