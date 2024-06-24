export interface IElevator {
  to: number
  now: number
  index: number
}

export interface IState {
  floorMap: Record<number, number>
  elevators: IElevator[]
  selectedFloors: number[]
}
