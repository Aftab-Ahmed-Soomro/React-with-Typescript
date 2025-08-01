import React from 'react'

interface IPROPS {
    heading : string
    name : string
    title : string
    age? : number
}

const Customer:React.FC<IPROPS> = ({name, title, heading, age}) => {
    const color = {
        headingColor : "green",
        paraColor : "purple",
        spanColor : "grey"
    }
  return (
    <div style={{textAlign : "center"}}>
      <h1 style={{color: color.headingColor}}>{heading}</h1>
      <p style={{color : color.paraColor}}>Name : {name}</p>
      <p style={{color : color.paraColor}}>Age : {age}</p>
      <span style={{color : color.spanColor}}>Title : {title}</span>
    </div>
  )
}

export default Customer
