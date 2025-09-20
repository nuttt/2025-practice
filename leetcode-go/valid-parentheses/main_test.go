package validparentheses

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestIsValid(t *testing.T) {
	t.Run("simple valid parentheses", func(t *testing.T) {
		s := "()"

		expected := true
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("mixed valid parentheses", func(t *testing.T) {
		s := "()[]{}"

		expected := true
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("invalid parentheses wrong order", func(t *testing.T) {
		s := "(]"

		expected := false
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("nested valid parentheses", func(t *testing.T) {
		s := "([])"

		expected := true
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("interleaved invalid parentheses", func(t *testing.T) {
		s := "([)]"

		expected := false
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("empty string", func(t *testing.T) {
		s := ""

		expected := true
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("single opening bracket", func(t *testing.T) {
		s := "("

		expected := false
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})

	t.Run("only closing brackets", func(t *testing.T) {
		s := ")))"

		expected := false
		actual := isValid(s)

		assert.Equal(t, expected, actual)
	})
}
