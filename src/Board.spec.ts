import { describe, expect, it } from "vitest"
import { Cell } from "./Cell.js"
import { Board } from "./Board.js"

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
