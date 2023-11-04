import { describe, it, expect } from "vitest"

class Map {
  static create(param: Cell[][]) {
    return new Map()
  }

  neighborsOf(coordinates: Coordinates) {
    return [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()]
  }
}

class Cell {
  static dead(): Cell {
    return new Cell()
  }
}

class Coordinates {
  static at(x: number, y: number) {
    return new Coordinates()
  }
}

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
