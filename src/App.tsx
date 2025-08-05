// import AuthUser from "./components/Auth"
// import Counter from "./components/Counter"
// import Customer from "./components/Customer"
// import FullStack from "./components/FullStack"
// import Login from "./components/Login"
// import UserList from "./components/UserList"
// import Users from "./components/Users"
import {Routes, Route} from 'react-router-dom'
import UserList from './components/UserList'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Counter from './components/Counter'

const App = () => {
  // const bg = {
  //   backgroundColor : "blue",
  //   color : 'black',
  // }
  return (
    <>
      <Navbar />
    <Routes>

      {/* <h1 style={{backgroundColor : bg.backgroundColor,color : bg.color, textAlign : "center", padding : "10px"}}>React Typescript Tutorial</h1>
      <Customer name="Aftab Ahmed" title="Full-Stack dev" heading="Customer Info" age={22} />
      <Counter />
      <FullStack />
      <Login />
      <AuthUser />
      <UserList />
      <Users /> */}
      <Route  path='/' element={<UserList />} />
      <Route  path='/login' element={<Login />} />
      <Route  path='/counter' element={<Counter />} />

    </Routes>
    </>
  )
}

export default App
