import React from 'react'
import "./App.css"
import SignUp from './components/SignUp'
import Login from "./components/Login"
import { Routes ,Route,BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
