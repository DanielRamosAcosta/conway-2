import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

export class Map {
  static create(param: Cell[][]) {
    return new Map()
  }

  neighborsOf(coordinates: Coordinates) {
    return [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()]
  }
}
