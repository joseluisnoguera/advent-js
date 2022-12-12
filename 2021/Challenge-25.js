class MoveValidator {
  mouseX = -1
  mouseY = -1
  room = null
  constructor(room) {
    let y = 0, x = 0, notFound = true
    while(notFound && y < room.length) {
      const row = room[y]
      x = 0
      while(notFound && x < row.length) {
        notFound = row[x] !== 'm'
        notFound && x++
      }
      notFound && y++
    }
    this.mouseX = x
    this.mouseY = y
    this.room = room
  }
  hasAMouse() {
    return this.mouseX !== -1 && this.mouseY !== -1
  }
  up() {
    const validMove = this.hasAMouse() && this.mouseY > 0 && this.mouseY < this.room.length
    return validMove ? this.room[this.mouseY-1][this.mouseX] === '*' : false
  }
  down() {
    const validMove = this.hasAMouse() && this.mouseY >= 0 && this.mouseY < this.room.length - 1
    return validMove ? this.room[this.mouseY+1][this.mouseX] === '*' : false
  }
  left() {
    const validMove = this.hasAMouse() && this.mouseX > 0 && this.mouseX < this.room[this.mouseY].length
    return validMove ? this.room[this.mouseY][this.mouseX-1] === '*' : false
  }
  right() {
    const validMove = this.hasAMouse() && this.mouseY >= 0 && this.mouseX < this.room[this.mouseY].length - 1
    return validMove ? this.room[this.mouseY][this.mouseX+1] === '*' : false
  }
}

export default function canMouseEat(direction, game) {
  const moveValidator = new MoveValidator(game)
  return moveValidator[direction]()
}