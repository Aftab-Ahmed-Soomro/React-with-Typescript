import AuthUser from "./components/Auth"
import Counter from "./components/Counter"
import Customer from "./components/Customer"
import FullStack from "./components/FullStack"
import Login from "./components/Login"

const App = () => {
  const bg = {
    backgroundColor : "blue",
    color : 'black',
  }
  return (
    <div>
      <h1 style={{backgroundColor : bg.backgroundColor,color : bg.color, textAlign : "center", padding : "10px"}}>React Typescript Tutorial</h1>
      <Customer name="Aftab Ahmed" title="Full-Stack dev" heading="Customer Info" age={22} />
      <Counter />
      <FullStack />
      <Login />
      <AuthUser />
    </div>
  )
}

export default App
