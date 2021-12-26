const getBase = (height) => 1 + 2 * (height - 1)

const printTreeLevel = (leaves, base) => {
  const underscores = '_'.repeat((base-leaves)/2)
  return underscores + '*'.repeat(leaves) + underscores
}

export default function createXmasTree(height) {
  const base = getBase(height)
  let level = 1, leaves = 1, tree = ''
  while (level <= height) {
    tree += printTreeLevel(leaves, base) + '\n'
    leaves += 2
    level++
  }
  const floor = '_'.repeat((base-1)/2)
  const treeBase = floor + '#' + floor
  return tree + treeBase + '\n' + treeBase
}