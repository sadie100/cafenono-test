interface IFloorButton {
  floor: number
}

const FloorButton = (props: IFloorButton) => {
  const { floor } = props
  return <div>{floor}</div>
}

export default FloorButton
