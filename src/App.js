import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import Navbar from './components/Navbar'
import {useState,useEffect} from "react"
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const [authenticate,setAuthenticate] = useState(false)

  useEffect(() =>{
    console.log("autheticated?",authenticate)
  },[authenticate])

  return (
    <div>
      <Navbar authenticate = {authenticate} setAuthenticate = {setAuthenticate}/>
      <Routes>set
        <Route path = "/" element = {<ProductAll/>}></Route>
        <Route path = "/login" element = {<Login setAuthenticate = {setAuthenticate}/>}></Route>
        <Route path = "/product/:id" element = {<PrivateRoutes authenticate = {authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
