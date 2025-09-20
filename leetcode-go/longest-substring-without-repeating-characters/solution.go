package longestsubstring

func lengthOfLongestSubstring(s string) int {
	maxLength := 0

	charCount := map[byte]int{}

	start := 0

	// end is index after last character
	for end := 0; end < len(s); end++ {
		for charCount[s[end]] > 0 {
			charCount[s[start]]--
			start++
		}

		charCount[s[end]]++

		maxLength = max(maxLength, end-start+1)
	}

	return maxLength
}
