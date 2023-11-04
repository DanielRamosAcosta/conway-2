import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js"

describe("Cell", () => {
  it("revives a dead cell", () => {
    const dead = Cell.dead()

    const alive = dead.nextGeneration([
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ])

    expect(alive.isAlive()).toBe(true)
  })

  it("kill a lonely cell", () => {
    const alive = Cell.alive()

    const dead = alive.nextGeneration([
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ])

    expect(dead.isAlive()).toBe(false)
  })
})
