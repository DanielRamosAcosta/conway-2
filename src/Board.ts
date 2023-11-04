import { Cell } from "./Cell.js"

export class Board {
  static create(cells: Array<Array<Cell>>): Board {
    return new Board()
  }

  nextGeneration(): Board {
    return this
  }
}
