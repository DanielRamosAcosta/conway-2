import { Cell } from "./Cell.js"

export class Board {
  constructor(private readonly cells: Array<Array<Cell>>) {}

  static create(cells: Array<Array<Cell>>): Board {
    return new Board(cells)
  }

  nextGeneration(): Board {
    return this
  }
}
