import './App.css';
import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

//pages
import Home from './components/Home/Home'
import About from './components/About/About'
import Users from './components/Users/Users'
import User from "./components/User/User"
import Error from './components/Error/Error'



function App() {

  let activeStyle ={
    background:"black",
    padding:"0.75vh",
    color:"white"

  }

 
  return (
    <Router>
      <div>
        <nav>
          <ul >
            <li>
              <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : undefined}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" style={({isActive}) => isActive ? activeStyle : undefined}>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/user/:id" element={<User/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/*" element={<Error/>} />
          
        </Routes>

   
      </div>
    </Router>
  );
}


export default App;
