import { describe, expect, it } from "vitest"
import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"
import { Map } from "./Map.js"

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

  it.skip("retrieves alive neighbors", () => {
    const map: Map = Map.create([
      [Cell.alive(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
      [Cell.dead(), Cell.dead(), Cell.dead()],
    ])

    const neighbors = map.neighborsOf(Coordinates.at(1, 1))

    expect(neighbors).toEqual([
      Cell.alive(),
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
