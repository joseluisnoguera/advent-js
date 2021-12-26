//Validators
const sheepColorValidator = (sheepColor) => {
  const validSheepColors = ['rojo']
  return validSheepColors.includes(sheepColor)
}

const sheepSubNameValidator = (sheepName) => {
  const validSheepSubname = ['na']
  const lowerCaseSheepName = sheepName.toLowerCase()
  return validSheepSubname.reduce((state, sheepSubName) => state || lowerCaseSheepName.includes(sheepSubName), false)
}

//Filter
const sheepFilter = (sheep) => sheepColorValidator(sheep.color) && sheepSubNameValidator(sheep.name)

export default function contarOvejas(ovejas) {
  return ovejas.filter(sheepFilter)
}