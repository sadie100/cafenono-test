import { useDispatch, useSelector } from 'react-redux'
import { IState } from './types'
import { store, selectFloor, moveElevatorAsync, arriveElevator } from './store'

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
  return (index: number, newFloor: number) => dispatch(moveElevatorAsync({ index, newFloor }))
}
export const useArriveElevator = () => {
  const dispatch = useDispatch<typeof store.dispatch>()
  return (index: number, now: number) => dispatch(arriveElevator({ index, now }))
}
export const useSelectedFloors = () => useSelector((state: { elevator: IState }) => state.elevator.selectedFloors)
