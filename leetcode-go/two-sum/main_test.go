package twosum

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestTwoSum(t *testing.T) {
	t.Run("should return correct result", func(t *testing.T) {
		nums := []int{2, 7, 11, 15}
		target := 9

		expected := []int{0, 1}
		actual := twoSum(nums, target)

		assert.Equal(t, expected, actual)
	})
}
