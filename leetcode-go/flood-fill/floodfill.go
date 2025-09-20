package floodfill

type position struct {
	row int
	col int
}

func floodFill(image [][]int, sr int, sc int, color int) [][]int {
	initialColor := image[sr][sc]
	if initialColor == color {
		return image
	}

	queue := make([]position, 0, 2500)
	queue = append(queue, position{sr, sc})
	queueIdx := 0

	for queueIdx < len(queue) {
		pos := queue[queueIdx]
		queueIdx++

		if !(0 <= pos.row && pos.row < len(image) && 0 <= pos.col && pos.col < len(image[0])) {
			continue
		}

		cell := &image[pos.row][pos.col]

		if *cell == initialColor {
			*cell = color

			searchPos := []position{
				{pos.row + 1, pos.col},
				{pos.row - 1, pos.col},
				{pos.row, pos.col + 1},
				{pos.row, pos.col - 1},
			}

			queue = append(queue, searchPos...)
		}

	}
	return image
}
