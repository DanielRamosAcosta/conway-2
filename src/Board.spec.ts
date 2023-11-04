import { it, describe, expect } from "vitest"


describe("Board", () => {
  it("does nothing if all cells are dead", () => {
    const board: Board = Board.create(
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()]
    )

    const nextBoard = board.nextGeneration()

    expect(nextBoard).toEqual(board)
  })
})
