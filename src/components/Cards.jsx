import React from 'react'

const Cards = (props) => {
    const style = {
        backgroundColor: props.colorCode,
        width: "150px",
        height:"200px",
        margin:"2rem",
        boxShadow: '2px 3px 5px 0px grey,0px -2px 5px 0px grey'
    }

    const h2 = {
      marginTop:"125px",
      marginLeft:"10px"
    }

    const h6 ={
      color:props.colorCode,
      marginTop:"-20px",
      marginLeft:"10px"
    }

    const secondDiv={
      backgroundColor:"white",
      paddingBottom:"10px"
    }
  return (
    <div style={style}>
      <div style={secondDiv}>
        <h2 style={h2}>{props.colorCode}</h2>
        <h6 style={h6}>{props.colorName}</h6>
      </div>
    </div>
  )
}

export default Cards
