/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

const isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }

  const stack = new Uint8Array(10000)
  let stackTop = -1

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i)
    
    switch(charCode) {
      case 40: // '('
      case 91: // '['
      case 123: // '{'
        stackTop++
        stack[stackTop] = charCode
        break
      case 41: // ')'
        if(stackTop < 0 || stack[stackTop] !== 40) {
          return false
        }
        stackTop--
        break
      case 93: // ']'
        if(stackTop < 0 || stack[stackTop] !== 91) {
          return false
        }
        stackTop--
        break
      case 125: // '}'
        if(stackTop < 0 || stack[stackTop] !== 123) {
          return false
        }
        stackTop--
        break
    }
  }

  return stackTop < 0 
};

export { isValid }
