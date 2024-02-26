import { Routes,Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart"; 
const App = () => {
  return(
    <div>

      <div className="bg-slate-900">
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
    
  );
};

export default App;
