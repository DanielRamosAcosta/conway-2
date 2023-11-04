import { describe, it, expect } from "vitest"

describe("Map", () => {
  it("can retrieve neighbors of a cell", () => {
    const map: Map = Map.create([
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
    ])

    const neighbors = map.neighborsOf(Coordinates.at(1, 1))

    expect(neighbors).toEqual([
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ])
  })
})
