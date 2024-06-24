import { useDispatch, useSelector } from 'react-redux'
import { IState } from './types'
import { store, selectFloor, moveElevator, arriveElevator } from './store'

export const useElevatorState = () => useSelector((state: { elevator: IState }) => state.elevator)
export const useElevatorDispatch = () => useDispatch<typeof store.dispatch>()

export const useFloorMap = () => useSelector((state: { elevator: IState }) => state.elevator.floorMap)
export const useElevators = () => useSelector((state: { elevator: IState }) => state.elevator.elevators)
export const useSelectFloor = () => {
  const dispatch = useDispatch<typeof store.dispatch>()
  return (floor: number) => dispatch(selectFloor(floor))
}
export const useMoveElevator = () => {
  const dispatch = useDispatch<typeof store.dispatch>()
  return (index: number, now: number) => dispatch(moveElevator({ index, now }))
}
export const useArriveElevator = () => {
  const dispatch = useDispatch<typeof store.dispatch>()
  return (index: number, now: number) => dispatch(arriveElevator({ index, now }))
}
