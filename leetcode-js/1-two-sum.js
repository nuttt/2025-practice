const twoSum = (nums, target) => {
  const indexMap = new Map()

  for (let i = 0; i < nums.length; i += 1) {
    let value = nums[i]
    let pairValue = target - value

    let pairValueIndex = indexMap.get(pairValue)

    if (pairValueIndex != null) {
      return [pairValueIndex, i]
    }

    indexMap.set(value, i)
  }

  throw new Error("UnexpectedCase")
};

export { twoSum }
