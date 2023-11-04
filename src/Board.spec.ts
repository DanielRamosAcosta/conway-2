import { it, describe, expect } from "vitest"

class Cell {
  static dead() {
    return new Cell()
  }
}

class Board {
  static create(cells: Array<Array<Cell>>): Board {
    return new Board()
  }

  nextGeneration(): Board {
    return this
  }
}

describe("Board", () => {
  it("does nothing if all cells are dead", () => {
    const board = Board.create([
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
    ])

    const nextBoard = board.nextGeneration()

    expect(nextBoard).toEqual(board)
  })
})
