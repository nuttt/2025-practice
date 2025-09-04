/**
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

const ALPHABET_SIZE = 26
const FIRST_CHAR_CODE = 97 // ascii 'a'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    // input size has max length at 5 * 10^4 --> needs 16bit to store character count
    const charCount = new Uint16Array(ALPHABET_SIZE)

    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - FIRST_CHAR_CODE] += 1
        charCount[t.charCodeAt(i) - FIRST_CHAR_CODE] -= 1
    }

    return charCount.every((count) => count === 0)
};

export { isAnagram }
