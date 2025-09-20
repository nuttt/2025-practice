package longestsubstring

import (
	"testing"
)

func TestLengthOfLongestSubstring(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected int
	}{
		// TODO: Add test cases
		{name: "Case 1", input: "abcabcbb", expected: 3},
		{name: "Case 2", input: "abcdefgh", expected: 8},
		{name: "Case 3", input: "aabbbcccc", expected: 2},
		{name: "Empty String", input: "aabbbcccc", expected: 2},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := lengthOfLongestSubstring(tt.input)
			if result != tt.expected {
				t.Errorf("lengthOfLongestSubstring(%q) = %d, want %d", tt.input, result, tt.expected)
			}
		})
	}
}
