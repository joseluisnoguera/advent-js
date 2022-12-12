const dictionary = {
  '.': 1,
  ',': 5,
  ':': 10,
  ';': 50,
  '!': 100
}

export default function decodeNumber(symbols) {
  const symbolsArr = symbols.split('')
  let total = 0
  for(let i = 0; i < symbolsArr.length; i++){
    const _symbol = symbolsArr[i]
    if (!(_symbol in dictionary)) {
      total = NaN
      break;
    }
    const currValue = dictionary[_symbol]
    const shouldSum = i === symbols.length - 1 || currValue >= dictionary[symbols[i + 1]]
    total += shouldSum ? currValue : - currValue
  }
  return total
}