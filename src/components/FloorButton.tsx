import { useSelectFloor } from '../hooks'

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
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        ...(isSelected ? selectedStyle : idleStyle),
      }}
      onClick={() => selectElevator(floor)}
    >
      {floor}
    </div>
  )
}

export default FloorButton
