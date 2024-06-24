import { ELEVATOR_LIMIT } from '../Constants'
import { useSelectFloor, useSelectedFloors } from '../hooks'

interface IFloorButton {
  floor: number
  isSelected: boolean
}

const idleStyle = {
  border: '1px solid black',
  color: 'black',
}

const selectedStyle = {
  border: '1px solid red',
  color: 'red',
  fontWeight: 'bold',
}
const FloorButton = (props: IFloorButton) => {
  const { floor, isSelected } = props
  const selectElevator = useSelectFloor()
  const selectedFloors = useSelectedFloors()
  const isButtonDisabled = selectedFloors.length === ELEVATOR_LIMIT

  return (
    <button
      style={{
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'white',
        ...(isSelected ? selectedStyle : idleStyle),
        ...(isButtonDisabled ? { backgroundColor: 'lightgray', color: 'gray', border: '1px solid gray' } : {}),
      }}
      onClick={() => selectElevator(floor)}
      disabled={isButtonDisabled}
    >
      {floor}
    </button>
  )
}

export default FloorButton
