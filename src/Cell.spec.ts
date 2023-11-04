import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js"

describe("Cell", () => {
  it("compares an alive and dead cell", () => {
    const dead = Cell.dead()

    const alive = dead.nextGeneration([Cell.alive(), Cell.alive(), Cell.alive()])

    expect(alive.isAlive()).toBe(true)
  })
})
