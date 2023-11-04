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

  it("kills lonely cell", () => {
    const board = Board.create([
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.alive(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
    ])

    const nextBoard = board.nextGeneration()

    const expected = Board.create([
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
    ])
    expect(nextBoard).toEqual(expected)
  })

  it("can be compared", () => {
    const boardWithDeadCell = Board.create([[Cell.dead()]])
    const boardWithAliveCell = Board.create([[Cell.alive()]])

    expect(boardWithDeadCell).not.toEqual(boardWithAliveCell)
  })
})
