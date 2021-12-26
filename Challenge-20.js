const SPANISH_LETTERS = 27

const normalize = (str) => str.normalize("NFD").replace(/\p{Diacritic}/gu, "")

export default function pangram(letter) {
  letter = letter
    .toLowerCase()
    .split('')
    .filter(ch => /^[a-zñáéíóúü]+$/i.test(ch))
    .map(ch => (/[áéíóúü]+$/i.test(ch))? normalize(ch) : ch)
  const alphabet = new Set(letter)
  return alphabet.size === SPANISH_LETTERS
}