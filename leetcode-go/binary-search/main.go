package binarysearch

func search(nums []int, target int) int {
	low, high := 0, len(nums)-1
	var mid int

	for low <= high {
		mid = (low + high) / 2

		switch {
		case nums[mid] == target:
			return mid
		case nums[mid] > target:
			high = mid - 1
		case nums[mid] < target:
			low = mid + 1
		}
	}

	return -1
}
