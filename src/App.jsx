
import './App.css'
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/Home";
import { Projects } from './components/Projects/Projects';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(){
  return (

    <BrowserRouter>
  <div className='App'> 
  
  <Navbar> </Navbar>


  <Routes>
      <Route path="/Home" element={<Home />}></Route>

    </Routes>
    
    
    <Home> </Home><Projects></Projects>

    </div>
    </BrowserRouter>
  
  )
}

export default App;
