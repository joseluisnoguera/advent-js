const COINS_VALUES = [1,2,5,10,20,50]

export default function getCoins(change) {
  let coins = Array(COINS_VALUES.length).fill(0)
  for(let i = COINS_VALUES.length -1; i >= 0; i--){
    coins[i] = Math.floor(change / COINS_VALUES[i])
    change = change - coins[i] * COINS_VALUES[i]
  }
  return coins
}