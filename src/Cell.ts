export class Cell {
  static alive(): Cell {
    return new Cell()
  }

  static dead() {
    return new Cell()
  }

  isAlive() {
    return true
  }
}
