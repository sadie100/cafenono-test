import FloorButton from './FloorButton'
import { FLOOR_ARRAY } from '../Constants'

const FloorButtonSection = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <span>호출</span>
      {FLOOR_ARRAY.map((floor) => (
        <FloorButton
          key={floor}
          style={{
            width: '50px',
            height: '50px',
            margin: '5px',
          }}
          floor={floor}
        />
      ))}
    </div>
  )
}

export default FloorButtonSection
