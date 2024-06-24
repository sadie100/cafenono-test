import { FLOOR_ARRAY, FLOOR_LIMIT } from '../Constants'
import Elevator from './Elevator'
import { IElevator } from '../types'

const style = {
  padding: '10px',
  display: 'grid',
  gridTemplateRows: `repeat(${FLOOR_LIMIT}, 1fr)`,
  gridTemplateColumns: 1,
  border: '1px solid black',
  height: '100%',
  width: '70px',
  gridTemplateAreas: FLOOR_ARRAY.join('\n'),
  transform: 'rotate(180deg)',
  alignItems: 'center',
}

const ElevatorLine = (props: IElevator) => {
  return (
    <div style={style}>
      <Elevator {...props} />
    </div>
  )
}

export default ElevatorLine
