import { Route, Routes } from "react-router";
import "./App.css"
import Navbar from "./assets/navbar/AtomNavbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}/>
    </Routes>
  );
}



export default App;
