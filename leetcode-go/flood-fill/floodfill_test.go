package floodfill

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFloodField(t *testing.T) {
	t.Run("Flood fill simple case correctly", func(t *testing.T) {
		image := [][]int{
			{1, 1, 1},
			{1, 1, 0},
			{1, 0, 1},
		}
		sr := 1
		sc := 1
		color := 2

		expected := [][]int{
			{2, 2, 2},
			{2, 2, 0},
			{2, 0, 1},
		}

		actual := floodFill(image, sr, sc, color)
		assert.Equal(t, expected, actual)
	})

	t.Run("no change", func(t *testing.T) {
		image := [][]int{
			{0, 0, 0},
			{0, 0, 0},
			{0, 0, 0},
		}
		sr := 0
		sc := 0
		color := 0

		expected := [][]int{
			{0, 0, 0},
			{0, 0, 0},
			{0, 0, 0},
		}

		actual := floodFill(image, sr, sc, color)
		assert.Equal(t, expected, actual)
	})
}
