import { ELEVATOR_ARRAY } from '../Constants'
import ElevatorLine from './ElevatorLine'

const ElevatorSection = () => {
  return (
    <div style={{ display: 'flex', gap: '50px', width: '1000px', height: '500px' }}>
      {ELEVATOR_ARRAY.map((elevator) => (
        <ElevatorLine key={elevator} index={elevator} />
      ))}
    </div>
  )
}

export default ElevatorSection
