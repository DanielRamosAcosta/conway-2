export class Cell {
  static dead(): Cell {
    return new Cell()
  }

  static alive() {
    return new Cell()
  }

  nextGeneration(neighbors: Cell[]): Cell {
    return new Cell()
  }

  isAlive() {
    return true
  }
}
