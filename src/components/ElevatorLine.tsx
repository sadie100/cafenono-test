import { FLOOR_LIMIT } from '../Constants'
import Elevator from './Elevator'

const ElevatorLine = (props) => {
  return (
    <div style={{ display: 'grid', gridTemplateRows: `${FLOOR_LIMIT}fr`, gridTemplateColumns: 1, border: '1px solid black', height: '100%', width: '30%' }}>
      <Elevator {...props} />
    </div>
  )
}

export default ElevatorLine
