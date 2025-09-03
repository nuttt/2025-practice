import { describe, it, expect } from 'vitest';
import { isPalindrome } from './125-valid-palindrome.js';

describe('isPalindrome', () => {
  it('should return true for "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false for "race a car"', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('should return true for " "', () => {
    expect(isPalindrome(' ')).toBe(true);
  });

  it('should return true for parlindrome string with alphanumeric character', () => {
    expect(isPalindrome('funny5555ynnuf')).toBe(true)
  })

  it('should return false for parlindrome string with alphanumeric character', () => {
    expect(isPalindrome('funny5566ynnuf')).toBe(false)
  })

  it('should return true for palindrom string which length is odd number', () => {
    expect(isPalindrome('abcba')).toBe(true)
  })

  it('should return true for palindrom string which length is even number', () => {
    expect(isPalindrome('abba')).toBe(true)
  })

  it('should return true for string with single character', () => {
    expect(isPalindrome('a')).toBe(true)
  })
});
