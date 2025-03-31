import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  )
}

export default App
