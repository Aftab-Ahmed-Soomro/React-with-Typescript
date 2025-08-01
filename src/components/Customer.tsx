import React, {useState} from 'react'

interface IPROPS {
    heading : string
    name : string
    title : string
    age? : number
}

interface ISTATE {
  name: string,
  title: string
}

const Customer:React.FC<IPROPS> = ({name, title, heading, age}) => {
    const color = {
        headingColor : "green",
        paraColor : "purple",
        spanColor : "grey"
    }

    const [state, setState] = useState<ISTATE>({name:"Aftab", title:"Full-Stack Dev"})
  return (
    <div style={{textAlign : "center"}}>
      <h1 style={{color: color.headingColor}}>{heading}</h1>
      <p style={{color : color.paraColor}}>Name : {name}</p>
      <p style={{color : color.paraColor}}>Age : {age}</p>
      <span style={{color : color.spanColor}}>Title : {title}</span>
      <div>
        <h1>Values from State</h1>
        <p>Name : {state.name}</p>
        <span>Title : {state.title}</span>
      </div>
    </div>
  )
}

export default Customer
