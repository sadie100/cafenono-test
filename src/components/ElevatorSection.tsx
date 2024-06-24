import { ELEVATOR_ARRAY, FLOOR_LIMIT, ELEVATOR_SIZE } from '../Constants'
import { useElevators } from '../hooks'
import ElevatorLine from './ElevatorLine'

const ElevatorSection = () => {
  const elevators = useElevators()
  return (
    <div style={{ display: 'flex', gap: '50px', width: '400px', height: `${ELEVATOR_SIZE * FLOOR_LIMIT}px` }}>
      {ELEVATOR_ARRAY.map((elevator, idx) => (
        <ElevatorLine key={elevator} {...elevators[idx]} />
      ))}
    </div>
  )
}

export default ElevatorSection
