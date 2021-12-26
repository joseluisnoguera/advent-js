const hasBadCharacters = (gift) => {
  const badCharacters = ['{', '[']
  return badCharacters.reduce((state, char) => state || gift.includes(char), false)
}

const validBrackets = (gift) => {
  const BRACKET_FOUND_TOKEN = 1
  let bracketStack = [], hasEmptyBrackets = true
  for (let char of gift) {
    if (char === '(') {
      bracketStack.push(BRACKET_FOUND_TOKEN)
      hasEmptyBrackets = true
    }
    if (char === ')') {
      if (bracketStack.length === 0 || hasEmptyBrackets) return false
      bracketStack.pop()
    }
    if(char !== '(' && char !== ')') hasEmptyBrackets = false
  }
  return bracketStack.length === 0
}


export default function isValid(letter) {
 return letter
  .trim()
  .split(' ')
  .every((gift) => !hasBadCharacters(gift) && validBrackets(gift))
}