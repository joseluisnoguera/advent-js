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
    return this.#value + (this.#left?.getValue() || 0) + (this.#right?.getValue() || 0)
  }
}

export default function countDecorations(bigTree) {
  return (new TreeNode(bigTree)).getValue()
}
