export default function wrapGifts(gifts) {
  if (gifts.length === 0) return []
  const cover = '*'.repeat(4) + '*'.repeat((gifts[0].length - 2))
  const giftsWrapped = gifts.map(gift => `*${gift}*`)
  return [cover, ...giftsWrapped, cover]
}