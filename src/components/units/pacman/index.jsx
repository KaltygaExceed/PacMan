const Pacman = ({position}) => {
  return (
    <div style={{
      backgroundColor: "yellow",
      borderRadius: "50%",
      height: "18px",
      width: "18px",
      position: "absolute",
      left: `${position[0] * 20}px`,
      top: `${position[1] * 20}px`,
    }}/>
  )
}

export default Pacman