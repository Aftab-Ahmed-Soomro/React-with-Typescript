import Customer from "./components/Customer"

const App = () => {
  const bg = {
    backgroundColor : "blue",
    color : 'black',
  }
  return (
    <div>
      <h1 style={{backgroundColor : bg.backgroundColor,color : bg.color, textAlign : "center", padding : "10px"}}>React Typescript Tutorial</h1>
      <Customer name="Aftab Ahmed" title="Full-Stack dev" heading="Customer Info" age={22} />
    </div>
  )
}

export default App
