/**
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const sanitizedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // return sanitizedString === sanitizedString.split('').reverse().join('')

  for (let leftIdx = 0; leftIdx < sanitizedString.length / 2; leftIdx++) {
    if (
      sanitizedString[leftIdx] !==
      sanitizedString[sanitizedString.length - leftIdx - 1]
    ) {
      return false;
    }
  }

  return true;
};

export { isPalindrome };
