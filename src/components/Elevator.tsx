import { useEffect } from 'react'
import { IElevator } from '../types'
import { useArriveElevator, useMoveElevator } from '../hooks'
import { ELEVATOR_HEIGHT } from '../Constants'

const idleStyle = {
  border: '1px solid black',
  color: 'black',
}

const selectedStyle = {
  border: '1px solid red',
  color: 'red',
  fontWeight: 'bold',
}

const Elevator = (props: IElevator) => {
  const { now, to, index } = props
  const moveElevator = useMoveElevator()
  const arriveElevator = useArriveElevator()
  const moving = to > 0 && now !== to
  useEffect(() => {
    if (moving) {
      const newFloor = now < to ? now + 1 : now - 1

      moveElevator(index, newFloor)
    } else {
      arriveElevator(index, now)
    }
  }, [now, to, index, moving, moveElevator, arriveElevator])

  return (
    <div
      style={{
        width: '50px',
        height: `${ELEVATOR_HEIGHT}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(180deg)',
        ...(moving ? selectedStyle : idleStyle),
        gridArea: now.toString(),
      }}
    >
      {now}
    </div>
  )
}

export default Elevator
