export abstract class Cell {
  static dead(): Cell {
    return new DeadCell()
  }

  static alive() {
    return new AliveCell()
  }

  abstract nextGeneration(neighbors: Cell[]): Cell

  abstract isAlive(): boolean
}

class AliveCell extends Cell {
  isAlive(): boolean {
    return true
  }

  nextGeneration(neighbors: Cell[]): Cell {
    return new DeadCell()
  }
}

class DeadCell extends Cell {
  isAlive(): boolean {
    return false
  }

  nextGeneration(neighbors: Cell[]): Cell {
    return new AliveCell()
  }
}
