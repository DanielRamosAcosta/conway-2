export class Cell {
  static isAlive() {
    return true;
  }
  static alive(): Cell {
    return new Cell()
  }
  static dead() {
    return new Cell()
  }
}
