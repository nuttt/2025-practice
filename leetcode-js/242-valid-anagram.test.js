import { describe, it, expect } from 'vitest';
import { isAnagram } from './242-valid-anagram';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for invalid anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should return false for different lengths', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
  });
});