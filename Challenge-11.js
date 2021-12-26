const TICKT_BASE_VALUE = 12, FIDELITY_PROM_VALUE = 250, FIDELITY_DISCOUNT = 0.75

export default function shouldBuyFidelity(times) {
  const normalCost = TICKT_BASE_VALUE * times
  const geometricSeriesFormula = (Math.pow(FIDELITY_DISCOUNT, times + 1)- FIDELITY_DISCOUNT) / (FIDELITY_DISCOUNT - 1)
  const fidelityCost = FIDELITY_PROM_VALUE + TICKT_BASE_VALUE * geometricSeriesFormula
  return fidelityCost < normalCost
}