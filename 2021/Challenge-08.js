export default function maxProfit(prices) {
  let maxProfit = 0
  prices.forEach((buyPrice, i) =>
    prices.slice(i+1).forEach(sellPrice =>
      maxProfit = sellPrice - buyPrice > maxProfit ? sellPrice - buyPrice : maxProfit
    )
  )
  return maxProfit === 0 ? -1 : maxProfit
}