package validparentheses

func isValid(s string) bool {
	var stack []byte

	pairs := map[byte]byte{
		')': '(',
		']': '[',
		'}': '{',
	}

	for i := 0; i < len(s); i++ {
		char := s[i]
		if openPair, isClosePair := pairs[char]; isClosePair {
			if len(stack) == 0 || stack[len(stack)-1] != openPair {
				return false
			}

			stack = stack[:len(stack)-1]

		} else {
			stack = append(stack, char)
		}
	}

	return len(stack) == 0
}