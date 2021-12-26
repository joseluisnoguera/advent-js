export default function countPackages(carriers, carrierID) {
  const carrier = carriers.find(c => c[0] === carrierID)
  if (!carrier) return 0
  return carrier[1] + carrier[2].reduce((partial, c) => partial + countPackages(carriers, c), 0)
}