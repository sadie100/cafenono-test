import FloorButton from './FloorButton'
import { FLOOR_ARRAY } from '../Constants'
import { useFloorMap } from '../hooks'

const FloorButtonSection = () => {
  const floorMap = useFloorMap()
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <span>호출</span>
      {FLOOR_ARRAY.map((floor) => (
        <FloorButton key={floor} floor={floor} isSelected={floorMap[floor] !== 0} />
      ))}
    </div>
  )
}

export default FloorButtonSection
