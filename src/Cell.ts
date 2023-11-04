export class Cell {
  constructor(private readonly alive: boolean) {}

  static alive(): Cell {
    return new Cell(true)
  }

  static dead() {
    return new Cell(false)
  }

  isAlive() {
    return this.alive
  }
}
