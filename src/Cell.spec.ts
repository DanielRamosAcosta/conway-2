import { describe, expect, it } from "vitest"
import { Cell } from "./Cell.js"

describe("Cell", () => {
  it("creates an alive cell", () => {
    const cell = Cell.alive()

    const isAlive = cell.isAlive()

    expect(isAlive).toEqual(true)
  })

  it("creates a dead cell", () => {
    const cell = Cell.dead()

    const isAlive = cell.isAlive()

    expect(isAlive).toEqual(false)
  })
})
