import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FLOOR_ARRAY, ELEVATOR_LIMIT } from './Constants'
import { IState } from './types'

// Initial State
const initialState: IState = {
  floorMap: FLOOR_ARRAY.reduce((acc, cur) => {
    acc[cur] = 0
    return acc
  }, {} as Record<number, number>),
  elevators: Array.from({ length: ELEVATOR_LIMIT }, (_, i) => ({ to: 0, now: 1, index: i + 1 })),
  selectedFloors: [],
}

// Slice
const elevatorSlice = createSlice({
  name: 'elevator',
  initialState,
  reducers: {
    selectFloor: (state, action: PayloadAction<number>) => {
      const floor = action.payload
      if (state.selectedFloors.length >= 3 || state.selectedFloors.includes(action.payload)) {
        return
      }
      state.selectedFloors.push(action.payload)
      const idleElevators = state.elevators.filter((elevator) => elevator.to === 0)
      if (idleElevators.length === 1) {
        state.floorMap[floor] = idleElevators[0].index
      }
      if (idleElevators.length > 1) {
        const closestElevator = idleElevators.reduce((acc, cur) => {
          if (Math.abs(cur.now - floor) < Math.abs(acc.now - floor)) {
            return cur
          }
          return acc
        })
        state.floorMap[floor] = closestElevator.index
        state.elevators[closestElevator.index - 1].to = floor
      }
    },
    moveElevator: (state, action: PayloadAction<{ index: number; now: number }>) => {
      const elevator = state.elevators.find((e) => e.index === action.payload.index)
      if (elevator) {
        elevator.now = action.payload.now
      }
    },
    arriveElevator: (state, action: PayloadAction<{ index: number; now: number }>) => {
      const elevator = state.elevators.find((e) => e.index === action.payload.index)
      if (elevator) {
        elevator.now = action.payload.now
        elevator.to = 0
      }
      state.selectedFloors = state.selectedFloors.filter((floor) => floor !== action.payload.now)
    },
  },
})

const { actions, reducer } = elevatorSlice

export default reducer
export const { selectFloor, moveElevator, arriveElevator } = actions
export const store = configureStore({ reducer: { elevator: reducer } })
