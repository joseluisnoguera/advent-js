class TreeNode {
  #value = 0
  #left = null
  #right = null
  constructor({value, left, right}){
    this.#value = value
    if (left !== null)
      this.#left = new TreeNode(left)
    if (right !== null)
      this.#right = new TreeNode(right)
  }
  getValue(){
    return this.#value
  }
  getLeftTree(){
    return this.#left
  }
  getRightTree(){
    return this.#right
  }
  isEqual(tree){
    return tree !== null &&
    this.#value === tree.getValue() &&
    ((this.#left === null)?
      tree.getLeftTree() === null
      : (this.#left).isEqual(tree.getLeftTree()))  &&
    ((this.#right === null)?
      tree.getRightTree() === null
      : (this.#right).isEqual(tree.getRightTree()))
  }
}

export default function checkIsSameTree(treeA, treeB) {
  treeA = new TreeNode(treeA)
  treeB = new TreeNode(treeB)
  return treeA.isEqual(treeB)
}