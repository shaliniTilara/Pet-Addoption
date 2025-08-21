
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Pets from './Pets'
import Process from './Process'
import Reveiw from './Reveiw'
import Adoptnow from './Adoptnow'

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Pets' element={<Pets/>}></Route>
      <Route path='/Process' element={<Process/>}></Route>
      <Route path='/Reveiw' element={<Reveiw/>}></Route>
      <Route path='/Adoptnow'element={<Adoptnow/>}></Route>

     </Routes>
    </>
  )
}

export default App
