
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Signup from './SignupSignIn'
import StudentDetails from './StudentDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
<nav className="navbar bg-body-tertiary">
      <Link to='/'>Home </Link>
      <Link to='/about'>About </Link>
      <Link to='/Signup'>Signup/signin </Link>
      <Link to='/student'>Student Details </Link>
    </nav>
    <Routes>
      <Route path='/' element={<><Home></Home></>} />
      <Route path='/about' element={<><About></About></>} />
      <Route path='/Signup' element={<><Signup></Signup></>} />
      <Route path='/student' element={<><StudentDetails></StudentDetails></>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
