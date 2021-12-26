export default function listGifts(letter) {
  const emptyBag = {}
  const giftBagger = (bag, gift) => {
    bag[gift] = ++bag[gift] || 1
    return bag
  }
  return letter
    .trim()
    .split(' ')
    .filter(gift => !gift.startsWith('_'))
    .reduce(giftBagger, emptyBag)
}