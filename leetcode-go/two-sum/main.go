package twosum

func twoSum(nums []int, target int) []int {
	indexMapper := map[int32]uint16{}

	for i, num := range nums {
		if idx, ok := indexMapper[int32(target-num)]; ok {
			return []int{int(idx), i}
		}

		indexMapper[int32(num)] = uint16(i)
	}

	return []int{0, 0}
}
