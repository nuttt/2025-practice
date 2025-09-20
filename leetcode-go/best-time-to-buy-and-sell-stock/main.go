package besttimetobuyandsellstock

func maxProfit(prices []int) int {
	profit := 0
	minPrice := prices[0]

	for _, price := range prices {
		minPrice = min(minPrice, price)
		profit = max(profit, price-minPrice)
	}

	return profit
}
