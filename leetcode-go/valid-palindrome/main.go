package validpalindrome

import "strings"

func isPalindrome(s string) bool {
	lowered := strings.ToLower(s)
	filtered := []rune{}

	for _, char := range lowered {
		if ('a' <= char && char <= 'z') || ('0' <= char && char <= '9') {
			filtered = append(filtered, char)
		}
	}

	for i := 0; i < len(filtered)/2; i++ {
		if filtered[i] != filtered[len(filtered)-i-1] {
			return false
		}
	}

	return true
}